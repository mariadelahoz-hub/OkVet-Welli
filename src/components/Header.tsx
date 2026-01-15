import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import welliLogo from "@/assets/welli-logo.webp";
import dtDentalLogo from "@/assets/dt-dental-logo.png";
import HunterForm from "./HunterForm";

/* =========================
   HubSpot typing
========================= */
declare global {
  interface Window {
    _hsq?: any[];
  }
}

/* =========================
   Navigation
========================= */
const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
];

interface HeaderProps {
  onOpenForm: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  /* =========================
     Scroll behavior
  ========================= */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     HubSpot tracking helper
  ========================= */
  const trackEvent = (
    name: string,
    properties?: Record<string, any>
  ) => {
    if (typeof window !== "undefined" && window._hsq) {
      window._hsq.push([
        "trackCustomBehavioralEvent",
        {
          name,
          properties: {
            landing: "dt_dental_welli",
            ...properties,
          },
        },
      ]);
    }
  };

  /* =========================
     Track modal view
  ========================= */
  useEffect(() => {
    if (showForm) {
      trackEvent("hunter_form_viewed", {
        source: "header",
      });
    }
  }, [showForm]);

  return (
    <>
      {/* ================= HEADER ================= */}
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
                className="h-8 md:h-10"
              />
              <span className="text-xl font-bold text-primary">+</span>
              <img
                src={welliLogo}
                alt="Welli"
                className="h-8 md:h-10"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => {
                  trackEvent("open_hunter_form", {
                    location: "header_desktop",
                  });
                  onOpenForm();;
                }}
                className="btn-cta py-2.5 px-5 text-sm inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-3 hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile CTA */}
                <div className="px-6 py-4">
                  <button
                    onClick={() => {
                      trackEvent("open_hunter_form", {
                        location: "header_mobile",
                      });
                      setIsMobileMenuOpen(false);
                      onOpenForm();;
                    }}
                    className="btn-cta w-full justify-center py-3 inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar a un Hunter
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ================= FORM MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-2xl w-full max-w-lg p-6">
            {/* Close button */}
            <button
              onClick={() => {
                trackEvent("close_hunter_form", {
                  location: "header_modal",
                });
                setShowForm(false);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">
              Contacta a un Hunter
            </h3>

            <HunterForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
