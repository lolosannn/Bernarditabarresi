/* Catálogo real. Nombres provisorios (descriptivos) hasta tener los nombres de los modelos.
   price: null = "Consultá el precio" (la compra se hace por WhatsApp hasta cargar precios).
   Cada color tiene sus propias fotos: la primera es la portada. */
const PRODUCTS = [
  {
    slug: "sandalia-cruzada",
    name: "Sandalia Cruzada",
    category: "sandalias",
    price: null,
    badge: null,
    colors: [
      {
        name: "Negro",
        hex: "#201d19",
        images: [
          "images/productos/sandalia-cruzada/negro-01.jpg",
          "images/productos/sandalia-cruzada/negro-02.jpg",
          "images/productos/sandalia-cruzada/negro-03.jpg",
          "images/productos/sandalia-cruzada/negro-04.jpg",
          "images/productos/sandalia-cruzada/negro-05.jpg",
          "images/productos/sandalia-cruzada/negro-06.jpg",
          "images/productos/sandalia-cruzada/negro-07.jpg",
          "images/productos/sandalia-cruzada/negro-08.jpg",
          "images/productos/sandalia-cruzada/negro-09.jpg",
          "images/productos/sandalia-cruzada/negro-10.jpg",
          "images/productos/sandalia-cruzada/negro-11.jpg",
          "images/productos/sandalia-cruzada/negro-12.jpg",
          "images/productos/sandalia-cruzada/negro-13.jpg",
          "images/productos/sandalia-cruzada/negro-14.jpg",
          "images/productos/sandalia-cruzada/negro-15.jpg",
        ],
      },
      {
        name: "Blanco",
        hex: "#f2efe9",
        images: [
          "images/productos/sandalia-cruzada/blanco-01.jpg",
          "images/productos/sandalia-cruzada/blanco-02.jpg",
          "images/productos/sandalia-cruzada/blanco-03.jpg",
          "images/productos/sandalia-cruzada/blanco-04.jpg",
          "images/productos/sandalia-cruzada/blanco-05.jpg",
          "images/productos/sandalia-cruzada/blanco-06.jpg",
          "images/productos/sandalia-cruzada/blanco-07.jpg",
          "images/productos/sandalia-cruzada/blanco-08.jpg",
          "images/productos/sandalia-cruzada/blanco-09.jpg",
          "images/productos/sandalia-cruzada/blanco-10.jpg",
          "images/productos/sandalia-cruzada/blanco-11.jpg",
          "images/productos/sandalia-cruzada/blanco-12.jpg",
          "images/productos/sandalia-cruzada/blanco-13.jpg",
          "images/productos/sandalia-cruzada/blanco-14.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Sandalia chata de tiras cruzadas con hebilla al tobillo. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "sandalia-volados",
    name: "Sandalia Volados",
    category: "sandalias",
    price: null,
    badge: null,
    colors: [
      {
        name: "Verde",
        hex: "#3aa868",
        images: [
          "images/productos/sandalia-volados/verde-01.jpg",
          "images/productos/sandalia-volados/verde-02.jpg",
          "images/productos/sandalia-volados/verde-03.jpg",
          "images/productos/sandalia-volados/verde-04.jpg",
          "images/productos/sandalia-volados/verde-05.jpg",
          "images/productos/sandalia-volados/verde-06.jpg",
          "images/productos/sandalia-volados/verde-07.jpg",
          "images/productos/sandalia-volados/verde-08.jpg",
          "images/productos/sandalia-volados/verde-09.jpg",
          "images/productos/sandalia-volados/verde-10.jpg",
        ],
      },
      {
        name: "Negro",
        hex: "#201d19",
        images: [
          "images/productos/sandalia-volados/negro-01.jpg",
          "images/productos/sandalia-volados/negro-02.jpg",
          "images/productos/sandalia-volados/negro-03.jpg",
          "images/productos/sandalia-volados/negro-04.jpg",
          "images/productos/sandalia-volados/negro-05.jpg",
          "images/productos/sandalia-volados/negro-06.jpg",
          "images/productos/sandalia-volados/negro-07.jpg",
          "images/productos/sandalia-volados/negro-08.jpg",
          "images/productos/sandalia-volados/negro-09.jpg",
          "images/productos/sandalia-volados/negro-10.jpg",
        ],
      },
      {
        name: "Amarillo",
        hex: "#e3d86a",
        images: [
          "images/productos/sandalia-volados/amarillo-01.jpg",
          "images/productos/sandalia-volados/amarillo-02.jpg",
          "images/productos/sandalia-volados/amarillo-03.jpg",
          "images/productos/sandalia-volados/amarillo-04.jpg",
          "images/productos/sandalia-volados/amarillo-05.jpg",
          "images/productos/sandalia-volados/amarillo-06.jpg",
          "images/productos/sandalia-volados/amarillo-07.jpg",
          "images/productos/sandalia-volados/amarillo-08.jpg",
          "images/productos/sandalia-volados/amarillo-09.jpg",
          "images/productos/sandalia-volados/amarillo-10.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Sandalia chata con pulsera al tobillo y frente con volado. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "sandalia-flores",
    name: "Sandalia Flores",
    category: "sandalias",
    price: null,
    badge: null,
    colors: [
      {
        name: "Negro",
        hex: "#201d19",
        images: [
          "images/productos/sandalia-flores/negro-01.jpg",
          "images/productos/sandalia-flores/negro-02.jpg",
          "images/productos/sandalia-flores/negro-03.jpg",
          "images/productos/sandalia-flores/negro-04.jpg",
          "images/productos/sandalia-flores/negro-05.jpg",
          "images/productos/sandalia-flores/negro-06.jpg",
          "images/productos/sandalia-flores/negro-07.jpg",
          "images/productos/sandalia-flores/negro-08.jpg",
          "images/productos/sandalia-flores/negro-09.jpg",
          "images/productos/sandalia-flores/negro-10.jpg",
          "images/productos/sandalia-flores/negro-11.jpg",
        ],
      },
      {
        name: "Blanco",
        hex: "#f2efe9",
        images: [
          "images/productos/sandalia-flores/blanco-01.jpg",
          "images/productos/sandalia-flores/blanco-02.jpg",
          "images/productos/sandalia-flores/blanco-03.jpg",
          "images/productos/sandalia-flores/blanco-04.jpg",
          "images/productos/sandalia-flores/blanco-05.jpg",
          "images/productos/sandalia-flores/blanco-06.jpg",
          "images/productos/sandalia-flores/blanco-07.jpg",
          "images/productos/sandalia-flores/blanco-08.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Sandalia de taco chino bajo, con talón abierto y flores aplicadas. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "chata-ondas",
    name: "Chata Ondas",
    category: "chatas",
    price: null,
    badge: null,
    colors: [
      {
        name: "Suela",
        hex: "#c08a45",
        images: [
          "images/productos/chata-ondas/suela-01.jpg",
          "images/productos/chata-ondas/suela-02.jpg",
          "images/productos/chata-ondas/suela-03.jpg",
          "images/productos/chata-ondas/suela-04.jpg",
          "images/productos/chata-ondas/suela-05.jpg",
          "images/productos/chata-ondas/suela-06.jpg",
          "images/productos/chata-ondas/suela-07.jpg",
          "images/productos/chata-ondas/suela-08.jpg",
          "images/productos/chata-ondas/suela-09.jpg",
          "images/productos/chata-ondas/suela-10.jpg",
          "images/productos/chata-ondas/suela-11.jpg",
        ],
      },
      {
        name: "Crema",
        hex: "#e4d6b4",
        images: [
          "images/productos/chata-ondas/crema-01.jpg",
          "images/productos/chata-ondas/crema-02.jpg",
          "images/productos/chata-ondas/crema-03.jpg",
          "images/productos/chata-ondas/crema-04.jpg",
          "images/productos/chata-ondas/crema-05.jpg",
          "images/productos/chata-ondas/crema-06.jpg",
          "images/productos/chata-ondas/crema-07.jpg",
          "images/productos/chata-ondas/crema-08.jpg",
          "images/productos/chata-ondas/crema-09.jpg",
          "images/productos/chata-ondas/crema-10.jpg",
          "images/productos/chata-ondas/crema-11.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Chata de punta fina con borde ondulado. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "guillermina-tejida",
    name: "Guillermina Tejida",
    category: "guillerminas",
    price: null,
    badge: null,
    colors: [
      {
        name: "Negro y crudo",
        hex: "#2b2f3a",
        images: [
          "images/productos/guillermina-tejida/negro-y-crudo-01.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-02.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-03.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-04.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-05.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-06.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-07.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-08.jpg",
          "images/productos/guillermina-tejida/negro-y-crudo-09.jpg",
        ],
      },
      {
        name: "Natural",
        hex: "#d8c39a",
        images: [
          "images/productos/guillermina-tejida/natural-01.jpg",
          "images/productos/guillermina-tejida/natural-02.jpg",
          "images/productos/guillermina-tejida/natural-03.jpg",
          "images/productos/guillermina-tejida/natural-04.jpg",
          "images/productos/guillermina-tejida/natural-05.jpg",
          "images/productos/guillermina-tejida/natural-06.jpg",
          "images/productos/guillermina-tejida/natural-07.jpg",
          "images/productos/guillermina-tejida/natural-08.jpg",
          "images/productos/guillermina-tejida/natural-09.jpg",
          "images/productos/guillermina-tejida/natural-10.jpg",
          "images/productos/guillermina-tejida/natural-11.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Guillermina de punta con capellada tejida y pulsera al tobillo. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "sandalia-curvas",
    name: "Sandalia Curvas",
    category: "sandalias",
    price: null,
    badge: null,
    colors: [
      {
        name: "Lila",
        hex: "#a9a6d6",
        images: [
          "images/productos/sandalia-curvas/lila-01.jpg",
          "images/productos/sandalia-curvas/lila-02.jpg",
          "images/productos/sandalia-curvas/lila-03.jpg",
          "images/productos/sandalia-curvas/lila-04.jpg",
          "images/productos/sandalia-curvas/lila-05.jpg",
          "images/productos/sandalia-curvas/lila-06.jpg",
          "images/productos/sandalia-curvas/lila-07.jpg",
        ],
      },
      {
        name: "Naranja",
        hex: "#e8643a",
        images: [
          "images/productos/sandalia-curvas/naranja-01.jpg",
          "images/productos/sandalia-curvas/naranja-02.jpg",
          "images/productos/sandalia-curvas/naranja-03.jpg",
          "images/productos/sandalia-curvas/naranja-04.jpg",
          "images/productos/sandalia-curvas/naranja-05.jpg",
          "images/productos/sandalia-curvas/naranja-06.jpg",
          "images/productos/sandalia-curvas/naranja-07.jpg",
          "images/productos/sandalia-curvas/naranja-08.jpg",
        ],
      },
      {
        name: "Blanco y plata",
        hex: "#e9e7e2",
        images: [
          "images/productos/sandalia-curvas/blanco-y-plata-01.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-02.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-03.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-04.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-05.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-06.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-07.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-08.jpg",
          "images/productos/sandalia-curvas/blanco-y-plata-09.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Sandalia chata de tiras curvas con pulsera al tobillo. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "guillermina-calada",
    name: "Guillermina Calada",
    category: "guillerminas",
    price: null,
    badge: null,
    colors: [
      {
        name: "Nude con encaje",
        hex: "#e8c6a8",
        images: [
          "images/productos/guillermina-calada/nude-con-encaje-01.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-02.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-03.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-04.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-05.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-06.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-07.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-08.jpg",
          "images/productos/guillermina-calada/nude-con-encaje-09.jpg",
        ],
      },
      {
        name: "Negro con red",
        hex: "#201d19",
        images: [
          "images/productos/guillermina-calada/negro-con-red-01.jpg",
          "images/productos/guillermina-calada/negro-con-red-02.jpg",
          "images/productos/guillermina-calada/negro-con-red-03.jpg",
          "images/productos/guillermina-calada/negro-con-red-04.jpg",
          "images/productos/guillermina-calada/negro-con-red-05.jpg",
          "images/productos/guillermina-calada/negro-con-red-06.jpg",
          "images/productos/guillermina-calada/negro-con-red-07.jpg",
          "images/productos/guillermina-calada/negro-con-red-08.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Guillermina peep-toe con pulsera al tobillo y capellada calada. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "peep-toe-mono",
    name: "Peep-toe Moño",
    category: "chatas",
    price: null,
    badge: null,
    colors: [
      {
        name: "Nude",
        hex: "#e8c6a8",
        images: [
          "images/productos/peep-toe-mono/nude-01.jpg",
          "images/productos/peep-toe-mono/nude-02.jpg",
          "images/productos/peep-toe-mono/nude-03.jpg",
          "images/productos/peep-toe-mono/nude-04.jpg",
          "images/productos/peep-toe-mono/nude-05.jpg",
          "images/productos/peep-toe-mono/nude-06.jpg",
          "images/productos/peep-toe-mono/nude-07.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Chata peep-toe con pulsera, banda plateada y moño negro. Hecha a mano en cuero, en nuestro taller.",
  },
  {
    slug: "sandalia-dorada",
    name: "Sandalia Dorada",
    category: "sandalias",
    price: null,
    badge: null,
    colors: [
      {
        name: "Dorado y fucsia",
        hex: "#d9b56b",
        images: [
          "images/productos/sandalia-dorada/dorado-y-fucsia-01.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-02.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-03.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-04.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-05.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-06.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-07.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-08.jpg",
          "images/productos/sandalia-dorada/dorado-y-fucsia-09.jpg",
        ],
      },
      {
        name: "Dorado y negro",
        hex: "#b89a5e",
        images: [
          "images/productos/sandalia-dorada/dorado-y-negro-01.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-02.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-03.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-04.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-05.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-06.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-07.jpg",
          "images/productos/sandalia-dorada/dorado-y-negro-08.jpg",
        ],
      },
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    stock: { 35: true, 36: true, 37: true, 38: true, 39: true, 40: true },
    description: "Sandalia metalizada de taco bajo con tiras cruzadas. Hecha a mano en cuero, en nuestro taller.",
  },
];

function formatPrice(value) {
  return "$" + value.toLocaleString("es-AR");
}

function hasPrice(p) {
  return typeof p.price === "number" && p.price > 0;
}

function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

function getColor(p, colorName) {
  return p.colors.find((c) => c.name === colorName) || p.colors[0];
}

function productCover(p, colorName) {
  return getColor(p, colorName).images[0];
}

/* Tarjeta de producto compartida por Inicio, Promociones y relacionados. */
function productCardHTML(p) {
  const cover = productCover(p);
  const n = p.colors.length;
  return `
    <div class="product-card">
      <a class="product-card-media" href="producto.html?slug=${p.slug}">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <img class="product-img" src="${cover}" alt="${p.name}" width="800" height="1000" loading="lazy">
      </a>
      <div class="product-card-body">
        <span class="product-colors">${n} ${n === 1 ? "color" : "colores"}</span>
        <a href="producto.html?slug=${p.slug}"><h3 class="product-name">${p.name}</h3></a>
        ${hasPrice(p)
          ? `<span class="product-price">${formatPrice(p.price)}</span>
        <span class="product-price-transfer">${formatPrice(Math.round(p.price * 0.9))} por transferencia</span>`
          : `<span class="product-price-ask">Consultá el precio</span>`}
        <a class="btn btn-primary btn-block" href="producto.html?slug=${p.slug}">Ver colores y talles</a>
      </div>
    </div>`;
}
