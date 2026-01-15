import { Star, Users, DollarSign, Clock } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "25,000+",
    label: "Tratamientos financiados",
  },
  {
    icon: Users,
    value: "2,000+",
    label: "Clínicas aliadas",
  },
  {
    icon: Clock,
    value: "72h",
    label: "Promedio de desembolso",
  },
];

const testimonials = [

];

const SocialProof = () => {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Resultados comprobados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Números que hablan por sí solos
          </h2>
          <p className="text-lg text-muted-foreground">
            Clínicas en toda Colombia ya están creciendo con esta alianza
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <metric.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-benefit relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none">
                "
              </div>

              <blockquote className="text-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
