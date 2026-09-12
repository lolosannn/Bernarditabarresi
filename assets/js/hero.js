/* ==========================================================================
   Hero slider a pantalla completa (home)

   Cada slide tiene una foto de desktop y una de mobile (art direction real
   vía <picture>, no el mismo recorte escalado). Mientras falte algún archivo
   en images/hero/, se muestra un cartel indicando qué falta en vez de un
   ícono de imagen rota.
   ========================================================================== */

const HERO_SLIDES = [
  { slug: "friulli", desktop: "images/hero/friulli-desktop.jpg", mobile: "images/hero/friulli-mobile.jpg" },
  { slug: "bolonia", desktop: "images/hero/bolonia-desktop.jpg", mobile: "images/hero/bolonia-mobile.jpg" },
  { slug: "lucca", desktop: "images/hero/lucca-desktop.jpg", mobile: "images/hero/lucca-mobile.jpg" },
  { slug: "capri", desktop: "images/hero/capri-desktop.jpg", mobile: "images/hero/capri-mobile.jpg" },
  { slug: "verona", desktop: "images/hero/verona-desktop.jpg", mobile: "images/hero/verona-mobile.jpg" },
  { slug: "milano", desktop: "images/hero/milano-desktop.jpg", mobile: "images/hero/milano-mobile.jpg" },
];

const HERO_AUTOPLAY_MS = 5500;

function setHeroChromeHeight() {
  const header = document.getElementById("site-header");
  if (!header) return;
  document.documentElement.style.setProperty("--chrome-h", header.offsetHeight + "px");
}

function initHeroSlider() {
  const root = document.getElementById("hero-slider");
  if (!root) return;

  const slides = HERO_SLIDES.map((s) => ({ ...s, product: getProduct(s.slug) })).filter((s) => s.product);
  if (slides.length === 0) return;

  const track = root.querySelector(".hero-slider-track");
  const dotsWrap = root.querySelector(".hero-dots");
  const tag = root.querySelector("#hero-model-tag");
  let index = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  track.innerHTML = slides
    .map(
      (s, i) => `
    <div class="hero-slide" data-index="${i}">
      <picture>
        <source media="(max-width: 760px)" srcset="${s.mobile}">
        <img src="${s.desktop}" alt="${s.product.name}, calzado de cuero Bernardita Barresi" ${i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'}>
      </picture>
      <div class="hero-slide-fallback-bg" style="--hue-a:${s.product.hue[0]};--hue-b:${s.product.hue[1]}">${ICONS.shoe}</div>
      <div class="hero-slide-fallback-badge">
        <span>Falta la foto de ${s.product.name}:</span>
        <code>${s.desktop}</code>
        <code>${s.mobile}</code>
      </div>
    </div>`
    )
    .join("");

  track.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => img.closest(".hero-slide").classList.add("img-missing"));
  });

  dotsWrap.innerHTML = slides
    .map((_, i) => `<button class="hero-dot" data-index="${i}" aria-label="Ir a la foto ${i + 1}"></button>`)
    .join("");
  const dots = dotsWrap.querySelectorAll(".hero-dot");

  function updateTag(i) {
    if (!tag) return;
    const p = slides[i].product;
    tag.innerHTML = `<a href="producto.html?slug=${p.slug}">Estás viendo: ${p.name} — ${formatPrice(p.price)} →</a>`;
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.setAttribute("aria-current", di === index ? "true" : "false"));
    updateTag(index);
  }

  function next() {
    if (document.hidden) return;
    goTo(index + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    if (reducedMotion || slides.length <= 1) return;
    timer = setInterval(next, HERO_AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(Number(dot.dataset.index));
      startAutoplay();
    });
  });

  root.querySelector(".hero-arrow-prev")?.addEventListener("click", () => {
    goTo(index - 1);
    startAutoplay();
  });
  root.querySelector(".hero-arrow-next")?.addEventListener("click", () => {
    goTo(index + 1);
    startAutoplay();
  });

  // Swipe en mobile
  let touchStartX = null;
  track.addEventListener("touchstart", (e) => (touchStartX = e.touches[0].clientX), { passive: true });
  track.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1));
      touchStartX = null;
      startAutoplay();
    },
    { passive: true }
  );

  goTo(0);
  startAutoplay();
  setHeroChromeHeight();
  window.addEventListener("resize", setHeroChromeHeight);
  document.fonts?.ready?.then(setHeroChromeHeight);
}
