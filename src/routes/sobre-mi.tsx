import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/mayra-hero.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Mayra Jabdor" },
      { name: "description", content: "Conocé la trayectoria y filosofía de Mayra Jabdor, Lic. en Nutrición." },
      { property: "og:title", content: "Sobre Mayra Jabdor" },
      { property: "og:description", content: "Filosofía de nutrición consciente, sin restricciones." },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div className="md:sticky md:top-28">
          <div className="absolute -inset-4 rounded-[3rem] bg-terracotta/15 -z-10" />
          <img
            src={heroImg}
            alt="Mayra Jabdor"
            width={800}
            height={1000}
            loading="lazy"
            className="rounded-[2.5rem] object-cover w-full aspect-[4/5] shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Sobre mí</span>
          <h1 className="font-serif text-5xl text-primary leading-tight">
            Nutrición consciente, sin culpa
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Soy Mayra Jabdor, Licenciada en Nutrición con más de 8 años acompañando a personas
            y atletas a transformar su relación con la comida. Mi formación incluye nutrición
            deportiva, intuitiva y coaching de hábitos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Creo en una nutrición que se adapte a tu vida, no al revés. No trabajo con dietas
            restrictivas ni con prohibiciones: trabajo con educación, escucha y planes flexibles
            que respetan tus gustos, tu cultura y tu rutina.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mi propósito es que aprendas a comer rico, real y equilibrado, recuperando la
            confianza en tu cuerpo y disfrutando del proceso.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { n: "+500", l: "Pacientes" },
              { n: "8 años", l: "Experiencia" },
              { n: "100%", l: "Personalizado" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-accent pl-3">
                <p className="font-serif text-2xl text-primary">{s.n}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
