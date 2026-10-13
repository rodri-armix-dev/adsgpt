# Lottie

```astro
<Lottie src="/lotties/v1.0/conecta.json" autoplay={false} loop={false} />
```

El átomo renderiza la animación. El componente consumidor controla el scroll,
la ubicación y los controles de reproducción.

La carga se coordina con observadores compartidos. Con `loading="viewport"`
(valor predeterminado), se prepara la animación cuando queda a 200px del viewport.
Las visibles tienen prioridad y se cargan hasta dos a la vez. No se precargan
las animaciones alejadas ni se inicializan todas durante períodos libres.
El reproductor SVG se importa al solicitar la primera animación y se comparte
entre instancias; conserva soporte para expresiones sin cargar los renderers
canvas y HTML.

La reproducción usa los fotogramas definidos por el archivo (`setSubframe(false)`),
sin interpolar fotogramas adicionales para pantallas de 120/144 Hz. Se conservan
los FPS del archivo y su duración. Las llamadas repetidas a `setProgress()` que
apuntan al mismo fotograma pausado no vuelven a renderizarlo. Los cambios de bucle,
reproducción y eventos de estado también evitan operaciones repetidas.

Con `loading="manual"`, el consumidor solicita la preparación mediante
`prepare()`. CardsSnap usa este modo: al aproximarse su escena, prepara la tarjeta
actual y la vecina en la dirección del scroll. Cambiar la dirección prepara la
vecina correspondiente; las instancias ya listas se reutilizan.

Solo se reproduce una animación cuando está visible y la pestaña está activa.
Salir del viewport pausa sin perder el cuadro ni la intención de reproducción;
al volver, continúa si estaba en Play. Una pausa manual, recorrer el progreso
o `autoplay={false}` se respetan al volver a entrar. Ocultar la pestaña también
detiene el inicio de nuevas cargas hasta regresar. Las instancias ya cargadas
se conservan mientras permanezcan conectadas.

`--lottie-overflow` controla el recorte de la composición SVG (`hidden` por
defecto). Un consumidor puede establecer `visible` en su wrapper para permitir
que las capas salgan del lienzo. Las máscaras internas del JSON se conservan.
Si también necesita liberar los límites de las composiciones anidadas que
genera `lottie-web`, puede usar `--lottie-composition-clip: none`. Esto conserva
las máscaras diseñadas dentro de las capas y no modifica el archivo JSON.

Una vez registrado el elemento, obtenelo desde el contenedor del consumidor:

```ts
await customElements.whenDefined('lottie-animation');
const player = container.querySelector('lottie-animation');

// Progreso normalizado del scroll: 0 = inicio, 1 = último cuadro.
player?.setProgress(scrollProgress);
```

`setProgress()` limita el valor al rango 0–1 y pausa la reproducción. Puede
llamarse mientras se carga el JSON: el último valor solicitado se aplica
cuando la animación está lista. Los valores no finitos se ignoran.

API pública:

- `prepare()`: solicita cargar sin iniciar reproducción; también funciona antes de entrar al viewport.
- `play()`: continúa desde el cuadro actual; si llegó al final, vuelve al inicio.
- `pause()`: pausa en el cuadro actual.
- `setLoop(boolean)`: activa o desactiva el bucle.
- `setProgress(number)`: recorre la animación en ambas direcciones.
- `ready`, `progress`, `playing`, `loop`: estado de solo lectura.

Eventos con propagación: `lottie:ready`, `lottie:progress`, `lottie:state` y
`lottie:error`. Su `detail` contiene `{ ready, progress, playing, loop }`.
El átomo destruye su instancia al quitarse del DOM.

`lottie:progress` se activa únicamente con `progressEvents={true}`. Se emite una
vez por fotograma distinto; el home no lo necesita. La galería de revisión lo
activa para actualizar su control de progreso. `lottie:state` se emite solo si
cambia alguno de los valores de su detalle.

## Accessibility

`ariaLabel` describes the animation on the host with `role="img"`. Without a
label, the animation is decorative and the host is hidden from assistive
technology. The generated SVG is always `aria-hidden="true"` and
`focusable="false"` to avoid exposing duplicate text and generated SVG groups.
Invalid `aria-label` attributes on generated groups without roles are removed
when the animation is ready. Keep meaningful descriptions on the host and
provide page text for any information that cannot be conveyed by that description.

`progressiveLoad` (default `false`) enables lottie-web's progressive SVG creation.
Use it with compositions whose layer visibility intervals have been verified.
Conecta in CardsSnap opts in; its transparent tails have matching layer bounds.
A child-list observer applies the same SVG accessibility and composition-clip
configuration only to newly added subtrees, caching generated composition bounds
instead of rescanning the whole SVG. Attribute changes to generated SVG text are
also cleaned incrementally. `prepare()` is idempotent until disconnect. Readiness means the player can
seek or play; it does not mean every later SVG layer has already been built.
