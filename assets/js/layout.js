/* ==========================================================================
   Header, footer y botón flotante de WhatsApp — compartidos en todas las páginas
   ========================================================================== */

const NAV_ITEMS = [
  { key: "inicio", label: "Inicio", href: "index.html" },
  { key: "mujer", label: "Mujer", href: "mujer.html" },
  { key: "quienes-somos", label: "Quiénes Somos", href: "quienes-somos.html" },
  { key: "medi-tu-numero", label: "Guía de Talles", href: "medi-tu-numero.html" },
  { key: "contacto", label: "Contacto", href: "contacto.html" },
];

function renderHeader(active) {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="topbar-contact">
          <span>${ICONS.phone} 11 6107-1330</span>
          <span>${ICONS.mail} bernarditabarresishoes@gmail.com</span>
        </div>
        <span>${ICONS.truck} Envíos a todo el país con Correo Argentino</span>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <a class="brand" href="index.html">
          <span class="brand-mark">B/B</span>
          <span>
            <span class="brand-name">Bernardita Barresi</span>
            <span class="brand-sub">Calzado artesanal</span>
          </span>
        </a>
        <nav class="main-nav" id="main-nav">
          ${NAV_ITEMS.map(
            (item) =>
              `<a href="${item.href}" ${item.key === active ? 'aria-current="page"' : ""}>${item.label}</a>`
          ).join("")}
        </nav>
        <div class="header-actions">
          <a class="icon-btn" href="mujer.html" aria-label="Buscar productos">${searchIcon()}</a>
          <button class="icon-btn" id="cart-open-btn" aria-label="Ver carrito">
            ${ICONS.bag}<span class="cart-count" id="cart-count">0</span>
          </button>
          <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">${menuIcon()}</button>
        </div>
      </div>
    </header>
    <div class="trust-bar">
      <div class="container">
        <ul>
          <li>${ICONS.truck} Envíos a todo el país</li>
          <li>${ICONS.leaf} Cuero 100% genuino, hecho a mano</li>
          <li>${ICONS.refresh} Primer cambio gratis</li>
          <li>${ICONS.tag} 10% OFF pagando por transferencia</li>
        </ul>
      </div>
    </div>
  `;
}

function searchIcon() {
  return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';
}
function menuIcon() {
  return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="brand-name" style="color:#fff;font-family:var(--font-heading);font-size:1.3rem;">Bernardita Barresi</span>
            <p>Calzado de cuero hecho a mano en nuestro taller de Monte Grande, Buenos Aires. Diseño, oficio y calidad en cada par.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener">${ICONS.instagram}</a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener">${ICONS.facebook}</a>
            </div>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              ${NAV_ITEMS.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}
              <li><a href="como-comprar.html">Cómo Comprar</a></li>
              <li><a href="cambios.html">Política de Cambios</a></li>
            </ul>
          </div>
          <div>
            <h4>Medios de pago</h4>
            <div class="pay-badges">
              <span>Mercado Pago</span><span>Visa</span><span>Mastercard</span><span>Transferencia</span>
            </div>
            <p style="margin-top:14px;color:#9de3bd;font-size:0.82rem;font-weight:600;">10% OFF pagando por transferencia bancaria</p>
            <h4 style="margin-top:22px;">Envíos</h4>
            <div class="pay-badges"><span>Correo Argentino</span></div>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>${ICONS.phone} 11 6107-1330</li>
              <li>${ICONS.mail} bernarditabarresishoes@gmail.com</li>
              <li>${ICONS.pin} Anacleto Rojas 166, Monte Grande, Buenos Aires</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Bernardita Barresi. Todos los derechos reservados.</span>
          <span>Hecho a mano en Argentina 🇦🇷</span>
        </div>
      </div>
    </footer>
  `;
}

function renderWaFloat() {
  const el = document.getElementById("wa-float");
  if (!el) return;
  const msg = encodeURIComponent("Hola! Tengo una consulta sobre un modelo 😊");
  el.innerHTML = `
    <div class="wa-teaser" id="wa-teaser">
      ¿Dudas con tu talle? Escribinos
      <button id="wa-teaser-close" aria-label="Cerrar">&times;</button>
    </div>
    <a class="wa-btn" href="https://wa.me/${WHATSAPP_NUMBER}?text=${msg}" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
      ${ICONS.whatsapp}
    </a>
  `;
  document.getElementById("wa-teaser-close")?.addEventListener("click", () => {
    document.getElementById("wa-teaser").style.display = "none";
  });
  setTimeout(() => {
    const teaser = document.getElementById("wa-teaser");
    if (teaser) teaser.style.display = "none";
  }, 9000);
}

function renderModalsShell() {
  if (document.getElementById("modal-size-guide")) return;
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="modal" id="modal-size-guide">
      <div class="modal-backdrop" data-close-modal="modal-size-guide"></div>
      <div class="modal-box"></div>
    </div>
  `;
  document.body.appendChild(wrap);
}

document.addEventListener("DOMContentLoaded", () => {
  renderModalsShell();
  renderWaFloat();
  if (typeof initCartDrawer === "function") initCartDrawer();
});
