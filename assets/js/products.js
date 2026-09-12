/* TODO: reemplazar por el catálogo real (fotos, precios y stock actualizados). */
const PRODUCTS = [
  {
    slug: "friulli",
    name: "Modelo Friulli",
    category: "sandalias",
    price: 120000,
    hue: ["#f1ddd0", "#dba98a"],
    badge: null,
    colors: [
      { name: "Beige/Coral", hex: "#e7c9a8" },
      { name: "Negro", hex: "#201d19" },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: false, 38: true, 39: true, 40: true },
    material: "Cuero vacuno genuino con vivo de color a contraste.",
    forrado: "Forrería 100% cuero.",
    suela: "Suela de cuero natural con refuerzo antideslizante.",
    taco: "Sin taco — sandalia chata.",
    description:
      "Sandalia chata de cuero, hecha a mano en nuestro taller de Monte Grande. Ideal para el día a día: cómoda, liviana y con la calidad del cuero genuino que mejora con el uso.",
  },
  {
    slug: "bolonia",
    name: "Modelo Bolonia",
    category: "sandalias",
    price: 110000,
    hue: ["#d9dde2", "#9aa3ad"],
    badge: "Últimas unidades",
    colors: [
      { name: "Negro", hex: "#201d19" },
      { name: "Plata", hex: "#c7cad0" },
      { name: "Cobre", hex: "#b1683f" },
      { name: "Natural", hex: "#d9c3a3" },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: false, 36: true, 37: true, 38: true, 39: false, 40: true },
    material: "Cuero vacuno metalizado combinado con cuero liso.",
    forrado: "Forrería de cuero natural.",
    suela: "Suela de cuero con taco forrado.",
    taco: "Taco 4 cm.",
    description:
      "Sandalia con tiras cruzadas y hebilla, pensada para looks de fiesta o para el trabajo. El diseño combina texturas metalizadas con cuero liso para un resultado elegante y versátil.",
  },
  {
    slug: "lucca",
    name: "Modelo Lucca",
    category: "chatas",
    price: 120000,
    hue: ["#e4ded2", "#b7ab92"],
    badge: null,
    colors: [
      { name: "Negro", hex: "#201d19" },
      { name: "Miel", hex: "#a9733f" },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: false },
    material: "Cuero vacuno con detalle de cordón trenzado.",
    forrado: "Forrería de cuero natural transpirable.",
    suela: "Suela de cuero, base antideslizante.",
    taco: "Sin taco — chata.",
    description:
      "Chata tipo mule con atado de cordón, cómoda para uso diario. Cuero flexible que se adapta al pie desde el primer uso.",
  },
  {
    slug: "capri",
    name: "Modelo Capri",
    category: "sandalias",
    price: 118000,
    hue: ["#efe3b8", "#d8b96a"],
    badge: null,
    colors: [
      { name: "Oro", hex: "#d8b96a" },
      { name: "Negro", hex: "#201d19" },
      { name: "Verde", hex: "#5c7a5c" },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: false, 37: true, 38: true, 39: true, 40: true },
    material: "Cuero vacuno metalizado con pulsera al tobillo.",
    forrado: "Forrería de cuero natural.",
    suela: "Suela de cuero con taco bajo forrado en cuero.",
    taco: "Taco 2,5 cm.",
    description:
      "Sandalia con pulsera regulable y taco bajo, para un uso cómodo todo el día sin resignar estilo.",
  },
  {
    slug: "verona",
    name: "Modelo Verona",
    category: "botas",
    price: 145000,
    hue: ["#ddd2c4", "#8c7157"],
    badge: null,
    colors: [{ name: "Marrón", hex: "#6e4a30" }, { name: "Negro", hex: "#201d19" }],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: false, 39: true, 40: false },
    material: "Cuero vacuno grueso, cierre lateral con cremallera.",
    forrado: "Forrería interior acolchada para uso en invierno.",
    suela: "Suela de goma antideslizante cosida a mano.",
    taco: "Taco 3 cm.",
    description:
      "Bota corta de caña baja, ideal para los días más fríos. Cuero grueso y forrería acolchada para mantener el pie abrigado sin perder comodidad.",
  },
  {
    slug: "milano",
    name: "Modelo Milano",
    category: "chatas",
    price: 112000,
    hue: ["#f2e6d6", "#e0a8a0"],
    badge: "Nuevo",
    colors: [{ name: "Coral", hex: "#e0a8a0" }, { name: "Beige", hex: "#e7d9c0" }],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    material: "Cuero vacuno peep-toe con vivo a contraste.",
    forrado: "Forrería de cuero natural.",
    suela: "Suela de cuero, base antideslizante.",
    taco: "Sin taco — chata.",
    description:
      "Chata peep-toe con puntera abierta, un clásico renovado en tonos suaves para looks de entretiempo.",
  },
];

function formatPrice(value) {
  return "$" + value.toLocaleString("es-AR");
}

function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
