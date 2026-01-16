import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el desembolso?",
    answer: "El desembolso se realiza en máximo 72 horas hábiles después de la aprobación del crédito. En promedio, las clínicas reciben el dinero en 48 horas.",
  },
  {
    question: "¿Cuánto me cuesta usar Welli?",
    answer: "Welli cobra una comisión por transacción que varía según el plazo del financiamiento. Un asesor comercial te dará los detalles exactos según el perfil de tu clínica. Muchas clínicas incluyen este costo en el precio del tratamiento.",
  },
  {
    question: "¿Qué requisitos necesitan mis pacientes?",
    answer: "El proceso es 100% digital. Solo necesitan cédula de ciudadanía, un celular para verificación y ser mayores de edad. La aprobación es instantánea y no requiere codeudor.",
  },
  {
    question: "¿Cómo funciona la integración con OkVet?",
    answer: "La integración es nativa. Desde tu interfaz de OkVet podrás ofrecer financiamiento con un clic, ver el estado de las solicitudes y recibir notificaciones de aprobación. El onboarding toma menos de 24 horas.",
  },
  {
    question: "¿Qué montos y plazos maneja Welli?",
    answer: "Welli financia tratamientos desde $300.000 hasta $25.000.000 COP, con plazos de 3 a 36 meses. Esto permite cubrir desde limpiezas hasta implantes y tratamientos de ortodoncia completos.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 section-gradient">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Resuelve tus dudas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de comenzar
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
