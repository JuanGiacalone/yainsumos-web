import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

function ensureLogDir() {
    if (!fs.existsSync(LOG_DIR)) {
        fs.mkdirSync(LOG_DIR, { recursive: true });
    }
}

function trimLogFile(logPath, maxSize) {
    try {
        if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
            return;
        }
        const lines = fs.readFileSync(logPath, "utf-8").split("\n");
        const keptLines = [];
        let keptBytes = 0;
        const targetSize = TRIM_TARGET_BYTES;
        for (let i = lines.length - 1; i >= 0; i--) {
            const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
            if (keptBytes + lineBytes > targetSize) break;
            keptLines.unshift(lines[i]);
            keptBytes += lineBytes;
        }
        fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
    } catch { /* ignore */ }
}

function writeToLogFile(source, entries) {
    if (entries.length === 0) return;
    ensureLogDir();
    const logPath = path.join(LOG_DIR, `${source}.log`);
    const lines = entries.map((entry) => `[${new Date().toISOString()}] ${JSON.stringify(entry)}`);
    fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");
    trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

function vitePluginManusDebugCollector() {
    return {
        name: "manus-debug-collector",
        transformIndexHtml(html) {
            if (process.env.NODE_ENV === "production") return html;
            return {
                html,
                tags: [{ tag: "script", attrs: { src: "/__manus__/debug-collector.js", defer: true }, injectTo: "head" }],
            };
        },
        configureServer(server) {
            server.middlewares.use("/__manus__/logs", (req, res, next) => {
                if (req.method !== "POST") return next();
                let body = "";
                req.on("data", (chunk) => body += chunk.toString());
                req.on("end", () => {
                    try {
                        const payload = JSON.parse(body);
                        if (payload.consoleLogs?.length > 0) writeToLogFile("browserConsole", payload.consoleLogs);
                        if (payload.networkRequests?.length > 0) writeToLogFile("networkRequests", payload.networkRequests);
                        if (payload.sessionEvents?.length > 0) writeToLogFile("sessionReplay", payload.sessionEvents);
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ success: true }));
                    } catch (e) {
                        res.writeHead(400, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ success: false, error: String(e) }));
                    }
                });
            });
        },
    };
}

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [
            tailwindcss(),
            jsxLocPlugin(),
            vitePluginManusRuntime(),
            vitePluginManusDebugCollector()
        ],
        resolve: {
            alias: {
                "@": path.resolve(import.meta.dirname, "src"),
                "@shared": path.resolve(import.meta.dirname, "shared"),
                "@assets": path.resolve(import.meta.dirname, "attached_assets"),
            },
        },
    }
});
