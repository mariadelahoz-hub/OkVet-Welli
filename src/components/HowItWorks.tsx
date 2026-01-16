import { FileText, CreditCard, Banknote, ArrowRight } from "lucide-react";
import usoImage from "@/assets/uso.png";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Crea el plan de tratamiento",
    description:
    "Genera el plan de tratamiento en OkVet como siempre lo haces.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Ofrece financiamiento",
    description:
      "El paciente aplica a Welli en segundos, directo desde la plataforma. Sin papeleo.",
  },
  {
    icon: Banknote,
    number: "03",
    title: "Recibe tu dinero",
    description:
      "Welli te desembolsa el 100% del tratamiento en máximo 72 horas. El paciente paga en cuotas.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">


          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Proceso simple
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo funciona?
          </h2>

          <p className="text-lg text-muted-foreground">
          En 3 pasos conviertes más planes de tratamiento en atenciones realizadas
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-benefit text-center group">
                {/* Icon container */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (mobile) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <ArrowRight className="w-6 h-6 text-accent rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
