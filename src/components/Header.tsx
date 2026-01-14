import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import welliLogo from "@/assets/welli-logo.webp";
import dtDentalLogo from "@/assets/dt-dental-logo.png";

const WHATSAPP_URL = "https://wa.me/573123195667";

const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ HubSpot WhatsApp tracking
  const trackWhatsappClick = (
    location: "header_desktop" | "header_mobile"
  ) => {
    if (window._hsq) {
      window._hsq.push([
        "trackCustomBehavioralEvent",
        {
          name: "click_whatsapp_hunter",
          properties: {
            landing: "dt_dental_welli",
            location,
          },
        },
      ]);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logos */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={dtDentalLogo}
              alt="OkVet"
              className="h-8 md:h-10 w-auto transition-all"
            />
            <span className="text-xl font-bold text-primary">+</span>
            <img
              src={welliLogo}
              alt="Welli"
              className="h-8 md:h-10 w-auto transition-all"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ✅ Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsappClick("header_desktop")}
              className="btn-cta py-2.5 px-5 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* ✅ Mobile CTA */}
              <div className="px-6 py-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsappClick("header_mobile")}
                  className="btn-cta w-full justify-center py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contactar a un Hunter
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
