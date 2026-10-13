# Conecta — static description experiment (inactive)

This candidate consolidates only `asset_47`, layer 6: “Lee y gestiona tus anuncios
en Google”. Its 37 rendered glyph paths become one shared SVG fill containing
49 Bézier contours. The exported font outlines, line wrapping and letter placement
are baked into local shape coordinates; no font substitution is involved.
The same layer retains its parent, timing, transforms, opacity and blend mode.
All other layers, images, glyph definitions, masks, FPS and duration remain intact.

`scripts/optimize-conecta-static-text.cjs` uses the installed lottie-web renderer
to extract local geometry. It requires puppeteer-core (or PUPPETEER_MODULE_PATH)
and Chrome. Run from the project root; pass `--overwrite` explicitly to regenerate.
Coordinates are normalized to ten decimal places. `report.json` records the
source hash, renderer version, target and sizes. The source is preserved.

This reduces final SVG elements from 4,187 to 4,003, but expands the JSON from
1,286,806 to 1,329,086 bytes (+42,280; 3.3%). Gzip at default local settings grows
from 191,383 to 198,341 bytes; these are compression estimates, not hosting results.

The final comparison matched pixels exactly at twenty samples, including layer
entrance, motion, exit, end and reverse seek. A preliminary run differed at one
edge pixel at frame 150; it did not recur on the subsequent comparisons. See the
visual results and validation script in `reports/lighthouse/`.

The interaction profile did not demonstrate a mobile CPU or blocking improvement.
The site therefore continues to reference `conecta-progressive/conecta.json` in
both languages. This copy is retained for inspection and is not loaded by home.
See `reports/lighthouse/conecta-static-interaction-profile.md` for the measurements.

The subsequent production build test did not reproduce the mobile blocking
regression. It reduced first-loop CPU but increased second-loop CPU, with similar
blocking and rAF cadence. The candidate remains inactive; see
`reports/lighthouse/conecta-static-build-profile.md` for the production results.
