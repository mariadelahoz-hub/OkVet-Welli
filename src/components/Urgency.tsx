import { MessageCircle, Clock, Users, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573123195667";

const Urgency = () => {
  const handleWhatsappClick = () => {
    if (typeof window !== "undefined" && window._hsq) {
      window._hsq.push([
        "trackEvent",
        {
          id: "whatsapp_click_urgency",
          value: "cta_urgency_section",
        },
      ]);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-accent/5 border-y border-accent/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Cupos limitados para 2025
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Solo 20 clínicas más podrán acceder este mes
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            La integración exclusiva OkVet + Welli tiene cupos limitados para
            garantizar un onboarding personalizado y soporte prioritario.
          </p>

          {/* Urgency indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>Onboarding en 24h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 text-accent" />
              <span>Soporte prioritario</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="btn-cta"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar mi cupo ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
