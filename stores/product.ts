import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: "Brownie Zen (sin azúcar)",
      description: "Hecho con harina de avena, cacao puro, banano y aceite de coco. Textura húmeda, sabor intenso y 100% natural.",
      price: 9000,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/product/Brownie_Zen_sin_azucar.jpeg',
      featured: true
    },
    {
      id: 2,
      name: "Energy Balls (3 unidades)",
      description: "Bolitas de dátiles, avena, cacao y nueces. Energéticas, crudas y sin azúcar añadida.",
      price: 7500,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/product/Energy_Balls_3_unidades.jpeg',
      featured: true
    },
    {
      id: 3,
      name: "Galletas de la Casa (2 unidades)",
      description: "Galletas integrales con semillas, chía y panela orgánica. Crocancia saludable para cualquier hora.",
      price: 6000,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/product/Galletas_de_la_Casa.jpeg',
      featured: true
    },
    {
      id: 4,
      name: "Torta de Zanahoria Saludable",
      description: "Harina integral, zanahoria rallada, canela, nueces y endulzada con miel. Suave, esponjosa y sin conservantes.",
      price: 8500,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/snacks.avif',
      featured: true
    },
    {
      id: 5,
      name: "Muffin de Banano & Almendras",
      description: "Banano maduro, harina de avena, almendras picadas y esencia de vainilla. Ideal para acompañar un café o té.",
      price: 9500,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/snacks.avif',
      featured: true
    },
    {
      id: 6,
      name: "Chía Pudding Vainilla & Frutas",
      description: "Leche de coco, semillas de chía, vainilla natural y frutas frescas. Fresco, ligero y alto en fibra.",
      price: 8500,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/snacks.avif',
      featured: true
    },
    {
      id: 7,
      name: "Tostaditas de Arroz con Crema de Maní",
      description: "Tostadas integrales con mantequilla de maní casera y rodajas de fruta. Snack rápido, alto en energía saludable.",
      price: 6000,
      category: "Snacks & Repostería Saludable",
      categoryImg: "/images/snacks.avif",
      image: '/images/snacks.avif',
      featured: true
    },


    {
      id: 8,
      name: "Desayuno Vital",
      description: "Pan integral con aguacate, huevo poché, semillas de chía y tomate cherry. Fresco, saciante y lleno de grasas buenas.",
      price: 15500,
      category: "Desayunos Saludables",
      categoryImg: "/images/desayunos.png",
      image: '/images/desayunos.png',
      featured: true
    },
    {
      id: 9,
      name: "Amanecer Dulce",
      description: "Parfait de Yogur Griego con granola casera, frutas frescas y miel orgánica. Ideal para los que disfrutan lo dulce sin culpas.",
      price: 14000,
      category: "Desayunos Saludables",
      categoryImg: "/images/desayunos.png",
      image: '/images/desayunos.png',
      featured: true
    },
    {
      id: 10,
      name: "Sueño de Avena",
      description: "Avena remojada en leche vegetal, con arándanos, banano, nueces y un toque de canela. Suave, nutritiva y perfecta para el estómago.",
      price: 12000,
      category: "Desayunos Saludables",
      categoryImg: "/images/desayunos.png",
      image: '/images/desayunos.png',
      featured: true
    },
    {
      id: 11,
      name: "Tostadas Delirantes",
      description: "Pan integral con crema de maní, banano y cacao nibs. Rico en energía y sin azúcar refinada.",
      price: 11000,
      category: "Desayunos Saludables",
      categoryImg: "/images/desayunos.png",
      image: '/images/desayunos.png',
      featured: true
    },
    {
      id: 12,
      name: "Wrap de la Mañana",
      description: "Tortilla integral rellena de huevo revuelto, espinaca, queso fresco y tomate. Acompañado con salsa de yogur.",
      price: 13500,
      category: "Desayunos Saludables",
      categoryImg: "/images/desayunos.png",
      image: '/images/desayunos.png',
      featured: true
    },
    {
      id: 13,
      name: "Mini Brunch Sano",
      description: "Huevos al gusto (poché o revueltos), tostadas integrales, aguacate, frutas y bebida caliente (café o infusión). Completo, balanceado y delicioso.",
      price: 16000,
      category: "Desayunos Saludables",
      categoryImg: "/images/desayunos.png",
      image: '/images/desayunos.png',
      featured: true
    },



    {
      id: 14,
      name: "Bowl Raíz Vital",
      description: "Base de quinua, garbanzos especiados, espinaca, zanahoria rallada, aguacate y aderezo de tahini.",
      price: 25000,
      category: "Bowls & Platos Saludables",
      categoryImg: "/images/bolws.png",
      image: '/images/bolws.png',
      featured: true
    },
    {
      id: 15,
      name: "Bowl Energía & Sabor",
      description: "Arroz integral, pechuga de pollo a la plancha, mix de hojas verdes, pimentón, pepino y hummus casero. Perfecto para quienes buscan energía limpia.",
      price: 20000,
      category: "Bowls & Platos Saludables",
      categoryImg: "/images/bolws.png",
      image: '/images/bolws.png',
      featured: true
    },
    {
      id: 16,
      name: "Bowl Zen Asiático",
      description: "Fideos de arroz, tofu marinado, edamame, col morada, maní, zanahoria y vinagreta de sésamo. Vegano y sin gluten.",
      price: 16000,
      category: "Bowls & Platos Saludables",
      categoryImg: "/images/bolws.png",
      image: '/images/bolws.png',
      featured: true
    },
    {
      id: 17,
      name: "Plato del Huerto",
      description: "Puré de papa criolla con cúrcuma, ensalada tibia de lentejas, vegetales al vapor y chips de plátano. Tradición y salud en un solo plato.",
      price: 17500,
      category: "Bowls & Platos Saludables",
      categoryImg: "/images/bolws.png",
      image: '/images/bolws.png',
      featured: true
    },
    {
      id: 18,
      name: "Bowl del Mar Sano",
      description: "Arroz de coco, filete de pescado al horno, aguacate, mango, cebolla morada y cilantro fresco. Tropical, nutritivo y lleno de omega 3.",
      price: 18500,
      category: "Bowls & Platos Saludables",
      categoryImg: "/images/bolws.png",
      image: '/images/bolws.png',
      featured: true
    },
    {
      id: 19,
      name: "Sopa del Día",
      description: "Sopa artesanal 100% natural: opciones como crema de zanahoria con jengibre, lentejas especiadas o tomate asado. Incluye pan integral o crackers saludables.",
      price: 14000,
      category: "Bowls & Platos Saludables",
      categoryImg: "/images/bolws.png",
      image: '/images/bolws.png',
      featured: true
    },



    {
      id: 20,
      name: "Smoothie Verde Detox",
      description: "Espinaca, manzana verde, pepino, jengibre y limón. Energizante y purificante.",
      price: 12000,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },
    {
      id: 21,
      name: "Sol Tropical",
      description: "Mango, piña, banano y leche de almendras. Refrescante y rico en vitamina C.",
      price: 11500,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },
    {
      id: 22,
      name: "Dorado Mágico",
      description: "Leche de almendras, cúrcuma, jengibre y canela. Antiinflamatorio y cálido como un abrazo.",
      price: 9500,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },
    {
      id: 23,
      name: "Rojo Pasión",
      description: "Fresa, sandía y hierbabuena. Dulce, fresco y lleno de antioxidantes.",
      price: 10500,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },
    {
      id: 24,
      name: "Zen Verde",
      description: "Pepino, piña, menta y limón. Refrescante y calmante, ideal para el estrés.",
      price: 11500,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },
    {
      id: 25,
      name: "Power Boost",
      description: "Zanahoria, naranja, jengibre y cúrcuma. Un golpe de energía natural y vitamina C.",
      price: 11000,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },
    {
      id: 26,
      name: "Morado Antiox",
      description: "Uva negra, arándanos, banano y leche vegetal. Antioxidante, delicioso y lleno de color.",
      price: 11500,
      category: "Jugos Naturales",
      categoryImg: "/images/jugos-naturales.png",
      image: '/images/jugos-naturales.png',
      featured: true
    },




    {
      id: 27,
      name: "Café del alma",
      description: "Americano con café orgánico 100% colombiano. Sabor intenso, sin pretensiones.",
      price: 5500,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 28,
      name: "Capuccino Zen",
      description: "Café con espuma cremosa de leche (opcional vegetal: almendra, avena o soya). Equilibrado y reconfortante.",
      price: 6500,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 29,
      name: "Latte del Bosque",
      description: "Café con leche de coco y esencia de vainilla natural. Exótico, suave y sin lácteos.",
      price: 8500,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 30,
      name: "Golden Latte",
      description: "Leche vegetal, cúrcuma, jengibre y canela. Antiinflamatorio y cálido.",
      price: 9500,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 31,
      name: "Choco Sano",
      description: "Chocolate artesanal 70% cacao con leche de avena y toque de canela. Dulce, reconfortante y sin culpas.",
      price: 12000,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 32,
      name: "Té Verde Vital",
      description: "Infusión de té verde orgánico con limón y miel natural. Ligero y revitalizante.",
      price: 10500,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 33,
      name: "Tisana del Bienestar",
      description: "Infusión de flor de jamaica, canela y jengibre. Ideal para relajarse y mejorar la digestión.",
      price: 7000,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 34,
      name: "Matcha Latte Natural",
      description: "Té matcha japonés con leche vegetal. Energía limpia y antioxidante en cada sorbo.",
      price: 10500,
      category: "Bebidas Calientes",
      categoryImg: "/images/coffe.png",
      image: '/images/coffe.png',
      featured: true
    }
  ])

  // Puedes agregar más funciones si quieres manipular la lista
  const getFeatured = () => {
    return products.value.filter(p => p.featured)
  }

  return {
    products,
    getFeatured
  }
})