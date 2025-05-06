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
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 2,
      name: "Energy Balls (3 unidades)",
      description: "Bolitas de dátiles, avena, cacao y nueces. Energéticas, crudas y sin azúcar añadida.",
      price: 7500,
      category: "Snacks & Repostería Saludable",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 3,
      name: "Galletas de la Casa (2 unidades)",
      description: "Galletas integrales con semillas, chía y panela orgánica. Crocancia saludable para cualquier hora.",
      price: 6000,
      category: "Snacks & Repostería Saludable",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 4,
      name: "Torta de Zanahoria Saludable",
      description: "Harina integral, zanahoria rallada, canela, nueces y endulzada con miel. Suave, esponjosa y sin conservantes.",
      price: 8500,
      category: "Snacks & Repostería Saludable",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 5,
      name: "Muffin de Banano & Almendras",
      description: "Banano maduro, harina de avena, almendras picadas y esencia de vainilla. Ideal para acompañar un café o té.",
      price: 9500,
      category: "Snacks & Repostería Saludable",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 6,
      name: "Chía Pudding Vainilla & Frutas",
      description: "Leche de coco, semillas de chía, vainilla natural y frutas frescas. Fresco, ligero y alto en fibra.",
      price: 8500,
      category: "Snacks & Repostería Saludable",
      image: '/images/coffe.png',
      featured: true
    },
    {
      id: 7,
      name: "Tostaditas de Arroz con Crema de Maní",
      description: "Tostadas integrales con mantequilla de maní casera y rodajas de fruta. Snack rápido, alto en energía saludable.",
      price: 6000,
      category: "Snacks & Repostería Saludable",
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