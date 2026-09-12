# Fotos del hero (portada)

Esta carpeta alimenta el slider a pantalla completa de la home. Las fotos acá
**no están atadas a un modelo puntual del catálogo** — son fotos de
estilo/ambiente para la portada. Mientras falte algún archivo, esa foto se
muestra como un cartel indicándote qué archivo falta, así podés ir viendo el
sitio andando sin romper nada.

## Fotos actuales

| Escena | Desktop | Mobile |
|---|---|---|
| Taco dorado con glitter | `taco-dorado-desktop.jpg` | `taco-dorado-mobile.jpg` |
| Mocasín con borlas | `mocasin-borlas-desktop.jpg` | `mocasin-borlas-mobile.jpg` |
| Botineta animal print | `botineta-animal-print-desktop.jpg` | `botineta-animal-print-mobile.jpg` |
| Sandalia negra | `sandalia-negra-desktop.jpg` | `sandalia-negra-mobile.jpg` |

Para **agregar, sacar o reordenar** fotos: editá el array `HERO_SLIDES` en
`assets/js/hero.js` — cada línea tiene `desktop`, `mobile` y un `alt`
descriptivo. No hace falta que el nombre del archivo coincida con nada del
catálogo.

## Cómo encuadrar la foto (importante)

El texto y los botones del hero se apoyan **arriba** de la foto (con un velo
oscuro que se desvanece hacia el centro), dejando la mitad inferior libre.
Elegí o recortá las fotos para que:

- El **zapato quede en la mitad inferior** del encuadre — es la zona que no
  tapa el texto.
- La parte de **arriba de la foto sea la más "tranquila"** (fondo, cielo,
  ropa, pared) — ahí es donde va a quedar superpuesto el título.

Si subís una foto donde el zapato queda arriba o muy centrado, el título
puede taparlo — en ese caso avisá para ajustar el recorte (`object-position`)
de esa foto puntual en `assets/css/style.css`.

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
  sobre todo en 4G. Las fotos actuales fueron comprimidas a JPEG calidad 80
  (quedaron entre 110 KB y 245 KB).
