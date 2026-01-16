import { ExternalLink } from "lucide-react";
import welliLogo from "@/assets/welli-logo.webp";
import dtDentalLogo from "@/assets/dt-dental-logo.png";

const WELLI_URL = "https://www.welli.com.co";
const DTDENTAL_URL = "https://okvet.co";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container">
        <div className="flex flex-col items-center gap-8">

          <p className="text-white/50 text-sm text-center max-w-md">
            Alianza estratégica para el crecimiento de clínicas veterinarias en Colombia
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={WELLI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              Welli
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={DTDENTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              OkVet
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/10" />

          {/* Copyright */}
          <div className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
