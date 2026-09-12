# Fotos del hero (portada)

Esta carpeta alimenta el slider a pantalla completa de la home. Mientras no pongas
los archivos acá, cada foto se muestra como un cartel indicándote qué archivo falta
— así podés ir viendo el sitio andando sin romper nada.

## Cómo nombrar los archivos

Un par de fotos por modelo (una para desktop, una para mobile), con este nombre exacto:

```
images/hero/friulli-desktop.jpg   images/hero/friulli-mobile.jpg
images/hero/bolonia-desktop.jpg   images/hero/bolonia-mobile.jpg
images/hero/lucca-desktop.jpg     images/hero/lucca-mobile.jpg
images/hero/capri-desktop.jpg     images/hero/capri-mobile.jpg
images/hero/verona-desktop.jpg    images/hero/verona-mobile.jpg
images/hero/milano-desktop.jpg    images/hero/milano-mobile.jpg
```

Los nombres coinciden con los `slug` de `assets/js/products.js`. Si agregás un modelo
nuevo al catálogo y también querés su foto en el hero, sumá su par de archivos acá y
agregá una línea en `HERO_SLIDES` dentro de `assets/js/hero.js`.

¿No tenés foto para alguno de los 6, o querés menos slides? Borrá esa línea de
`HERO_SLIDES` en `assets/js/hero.js` y listo — no hace falta que completes los 6.

## Tamaños recomendados

- **Desktop** (`*-desktop.jpg`): horizontal, mínimo 1920×1080 px (16:9). Es la que se ve
  en pantallas grandes — dale prioridad a que la foto se vea bien recortada tanto ancha
  (notebook) como más cuadrada (tablet horizontal).
- **Mobile** (`*-mobile.jpg`): vertical, mínimo 1080×1600 px (aprox. 2:3 o 9:16). El hero
  ocupa toda la pantalla del celular, así que conviene una foto donde el zapato/modelo
  quede centrado — los bordes izquierdo y derecho se recortan en pantallas angostas.

## Formato y peso

- Formato: `.jpg` o `.webp` (webp pesa menos, mismo nombre con esa extensión también
  funciona si actualizás la referencia en `hero.js`).
- Peso sugerido: **menos de 400 KB por foto** una vez exportada/comprimida. Son las
  primeras imágenes que carga la página — si pesan mucho, el sitio arranca lento,
  sobre todo en 4G.
- Si tenés las fotos en alta resolución (cámara/celular moderno), expórtalas o
  comprimilas antes de subirlas (herramientas como squoosh.app funcionan bien y son
  gratis).
