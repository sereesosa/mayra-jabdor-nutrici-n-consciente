import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, HeartPulse, Sparkles } from "lucide-react";
import heroImg from "@/assets/mayra-hero.jpg";
import { recipes } from "@/data/recipes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayra Jabdor — Nutrición consciente" },
      {
        name: "description",
        content:
          "Nutrición personalizada para adultos y atletas. Transformá tus hábitos sin restricciones.",
      },
      { property: "og:title", content: "Mayra Jabdor — Nutrición consciente" },
      {
        property: "og:description",
        content: "Acompañamiento nutricional para tu mejor versión.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
              <Leaf size={14} /> Lic. en Nutrición
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary">
              Nutrición para adultos y atletas que buscan su mejor versión
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Acompañamiento personalizado para transformar tus hábitos sin restricciones.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-accent hover:bg-clay text-accent-foreground rounded-full">
                <Link to="/turnos">
                  Reservar turno <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 text-primary hover:bg-sage/20">
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-sage/30 -z-10 rotate-2" />
            <img
              src={heroImg}
              alt="Mayra Jabdor, Lic. en Nutrición"
              width={800}
              height={1000}
              className="rounded-[2.5rem] object-cover w-full aspect-[4/5] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-sand/40 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: "Sin restricciones", text: "Aprendé a comer real, sin prohibiciones ni dietas extremas." },
            { icon: HeartPulse, title: "Salud integral", text: "Energía, descanso y rendimiento como pilares del proceso." },
            { icon: Sparkles, title: "Hábitos sostenibles", text: "Cambios pequeños y constantes que duran toda la vida." },
          ].map((p) => (
            <div key={p.title} className="bg-cream rounded-2xl p-8 border border-border">
              <p.icon className="text-accent mb-4" size={28} />
              <h3 className="font-serif text-2xl text-primary mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECETAS PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Inspiración</span>
            <h2 className="font-serif text-4xl text-primary mt-2">Recetas saludables</h2>
          </div>
          <Link to="/recetas" className="text-sm text-accent hover:text-clay flex items-center gap-1">
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.slice(0, 3).map((r) => (
            <Link
              key={r.slug}
              to="/recetas/$slug"
              params={{ slug: r.slug }}
              className="group rounded-2xl overflow-hidden bg-cream border border-border"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-accent mb-1">{r.category}</p>
                <h3 className="font-serif text-xl text-primary">{r.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
