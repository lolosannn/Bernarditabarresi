/* ==========================================================================
   Carrito (localStorage) + checkout asistido por WhatsApp

   TODO: este es un carrito "vitrina" para que la experiencia de compra sea
   fluida sin obligar a crear cuenta. El pedido se cierra por WhatsApp con la
   dueña (coherente con que hoy la venta se hace de forma asistida), pero no
   procesa pagos. Para checkout 100% self-service con tarjeta/Mercado Pago
   hace falta una plataforma de e-commerce real (Tiendanube, Shopify, etc.)
   o un backend propio con pasarela de pago.
   ========================================================================== */

const CART_KEY = "bb_cart_v1";
const TRANSFER_DISCOUNT = 0.1;

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartCount();
}

function addToCart(product, color, size, qty = 1) {
  const items = getCart();
  const existing = items.find(
    (i) => i.slug === product.slug && i.color === color && i.size === size
  );
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({
      slug: product.slug,
      name: product.name,
      price: product.price,
      color: color,
      size: size,
      qty: qty,
      hue: product.hue,
    });
  }
  saveCart(items);
  trackAddToCart(product, size, qty);
  showToast(`${product.name} agregado al carrito`);
  renderCartDrawer();
  openCartDrawer();
}

function removeFromCart(index) {
  const items = getCart();
  items.splice(index, 1);
  saveCart(items);
  renderCartDrawer();
}

function updateQty(index, delta) {
  const items = getCart();
  if (!items[index]) return;
  items[index].qty = Math.max(1, items[index].qty + delta);
  saveCart(items);
  renderCartDrawer();
}

function cartTotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateCartCount() {
  const items = getCart();
  const count = items.reduce((a, i) => a + i.qty, 0);
  document.querySelectorAll("#cart-count").forEach((el) => (el.textContent = count));
}

function openCartDrawer() {
  document.getElementById("cart-overlay")?.classList.add("open");
  document.getElementById("cart-drawer")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCartDrawer() {
  document.getElementById("cart-overlay")?.classList.remove("open");
  document.getElementById("cart-drawer")?.classList.remove("open");
  document.body.style.overflow = "";
}

function buildWhatsAppOrderMessage(items) {
  const lines = items.map(
    (i) => `• ${i.name} — Color: ${i.color} — Talle: ${i.size} — Cant: ${i.qty} — ${formatPrice(i.price * i.qty)}`
  );
  const subtotal = cartTotal(items);
  const transferTotal = Math.round(subtotal * (1 - TRANSFER_DISCOUNT));
  const text =
    `Hola! Quiero hacer este pedido:\n\n` +
    lines.join("\n") +
    `\n\nSubtotal: ${formatPrice(subtotal)}` +
    `\nPagando por transferencia (10% OFF): ${formatPrice(transferTotal)}` +
    `\n\n¿Me ayudan a coordinar el pago y el envío?`;
  return text;
}

function renderCartDrawer() {
  const itemsEl = document.getElementById("cart-items");
  const footerEl = document.getElementById("cart-footer");
  if (!itemsEl) return;
  const items = getCart();

  if (items.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">Tu carrito está vacío.<br><br><a class="btn btn-secondary" href="mujer.html">Ver colección</a></div>`;
    footerEl.innerHTML = "";
    return;
  }

  itemsEl.innerHTML = items
    .map(
      (item, idx) => `
    <div class="cart-item">
      ${phMedia({ hue: item.hue, ar: "1/1", tag: "" })}
      <div class="cart-item-info">
        <div class="name">${item.name}</div>
        <div class="meta">Color: ${item.color} · Talle: ${item.size}</div>
        <div class="qty-control">
          <button aria-label="Restar" onclick="updateQty(${idx}, -1)">–</button>
          <span>${item.qty}</span>
          <button aria-label="Sumar" onclick="updateQty(${idx}, 1)">+</button>
          <span style="margin-left:auto;font-weight:700;">${formatPrice(item.price * item.qty)}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})">Quitar</button>
      </div>
    </div>`
    )
    .join("");

  const subtotal = cartTotal(items);
  const waMsg = encodeURIComponent(buildWhatsAppOrderMessage(items));
  footerEl.innerHTML = `
    <div class="transfer-banner">${ICONS.tag} 10% OFF pagando por transferencia bancaria</div>
    <div class="cart-subtotal"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <a id="checkout-wa-btn" class="btn btn-whatsapp btn-block btn-lg" target="_blank" rel="noopener"
       href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}">
      ${ICONS.whatsapp} Finalizar pedido por WhatsApp
    </a>
    <p class="form-note" style="text-align:center;margin-top:10px;">Coordinamos el pago (transferencia, Mercado Pago o tarjeta) y el envío directamente con vos.</p>
  `;

  document.getElementById("checkout-wa-btn")?.addEventListener("click", () => {
    trackInitiateCheckout(items, subtotal);
  });
}

function initCartDrawer() {
  if (document.getElementById("cart-drawer")) return;
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="overlay" id="cart-overlay" data-close-cart></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Carrito de compras">
      <div class="cart-drawer-header">
        <h3 style="margin:0;">Tu carrito</h3>
        <button data-close-cart aria-label="Cerrar carrito">&times;</button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-drawer-footer" id="cart-footer"></div>
    </aside>
  `;
  document.body.appendChild(wrap);
  document.querySelectorAll("[data-close-cart]").forEach((el) =>
    el.addEventListener("click", closeCartDrawer)
  );
  document.getElementById("cart-open-btn")?.addEventListener("click", () => {
    renderCartDrawer();
    openCartDrawer();
  });
  renderCartDrawer();
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", updateCartCount);
