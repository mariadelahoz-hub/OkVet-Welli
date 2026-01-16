import { MessageCircle, ArrowRight } from "lucide-react";


interface FinalCTAProps {
  onOpenForm: () => void;
}

const FinalCTA = ({ onOpenForm }: FinalCTAProps) => {

  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-welli-turquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Empieza a convertir más presupuestos en tratamientos{" "}
            <span className="text-gradient">hoy mismo</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Un asesor comercial te contactará para explicarte todo el proceso y activar tu clínica en menos de 24 horas.
          </p>

          {/* 🔥 CTA → FORM */}
          <button
            onClick={onOpenForm}
            className="btn-cta text-lg px-8 py-5 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar a un asesor comercial
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Trust note */}
          <p className="text-white/60 text-sm mt-8">
            Sin compromiso • Respuesta en menos de 1 hora • Onboarding gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
