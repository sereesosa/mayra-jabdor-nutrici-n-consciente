import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { recipes, type Recipe } from "@/data/recipes";
import { ArrowLeft, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/recetas/$slug")({
  loader: ({ params }) => {
    const recipe = recipes.find((r) => r.slug === params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.recipe.title} — Mayra Jabdor` },
          { name: "description", content: loaderData.recipe.description },
          { property: "og:title", content: loaderData.recipe.title },
          { property: "og:description", content: loaderData.recipe.description },
          { property: "og:image", content: loaderData.recipe.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-primary">Receta no encontrada</h1>
        <Link to="/recetas" className="mt-6 inline-block text-accent">Volver a recetas</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: RecipeDetail,
});

function RecipeDetail() {
  const { recipe } = Route.useLoaderData() as { recipe: Recipe };
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Link to="/recetas" className="inline-flex items-center gap-1 text-sm text-accent hover:text-clay mb-8">
          <ArrowLeft size={14} /> Todas las recetas
        </Link>

        <div className="rounded-3xl overflow-hidden mb-10">
          <img
            src={recipe.image}
            alt={recipe.title}
            width={1024}
            height={1024}
            className="w-full aspect-[16/10] object-cover"
          />
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-accent">{recipe.category}</p>
        <h1 className="font-serif text-5xl text-primary mt-3 mb-4">{recipe.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{recipe.description}</p>

        <div className="flex gap-6 mt-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Clock size={16} /> {recipe.time}</span>
          <span className="flex items-center gap-2"><Users size={16} /> {recipe.servings}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="font-serif text-2xl text-primary mb-4">Ingredientes</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-primary mb-4">Preparación</h2>
            <ol className="space-y-4">
              {recipe.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="font-serif text-2xl text-accent leading-none">{i + 1}</span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </Layout>
  );
}
