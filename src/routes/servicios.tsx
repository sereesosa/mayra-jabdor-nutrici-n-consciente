import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Video, Calendar } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Mayra Jabdor" },
      { name: "description", content: "Consultas presenciales, online y planificación mensual personalizada." },
      { property: "og:title", content: "Servicios de nutrición — Mayra Jabdor" },
      { property: "og:description", content: "Elegí la modalidad que mejor se adapta a tu rutina." },
    ],
  }),
  component: Servicios,
});

const services = [
  {
    icon: MapPin,
    title: "Consulta Presencial",
    price: "Encuentro en consultorio",
    features: [
      "Evaluación antropométrica completa",
      "Plan alimentario individualizado",
      "Seguimiento personalizado",
      "Material educativo impreso",
    ],
  },
  {
    icon: Video,
    title: "Consulta Online",
    price: "Videollamada por Zoom",
    features: [
      "Consulta desde cualquier lugar",
      "Plan alimentario digital",
      "Seguimiento por WhatsApp",
      "Acceso a recursos descargables",
    ],
    featured: true,
  },
  {
    icon: Calendar,
    title: "Planificación Mensual",
    price: "4 semanas de acompañamiento",
    features: [
      "Plan + lista de compras semanal",
      "Recetario personalizado",
      "Ajustes quincenales",
      "Soporte continuo por chat",
    ],
  },
];

function Servicios() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Servicios</span>
          <h1 className="font-serif text-5xl text-primary mt-3">
            Una modalidad para cada momento
          </h1>
          <p className="text-muted-foreground mt-4">
            Elegí cómo querés que te acompañe en tu proceso.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-8 border flex flex-col ${
                s.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-xl md:-translate-y-3"
                  : "bg-cream border-border"
              }`}
            >
              <s.icon size={28} className={s.featured ? "text-sand" : "text-accent"} />
              <h3 className="font-serif text-2xl mt-4">{s.title}</h3>
              <p className={`text-sm mt-1 ${s.featured ? "text-sand/80" : "text-muted-foreground"}`}>
                {s.price}
              </p>
              <ul className="space-y-3 my-8 text-sm flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check size={16} className={s.featured ? "text-sand" : "text-accent"} />
                    <span className={s.featured ? "text-sand/90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`rounded-full w-full ${
                  s.featured
                    ? "bg-accent hover:bg-clay text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                <Link to="/turnos">Reservar turno</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
