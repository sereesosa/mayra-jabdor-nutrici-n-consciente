import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { tips } from "@/data/tips";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "Tips de Bienestar — Mayra Jabdor" },
      { name: "description", content: "Consejos prácticos de nutrición y bienestar." },
      { property: "og:title", content: "Tips de Bienestar" },
      { property: "og:description", content: "Consejos cortos para una vida más saludable." },
    ],
  }),
  component: TipsPage,
});

function TipsPage() {
  const [i, setI] = useState(0);
  const tip = tips[i];
  const next = () => setI((p) => (p + 1) % tips.length);
  const prev = () => setI((p) => (p - 1 + tips.length) % tips.length);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Bienestar</span>
          <h1 className="font-serif text-5xl text-primary mt-3">Tips para tu día a día</h1>
          <p className="text-muted-foreground mt-4">
            Pequeños consejos que generan grandes cambios.
          </p>
        </div>

        <div className="bg-cream rounded-3xl border border-border overflow-hidden grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={tip.image}
              alt={tip.title}
              width={1024}
              height={768}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={tip.image}
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent mb-3">
                Tip {i + 1} / {tips.length}
              </p>
              <h2 className="font-serif text-3xl text-primary mb-4">{tip.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{tip.text}</p>
            </div>

            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {tips.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Tip ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === i ? "w-8 bg-accent" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-3 rounded-full border border-border hover:bg-sand text-primary"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
