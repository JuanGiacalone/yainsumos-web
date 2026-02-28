import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary>
            <ThemeProvider defaultTheme="light">
                <TooltipProvider>
                    <Toaster />
                    {children}
                </TooltipProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}
