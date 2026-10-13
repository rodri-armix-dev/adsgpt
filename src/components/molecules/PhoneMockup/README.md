# PhoneMockup

Composes a WebP copy of the original Figma device, the `Lottie` atom, and an SVG status
overlay. The clock displays the browser device's local time in 24-hour format;
signal, Wi-Fi and battery are decorative.

```astro
---
import PhoneMockup from './PhoneMockup.astro';
---

<div class="demo__phone">
	<PhoneMockup src="/lotties/v1.0/describe.json" autoplay={true} loop={true} ariaLabel="Demo de creación de anuncios" />
</div>

<style lang="scss">
	.demo
	{
		&__phone
		{
			--phone-mockup-width: 300px;
		}
	}
</style>
```

The default width is `100%`; `--phone-mockup-width` accepts a CSS width and is
capped by the available parent width. The height follows the 410×788 device
ratio. Consumers own external placement and alignment.

Use phone compositions authored at 410×784 (`describe.json`, `conecta.json`,
`crea.json`, `lanza.json`). Their screen inset is already included; do not crop
or stretch the animation source. The molecule aligns the original composition
above the device with visible overflow, so animated elements can extend beyond
the frame. Screen clipping remains owned by masks inside the animation JSON;
the status overlay stays above the animation.

Props: `src` (required), `autoplay` and `loop` (default `true`), `ariaLabel`
(optional), `fetchPriority` (`high`, `low`, or `auto`; default `auto`). The hero
uses `high` for the device image, which remains eagerly loaded. Playback methods and bubbling `lottie:*` events remain owned by the
nested `lottie-animation` element.

`--phone-mockup-status-display` controls the overlay clock and status icons
(default `inline`). Set it to `none` when an animation includes its own status
bar; the camera overlay remains visible.

The named `animation` slot replaces the default Lottie with consumer-owned
animation layers. PhoneMockup keeps the device, composition alignment and status
overlay; the consumer owns playback and transitions between those layers.

The device uses 384px and 768px WebP derivatives (quality 85) alongside the original 1024px source. Its camera overlay uses a separate lossless crop, avoiding a second request for the full device image when a smaller source is selected. The crop is taken at x=400, y=125, width=230, height=80 in the original image; SVG coordinates preserve its original scale and placement.

`loading` defaults to `lazy`; the hero selects `eager` and high fetch priority. `animationLoading` forwards the Lottie loading mode. The hero uses `after-load` to let document resources complete before downloading and initializing the animation.
