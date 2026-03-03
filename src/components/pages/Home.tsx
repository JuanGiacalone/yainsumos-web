import { MessageCircle, MapPin, Package, Zap, Headphones, Cpu } from "lucide-react";

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.412c-1.935 0-3.83-.502-5.495-1.454l-.394-.227-4.085 1.071 1.091-3.983-.248-.395c-1.046-1.666-1.597-3.597-1.597-5.592 0-5.783 4.706-10.489 10.49-10.489 2.803 0 5.438 1.092 7.418 3.071 1.98 1.98 3.072 4.615 3.072 7.418 0 5.784-4.707 10.49-10.493 10.49m8.48-18.472C18.23 1.017 15.218 0 12.051 0 5.467 0 .11 5.356.11 11.94c0 2.106.543 4.162 1.574 6.007L0 24l6.168-1.618c1.782.97 3.801 1.482 5.879 1.482 6.582 0 11.942-5.358 11.942-11.942 0-3.19-1.24-6.19-3.491-8.441" />
  </svg>
);

const GoogleMapsIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Home() {
  const categories = [
    {
      icon: Cpu,
      title: "Componentes",
      description: "Procesadores, placas madre, RAM, SSDs y más",
      hashtags: "#informatica #computacion #accesorios",
    },
    {
      icon: Headphones,
      title: "Audio & Periféricos",
      description: "Auriculares, micrófonos y accesorios gaming",
      hashtags: "#sonido #gamer #accesorios",
    },
    {
      icon: Package,
      title: "Almacenamiento",
      description: "Discos duros, SSDs y soluciones de backup",
      hashtags: "#almacenamiento #tecnologia",
    },
    {
      icon: Zap,
      title: "Electrónica",
      description: "Fuentes, cables, adaptadores y más",
      hashtags: "#electronica #tecnología",
    },
  ];

  const whatsappNumber = "+54 9 223 5188130";
  const whatsappMessage = encodeURIComponent(
    "Hola YaInsumos, me gustaría conocer más sobre sus productos. ¿Cuál es el horario de atención?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-white/5 shadow-md">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="/logo.png" alt="YaInsumos Logo" className="h-14 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/oYj5WYJhfmtNEZxQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border border-white/20 hover:border-[#7ec850] hover:bg-[#7ec850]/10 py-2.5 px-5 rounded-lg transition-all duration-300 text-sm font-semibold"
            >
              <GoogleMapsIcon size={18} />
              <span className="hidden md:inline">Ver ubicación</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7ec850] text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-[#6ab840] transition-colors duration-300 flex items-center gap-2 text-sm"
            >
              <WhatsAppIcon size={20} />
              <span className="hidden sm:inline">Contactar</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f9fdf7] to-white pt-12 pb-20 md:pt-16 md:pb-32">
        {/* Decorative diagonal line */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7ec850]/10 to-transparent rounded-full blur-3xl"
          style={{ transform: "translate(100px, -100px)" }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Soluciones informaticas para tu negocio
                </h1>
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  En <span className="font-semibold text-[#7ec850]">YaInsumos</span> atendemos tus problemas
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7ec850] rounded-full" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Insumos y accesorios informaticos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7ec850] rounded-full" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Reparación y mantenimiento de equipos y redes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7ec850] rounded-full" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Presupuestos sin cargo | Diagnósticos por escrito para aseguradoras</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7ec850] rounded-full" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Atención prioritaria a empresas</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg"
                >
                  <WhatsAppIcon size={24} />
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <img
                src="/assets/hero-it.png"
                alt="Gaming Setup con iluminación verde"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                loading="eager"
                decoding="sync"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#7ec850] to-transparent" />

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Visitanos</h2>
            <p className="text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Estamos ubicados en el corazón de Mar del Plata. Pasa por nuestro local y descubre toda nuestra variedad de productos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Info */}
            <div className="space-y-6">
              <div className="p-6 bg-[#f9fdf7] rounded-xl border-l-4 border-[#7ec850]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#7ec850] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Dirección
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      El Cano 5898<br />
                      Mar del Plata, Buenos Aires
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#f9fdf7] rounded-xl border-l-4 border-[#7ec850]">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-[#7ec850] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      WhatsApp
                    </h3>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7ec850] font-semibold hover:underline"
                    >
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg w-full justify-center"
                >
                  <WhatsAppIcon size={24} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl border-2 border-gray-100">
              <iframe
                title="YaInsumos Location"
                src="https://maps.google.com/maps?q=El%20Cano%205898,%20Mar%20del%20Plata&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#7ec850] to-transparent" />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#7ec850] to-[#6ab840] text-white">
        <div className="container text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ¿Listo para encontrar lo que buscás?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contactanos por WhatsApp y nuestro equipo te ayudará a encontrar exactamente lo que necesitás.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#7ec850] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <WhatsAppIcon size={28} />
            Escribinos Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="YaInsumos Logo" className="h-12 w-auto object-contain" loading="lazy" decoding="async" />
              </div>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Mas de 20 años de experiencia nos avalan.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Ubicación</h4>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                El Cano 5898<br />
                Mar del Plata, Buenos Aires
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contacto</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7ec850] hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <WhatsAppIcon size={16} />
                WhatsApp: {whatsappNumber}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center text-gray-400 text-sm">
              <p>
                © 2026 YaInsumos. Todos los derechos reservados.
              </p>
              <a
                href="https://giacatec.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-gray-300 bg-[#1a1a1a] border border-gray-700 rounded-full hover:text-white hover:border-[#7ec850] hover:bg-[#7ec850]/10 transition-all duration-300"
              >
                Creada por Giacatec
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
