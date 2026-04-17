import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { recipes } from "@/data/recipes";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/recetas/")({
  head: () => ({
    meta: [
      { title: "Recetas saludables — Mayra Jabdor" },
      { name: "description", content: "Recetas equilibradas, rápidas y deliciosas para tu día a día." },
      { property: "og:title", content: "Recetas saludables" },
      { property: "og:description", content: "Inspiración real para una alimentación consciente." },
    ],
  }),
  component: Recetas,
});

function Recetas() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Recetario</span>
          <h1 className="font-serif text-5xl text-primary mt-3">Recetas saludables</h1>
          <p className="text-muted-foreground mt-4">
            Inspiración real, simple y sabrosa para cada momento del día.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <article
              key={r.slug}
              className="group rounded-2xl overflow-hidden bg-cream border border-border flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wider text-accent mb-2">{r.category}</p>
                <h3 className="font-serif text-2xl text-primary mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{r.description}</p>
                <Link
                  to="/recetas/$slug"
                  params={{ slug: r.slug }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-clay"
                >
                  Ver receta <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
