/* ==========================================================================
   Iconos + helpers de UI compartidos
   ========================================================================== */

const ICONS = {
  truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>',
  tag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10.5V4a1 1 0 0 0-1-1h-6.5a1 1 0 0 0-.7.3L2.3 12.8a1 1 0 0 0 0 1.4l7.5 7.5a1 1 0 0 0 1.4 0l9.5-9.5a1 1 0 0 0 .3-.7z"/><circle cx="15" cy="8" r="1.5"/></svg>',
  whatsapp: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.8 9 10.2 7.6 10 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.4c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3 1 1-3.2-.2-.3C3.6 15 3 13.5 3 12 3 7 7 3 12 3s9 4 9 9-4 8.2-9 8.2z"/></svg>',
  shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  refresh: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12a10 10 0 0 1 17-7l2 2M22 12a10 10 0 0 1-17 7l-2-2"/><path d="M19 3v4h-4M5 21v-4h4"/></svg>',
  leaf: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20c8 0 16-8 16-16-8 0-16 8-16 16z"/><path d="M4 20c2-6 6-10 12-13"/></svg>',
  ruler: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="1"/><path d="M6 7v3M10 7v5M14 7v3M18 7v5"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>',
  shoe: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 44c0-6 4-9 10-13 5-3.5 8-8 10-13 1.5-3 4-4 6-2 3 3 2 8 2 12 0 3 1 5 4 6 7 2 20 3 24 9 2 3 1 7-3 8H10c-3 0-4-3-4-7z"/><path d="M20 35c3 1 7 1 11-1M30 20c1 3 1 6 0 9" /></svg>',
  bag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8h12l1 13H5L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.1.4 2.2.7 3.2a2 2 0 0 1-.5 2.1L8 10.5a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.5c1 .4 2.1.6 3.2.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>',
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.9.3-1.6 1.7-1.6h1.7V3.5C16.2 3.3 15 3 13.6 3c-2.9 0-4.9 1.8-4.9 5v2.3H5.9v3.3h2.8V22h4.8z"/></svg>',
};

const WHATSAPP_NUMBER = "541161071330"; // TODO: confirmar formato E.164 sin "+" ni espacios

function phMedia({ hue = ["#e9ddc9", "#cbb495"], ar = "4/5", tag = "Foto a reemplazar" } = {}) {
  return `<div class="ph-media" style="--hue-a:${hue[0]};--hue-b:${hue[1]};--ar:${ar}">${ICONS.shoe}<span class="ph-tag">${tag}</span></div>`;
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = ICONS.check + " " + message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

function initAccordion() {
  document.querySelectorAll(".accordion-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", isOpen ? "false" : "true");
      panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
    });
  });
}

function openModal(id) {
  document.getElementById(id)?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModals() {
  document.querySelectorAll("[data-open-modal]").forEach((el) => {
    el.addEventListener("click", () => openModal(el.getAttribute("data-open-modal")));
  });
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => closeModal(el.getAttribute("data-close-modal")));
  });
}

const SIZE_TABLE = [
  { ar: 35, cm: 22.5 },
  { ar: 36, cm: 23.2 },
  { ar: 37, cm: 23.9 },
  { ar: 38, cm: 24.6 },
  { ar: 39, cm: 25.3 },
  { ar: 40, cm: 26.0 },
];

function sizeGuideMarkup() {
  return `
    <button class="close-modal" data-close-modal="modal-size-guide" aria-label="Cerrar">&times;</button>
    <span class="eyebrow">Guía de talles</span>
    <h3>¿Cómo medir tu pie en casa?</h3>
    <ol class="steps-list">
      <li>Apoyá una hoja de papel en el piso, contra una pared, y pará descalzo/a sobre ella con el talón tocando la pared.</li>
      <li>Marcá con un lápiz el punto más largo de tu pie (generalmente el dedo más largo).</li>
      <li>Medí con una regla la distancia entre el borde de la hoja (talón) y la marca, en centímetros.</li>
      <li>Repetí con el otro pie — usá siempre la medida del pie más grande.</li>
      <li>Buscá tu medida en la tabla y elegí ese talle. Ante una duda entre dos números, recomendamos el talle más grande.</li>
    </ol>
    <table class="size-table">
      <thead><tr><th>Talle AR</th>${SIZE_TABLE.map((s) => `<th>${s.ar}</th>`).join("")}</tr></thead>
      <tbody><tr><th>Centímetros</th>${SIZE_TABLE.map((s) => `<td>${s.cm}</td>`).join("")}</tr></tbody>
    </table>
    <p class="form-note">¿Seguís con dudas? Escribinos por WhatsApp y te ayudamos a elegir el talle ideal antes de comprar.</p>
    <a class="btn btn-whatsapp btn-block" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Tengo una duda con mi talle 😊")}">${ICONS.whatsapp} Consultar por WhatsApp</a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initAccordion();
  initModals();
  const sizeGuideEl = document.getElementById("modal-size-guide");
  if (sizeGuideEl) sizeGuideEl.querySelector(".modal-box").innerHTML = sizeGuideMarkup();
});
