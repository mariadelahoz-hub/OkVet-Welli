import { ShieldCheck, TrendingUp, Laptop, Link2 } from "lucide-react";

const benefits = [

  {
    icon: TrendingUp,
    title: "Mayor tasa de aceptación",
    description: "Ofrece cuotas accesibles y convierte más planes de tratamiento en ingresos para tu clínica. Aumenta hasta 40% tu cierre de ventas.",
    highlight: ">Conversión",
  },
  {
    icon: Laptop,
    title: "Proceso 100% digital",
    description: "Sin papeleos ni trámites engorrosos. Tu paciente aplica en menos de 5 minutos y conoce su respuesta al instante.",
    highlight: "5 min",
  },
  {
    icon: Link2,
    title: "Integración directa",
    description: "Welli se conecta nativamente con OkVet. Ofrece financiamiento sin salir de tu flujo de trabajo habitual.",
    highlight: "Nativo",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 section-gradient">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Ventajas exclusivas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir esta alianza?
          </h2>
          <p className="text-lg text-muted-foreground">
            Beneficios diseñados para que tu clínica crezca sin complicaciones
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-15 lg:gap-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-benefit group flex gap-5 p-6 md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                    {benefit.highlight}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
