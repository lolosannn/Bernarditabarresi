/* ==========================================================================
   Meta Pixel + Conversions API — stub
   TODO antes de lanzar la campaña:
   1) Reemplazar PIXEL_ID por el ID real (Meta Events Manager).
   2) Descomentar el snippet oficial de Meta Pixel más abajo.
   3) Para máxima efectividad, sumar la API de Conversiones (server-side).
      Un sitio 100% estático no puede enviar eventos server-side por sí solo:
      se recomienda usar el Conversions API Gateway de Meta o migrar el
      checkout a una plataforma (Tiendanube/Shopify) que ya lo soporte.
   ========================================================================== */

const PIXEL_ID = "TODO_REEMPLAZAR_PIXEL_ID";

(function initPixel() {
  // TODO: descomentar una vez que se cargue el PIXEL_ID real.
  /*
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
  */
  if (window.location.hostname === "localhost" || !window.fbq) {
    console.info(
      "[Meta Pixel] Modo demo: no hay Pixel ID configurado todavía. Evento simulado -> PageView"
    );
  }
})();

function trackEvent(name, params) {
  if (typeof fbq === "function") {
    fbq("track", name, params || {});
  } else {
    console.info("[Meta Pixel demo] " + name, params || {});
  }
}

function trackViewContent(product) {
  trackEvent("ViewContent", {
    content_name: product.name,
    content_category: product.category,
    content_ids: [product.slug],
    value: product.price,
    currency: "ARS",
  });
}

function trackAddToCart(product, size, qty) {
  trackEvent("AddToCart", {
    content_name: product.name,
    content_ids: [product.slug],
    value: product.price * qty,
    currency: "ARS",
    contents: [{ id: product.slug, quantity: qty, size: size }],
  });
}

function trackInitiateCheckout(items, total) {
  trackEvent("InitiateCheckout", {
    content_ids: items.map((i) => i.slug),
    num_items: items.reduce((a, i) => a + i.qty, 0),
    value: total,
    currency: "ARS",
  });
}
