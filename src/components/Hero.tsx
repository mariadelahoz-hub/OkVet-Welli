import { MessageCircle, ExternalLink, CheckCircle, Zap } from "lucide-react";
import dentalImage from "@/assets/dental.jpg";

interface HeroProps {
  onOpenForm: () => void;
}

const WELLI_URL = "https://www.welli.com.co";

const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-welli-turquoise/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-welli-turquoise/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Zap className="w-4 h-4 text-welli-turquoise" />
            <span className="text-sm font-medium text-gray/90">
              Alianza exclusiva para clínicas veterinarias
            </span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-14 md:mb-20">
            <div className="flex justify-center md:justify-start">
              <img
                src={dentalImage}
                alt="Crecimiento para clínicas veterinarias"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray leading-tight mb-6">
                Ofrece crédito a tus clientes sin asumir riesgos en tu veterinaria.
              </h1>

              <p className="text-lg md:text-xl text-gray/80 mb-8">
                Integra el financiamiento de <strong>Welli</strong> directamente en{" "}
              <strong>OkVet</strong> y ayuda a que más mascotas reciban el tratamiento que necesitan.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* 🔥 CTA PRINCIPAL → FORM */}
            <button
              onClick={onOpenForm}
              className="btn-cta !text-gray-800 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 !text-gray-800" />
              Contactar a un asesor comercial
            </button>

            {/* CTA SECUNDARIO */}
            <a
              href={WELLI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-hero !text-gray-700 border border-gray-500 inline-flex items-center gap-2"
            >
              Conocer Welli
              <ExternalLink className="w-4 h-4 !text-gray-700" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-gray/70 text-sm">
            {[
              "Sin riesgo de cartera",
              "100% digital",
              "Desembolso en ≤72h",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-welli-turquoise" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
