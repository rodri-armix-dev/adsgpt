# ScrollPanelsUnified

Versión activa en la home. Conserva la API `items` y utiliza los mismos
componentes visuales compartidos.

La lógica de movimiento vive en `scroll-panels-unified.ts`; la carga se coordina
en `scroll-panels-loader.ts`. El markup y el ciclo de vida
parten de Native: una escena y un teléfono hermano. En los rangos S y M la escena
usa sticky nativo; desde L conserva el pin de ScrollTrigger. El loader carga
el controlador después de dos frames de renderizado o antes del primer clic en
Planes, lo que ocurra primero. Ambos caminos comparten una única promesa y esperan
las fuentes antes de medir el pin. Si el clic se adelanta, se pausa la navegación
al ancla hasta terminar la inicialización; los siguientes clics usan la navegación
nativa. El refresh inicial es síncrono para no interrumpir ese scroll después.

## Controladores

La capacidad táctil se determina una vez al conectar el componente, con la misma
detección anterior: hover/pointer, `ontouchstart` y `maxTouchPoints`. Un dispositivo
híbrido grande usa touch con geometría desktop; una ventana pequeña sin capacidad
táctil usa desktop con geometría mobile.

- Touch: scroll nativo, recorrido de `1.0` alturas por slide, salida de `1.1`,
  transición de `0.5 s` con `power2.out`. Una transición puede interrumpirse desde
  su posición visual. Al recalcular medidas dentro de la sección se restaura el
  último índice confirmado.
  El fondo y el color del corte inferior reciben el destino una vez por cambio
  de índice y usan transiciones CSS de la misma duración, independientes del
  progreso de la timeline. Una interrupción cambia el destino desde el color
  visible actual. No hay interpolaciones GSAP de color u opacidad en touch.
- Desktop: hold de `0.6`, scrub de `0.2 s`, easing `power2.inOut`, teclado de
  `0.75 s`. El progreso continuo se conserva al recalcular medidas. Los controles
  interactivos mantienen sus eventos y los extremos permiten salir de la sección.

Los dos controladores comparten los desplazamientos, fondos, reproducción, accesibilidad
y limpieza. Los paneles inactivos tienen `inert` y `aria-hidden`. Los hints
`will-change: translate` pertenecen únicamente a las capas que se desplazan y se
liberan al asentarse, salir, desmontar o activar movimiento reducido.
El contenedor raíz usa `will-change: background-color` durante esas mismas
transiciones y lo libera junto con los hints de desplazamiento.
Mientras está montado se desactiva el anclaje automático del documento para
evitar una segunda compensación de Chrome al recalcular el pin; GSAP restaura
ese estilo al desmontar.

## Geometría y reproducción

Los rangos y anchos proceden de `config/breakpoints.ts`. La geometría conserva
las columnas, tamaños y centrado por altura de desktop. El header permanece
visible. Mobile reserva 112 px más el área segura, 288 px para texto y un gap
antes del teléfono. El marco se recorta en el espacio restante de su sticky.

En S y M, `data-pinning="sticky"` mantiene la escena en `position: sticky` durante
todo el recorrido, sin spacer ni cambios a fixed. El organismo reserva su altura
original más la distancia de scroll del controlador mediante
`--scroll-panels-unified-track-height`. La reserva se actualiza durante refresh
y se limpia al desmontar. El rango procede de `mediaQueries.osm`; cambiar de
rango reinicializa el comportamiento. La selección de controlador sigue
dependiendo de la capacidad táctil, independientemente del tipo de fijación.

El umbral `LOTTIE_VISIBILITY = [0.5, 0.5, 0.9, 0.9, 0.9]` corresponde a S, M, L,
XL y XXL y se consulta por ancho, también al redimensionar. La visibilidad se
calcula sobre la porción del teléfono que cabe en la escena. Se preparan el
actual y su vecino, y se pausa al salir u ocultar la pestaña. Las solicitudes de
medición se agrupan con `requestAnimationFrame`: un único pase por frame, sin
leer layout cuando la escena está lejos. El umbral y el viewport se actualizan
solo al redimensionar.

En touch, los Lotties se pausan mientras la timeline desliza los paneles y se
reproducen cuando el panel queda asentado y cumple el umbral. Esto evita actualizar
el SVG a la vez que se compone su desplazamiento. Desktop mantiene la reproducción
por visibilidad durante su scrub continuo.

Con movimiento reducido no se crea la timeline de desplazamiento: los cambios
son inmediatos y el Lottie queda pausado en su fotograma final. La preferencia
puede cambiar mientras el componente está montado.

Se prueba `100dvh` para adaptar la escena y el teléfono a la altura visible.
En iOS, mediante `@supports (-webkit-touch-callout: none)`, se mantienen el inset de 6 px y el div
de 1 px con gradiente transparente → gris/blanco → transparente dentro del sticky.
En iOS, la escena sticky tiene fondo transparente: el organismo en flujo normal
pinta el color de los slides para evitar que Safari extienda el fondo del sticky
hacia sus barras. La escena con pin fixed conserva su fondo heredado.
No añadir transform ni will-change: transform a los ancestros del pin.

## Validación

Usar el servidor de desarrollo existente, sin build. Las pruebas dirigidas deben
cubrir ambos idiomas, controladores y geometrías independientes, interrupción,
extremos, teclado, refresh/rotación, umbrales por rango, movimiento reducido y
limpieza/remontaje. La transparencia de las barras, vibración y corte inferior
necesitan comprobarse en Safari de un iPhone real; la reproducción y ausencia de
scroll horizontal también requieren la prueba física en Chrome Android.
