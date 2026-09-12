# Bernardita Barresi — Sitio web

Sitio estático (HTML/CSS/JS, sin build ni dependencias) pensado para campañas de Meta Ads: mobile-first, con foco en confianza y conversión. Reemplaza la tienda anterior (con solapas vacías como "Hombre" y "Gift Cards") por una estructura más limpia orientada a la venta de calzado de mujer.

## Cómo verlo

No requiere instalación. Abrí `index.html` en el navegador, o levantá un servidor local:

```bash
python3 -m http.server 8000
```

y entrá a `http://localhost:8000`.

## Páginas

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Catálogo Mujer | `mujer.html` |
| Ficha de producto | `producto.html?slug=<id>` (ids en `assets/js/products.js`) |
| Quiénes Somos | `quienes-somos.html` |
| Cómo Comprar | `como-comprar.html` |
| Política de Cambios | `cambios.html` |
| Guía de Talles | `medi-tu-numero.html` |
| Contacto | `contacto.html` |

## Qué incluye

- **Menú limpio**: solo Inicio, Mujer, Quiénes Somos, Guía de Talles y Contacto. "Hombre" y "Gift Cards" se sacaron del menú porque no tenían contenido real — se pueden volver a agregar en `assets/js/layout.js` (`NAV_ITEMS`) cuando haya catálogo.
- **Ficha de producto completa**: galería, selector de color/talle (con talles sin stock tachados y link de "avisame"), guía de talles en modal, detalle de materiales, trust badges, WhatsApp inline y productos relacionados.
- **Carrito propio (localStorage)** con checkout asistido por WhatsApp: arma el pedido y lo manda como mensaje prellenado, sin pedir registro. Ver el punto "Sobre el checkout" más abajo.
- **Confianza**: banner de envíos (Correo Argentino), primer cambio gratis, 10% OFF por transferencia, testimonios, historia del taller.
- **Mobile-first**: botón de "Agregar al carrito" fijo abajo en mobile, menú hamburguesa, WhatsApp flotante con mensaje de invitación.
- **Meta Pixel (stub)**: `assets/js/pixel.js` ya dispara `ViewContent`, `AddToCart` e `InitiateCheckout` en los momentos correctos — falta cargar el Pixel ID real.

## TODO antes de lanzar la campaña

1. **Contenido real**: reemplazar textos marcados `<!-- TODO -->` (historia de la marca, política de cambios exacta — quién paga el envío del cambio —, horarios, dirección si difiere).
2. **Fotos reales**: todas las imágenes son placeholders (bloques con degradé e ícono). Reemplazar por fotos de producto en fondo neutro + al menos una foto de "puesto" (lifestyle) por modelo, en `assets/js/products.js` y las páginas.
3. **Catálogo real**: cargar productos, precios, talles, stock y colores reales en `assets/js/products.js`.
4. **Meta Pixel**: completar `PIXEL_ID` en `assets/js/pixel.js` y descomentar el snippet oficial. Evaluar sumar la API de Conversiones (Conversions API) para mejorar la calidad de los eventos — un sitio 100% estático no puede enviarla por sí solo.
5. **Formulario de contacto**: `contacto.html` tiene un formulario que hoy no envía a ningún lado (solo muestra un mensaje de éxito). Conectarlo a un servicio como Formspree/EmailJS o a un backend propio para que llegue por email.
6. **WhatsApp**: confirmar el número en `assets/js/ui.js` (`WHATSAPP_NUMBER`, formato solo dígitos con código de país, sin "+").
7. **Dominio propio + verificación en Meta Business** y emails transaccionales que no caigan en spam (ver punto siguiente).

## Sobre el checkout (importante)

Este sitio **no procesa pagos ni envía emails transaccionales**, porque es un sitio estático sin backend. El flujo de compra implementado es: el cliente arma su pedido en el carrito → lo envía como mensaje de WhatsApp prellenado a la dueña → se coordina el pago (transferencia con descuento, Mercado Pago o tarjeta) y el envío directamente por WhatsApp.

Esto es intencional: coincide con que hoy la venta se hace de forma asistida y evita construir un backend de pagos desde cero. Si más adelante se quiere un checkout 100% self-service con cobro automático de tarjeta y emails de confirmación/tracking automáticos, conviene migrar a una plataforma de e-commerce (Tiendanube, Shopify, WooCommerce) o construir un backend con pasarela de pago — ese es un proyecto aparte.

## Estructura

```
index.html
mujer.html
producto.html
quienes-somos.html
como-comprar.html
cambios.html
medi-tu-numero.html
contacto.html
assets/
  css/style.css       — sistema de diseño (colores, tipografía, componentes)
  js/products.js       — catálogo (placeholder)
  js/layout.js         — header, footer, WhatsApp flotante
  js/cart.js            — carrito (localStorage) + checkout por WhatsApp
  js/ui.js               — íconos, modal de guía de talles, menú mobile, acordeones
  js/pixel.js            — stub de Meta Pixel + eventos de conversión
```
