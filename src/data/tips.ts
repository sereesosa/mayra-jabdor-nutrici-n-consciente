import labels from "@/assets/tip-labels.jpg";
import hydration from "@/assets/tip-hydration.jpg";
import mealprep from "@/assets/tip-mealprep.jpg";
import sleep from "@/assets/tip-sleep.jpg";
import mindful from "@/assets/tip-mindful.jpg";

export type Tip = {
  title: string;
  text: string;
  image: string;
};

export const tips: Tip[] = [
  {
    title: "Cómo leer etiquetas nutricionales",
    text: "Mirá siempre la porción real, no el envase. Priorizá productos con menos de 5 ingredientes y evitá los azúcares ocultos (jarabe de maíz, dextrosa, maltosa).",
    image: labels,
  },
  {
    title: "La importancia de la hidratación",
    text: "Apuntá a 35 ml por kg de peso corporal por día. El agua mejora el rendimiento, la concentración y la digestión. Sumá infusiones y aguas saborizadas naturales.",
    image: hydration,
  },
  {
    title: "Meal prep semanal",
    text: "Dedicá 90 minutos un día a la semana para cocinar bases (proteínas, granos, vegetales). Vas a comer mejor sin pensarlo todos los días.",
    image: mealprep,
  },
  {
    title: "Descanso y composición corporal",
    text: "Dormir menos de 7 horas aumenta el cortisol y la ansiedad por dulces. El sueño es tan importante como la dieta para tus objetivos.",
    image: sleep,
  },
  {
    title: "Comer con conciencia",
    text: "Sentate, masticá despacio y prestá atención a las señales de saciedad. La mente necesita 20 minutos para registrar que el cuerpo está satisfecho.",
    image: mindful,
  },
];
