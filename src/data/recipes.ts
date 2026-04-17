import breakfast from "@/assets/recipe-breakfast.jpg";
import lunch from "@/assets/recipe-lunch.jpg";
import snacks from "@/assets/recipe-snacks.jpg";
import dinner from "@/assets/recipe-dinner.jpg";
import smoothie from "@/assets/recipe-smoothie.jpg";
import dessert from "@/assets/recipe-dessert.jpg";

export type Recipe = {
  slug: string;
  title: string;
  category: string;
  image: string;
  time: string;
  servings: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "desayunos-proteicos",
    title: "Bowl de Yogur Proteico",
    category: "Desayunos Proteicos",
    image: breakfast,
    time: "10 min",
    servings: "1 porción",
    description:
      "Un desayuno completo, saciante y rico en proteínas para empezar el día con energía sostenida.",
    ingredients: [
      "200 g de yogur griego natural",
      "30 g de granola sin azúcar",
      "1 cucharada de semillas de chía",
      "1/2 taza de frutos rojos (frescos o congelados)",
      "1 cucharadita de miel o stevia",
      "1 cucharada de nueces picadas",
    ],
    steps: [
      "Colocar el yogur griego en un bowl.",
      "Agregar la granola formando una media luna sobre el yogur.",
      "Añadir los frutos rojos en el centro.",
      "Espolvorear las semillas de chía y las nueces picadas.",
      "Terminar con un hilo de miel y consumir al momento.",
    ],
  },
  {
    slug: "almuerzos-rapidos",
    title: "Bowl de Pollo y Quinoa",
    category: "Almuerzos Rápidos",
    image: lunch,
    time: "20 min",
    servings: "2 porciones",
    description:
      "Una opción equilibrada con proteínas magras, hidratos complejos y grasas saludables.",
    ingredients: [
      "1 taza de quinoa cocida",
      "200 g de pechuga de pollo",
      "1 palta",
      "1 taza de vegetales asados (zanahoria, zucchini, morrón)",
      "Aceite de oliva, limón, sal y pimienta",
      "Cilantro fresco a gusto",
    ],
    steps: [
      "Condimentar el pollo y cocinarlo a la plancha 5-6 minutos por lado.",
      "Cortar el pollo en tiras una vez tibio.",
      "Distribuir la quinoa como base en el bowl.",
      "Sumar el pollo, los vegetales asados y la palta en gajos.",
      "Aliñar con aceite de oliva, jugo de limón, sal y cilantro.",
    ],
  },
  {
    slug: "snacks-energeticos",
    title: "Bolitas de Avena y Dátil",
    category: "Snacks Energéticos",
    image: snacks,
    time: "15 min",
    servings: "12 unidades",
    description:
      "Ideales para la merienda o el pre-entrenamiento. Sin azúcar agregada y muy fáciles de preparar.",
    ingredients: [
      "1 taza de avena",
      "10 dátiles sin carozo",
      "2 cucharadas de manteca de maní",
      "2 cucharadas de coco rallado",
      "1 cucharada de cacao puro",
      "Una pizca de sal",
    ],
    steps: [
      "Procesar los dátiles hasta formar una pasta.",
      "Agregar el resto de los ingredientes y procesar hasta integrar.",
      "Formar bolitas del tamaño de una nuez con las manos.",
      "Pasar por coco rallado extra (opcional).",
      "Refrigerar 30 minutos antes de consumir. Conservar hasta 7 días.",
    ],
  },
  {
    slug: "cenas-livianas",
    title: "Pescado al Horno con Boniato",
    category: "Cenas Livianas",
    image: dinner,
    time: "30 min",
    servings: "2 porciones",
    description: "Una cena ligera, rica en omega-3 y perfecta para una recuperación nocturna.",
    ingredients: [
      "2 filetes de pescado blanco (300 g)",
      "1 boniato grande",
      "Hojas verdes (rúcula, espinaca)",
      "Aceite de oliva, limón, romero",
      "Sal marina y pimienta",
    ],
    steps: [
      "Precalentar el horno a 200°C.",
      "Cortar el boniato en cubos, condimentar y hornear 20 minutos.",
      "Sumar el pescado en los últimos 10-12 minutos con romero y limón.",
      "Servir sobre una cama de hojas verdes frescas.",
      "Aliñar con aceite de oliva y jugo de limón.",
    ],
  },
  {
    slug: "smoothie-verde",
    title: "Smoothie Verde Energizante",
    category: "Bebidas Saludables",
    image: smoothie,
    time: "5 min",
    servings: "1 porción",
    description: "Una explosión de vitaminas, fibra y energía en un solo vaso.",
    ingredients: [
      "1 puñado de espinaca fresca",
      "1 banana congelada",
      "1 cucharada de semillas de chía",
      "200 ml de leche vegetal",
      "1 cucharadita de miel (opcional)",
      "Hojas de menta",
    ],
    steps: [
      "Colocar todos los ingredientes en la licuadora.",
      "Procesar a velocidad alta por 1-2 minutos.",
      "Verificar consistencia: agregar más leche si está muy espeso.",
      "Servir frío con menta fresca.",
      "Consumir al momento para preservar nutrientes.",
    ],
  },
  {
    slug: "postre-saludable",
    title: "Pudding de Chía y Frutos Rojos",
    category: "Postres Sin Culpa",
    image: dessert,
    time: "5 min + reposo",
    servings: "2 porciones",
    description:
      "Un postre cremoso, naturalmente dulce y cargado de fibras, omega-3 y antioxidantes.",
    ingredients: [
      "4 cucharadas de semillas de chía",
      "300 ml de leche de almendras",
      "1 cucharadita de esencia de vainilla",
      "1 cucharada de miel o sirope",
      "Frutos rojos y almendras para decorar",
    ],
    steps: [
      "Mezclar las semillas de chía con la leche, vainilla y miel.",
      "Revolver bien y dejar reposar 5 minutos. Volver a mezclar.",
      "Refrigerar al menos 4 horas o toda la noche.",
      "Servir en frascos con frutos rojos y almendras encima.",
      "Dura hasta 4 días en la heladera.",
    ],
  },
];
