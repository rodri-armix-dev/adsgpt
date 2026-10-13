# Conecta — first progressive-rendering pass

Derived from `../optimized-snap/conecta.json`, which remains unchanged.
`scripts/optimize-conecta-progressive.mjs` records the source SHA-256 and all
interval changes in `report.json`. Only root visual-layer in/out bounds change:
transparent leading/trailing intervals no longer require constructing SVGs.
Transform parents and matte dependencies are excluded. All keyframes, assets,
geometry, easing, masks, FPS and overall duration remain unchanged.

Home in both languages enables `progressiveLoad` only for this copy. The player
applies accessibility and composition-clip configuration to newly created SVG
layers too. The temporary fuchsia marker stays on the consuming wrapper.

Observed with lottie-web at 410 × 784: initial SVG elements 4187 → 82; at frame
50, 2521; at frame 90, 2784; at frame 525, all 4187 have been constructed.
This defers construction and does not lower the eventual maximum node count or
materially reduce download size. SVGs remain allocated after visiting them,
including when the loop returns to the beginning. No playback CPU gain is claimed.

The candidate JSON equals its source after restoring only recorded layer bounds.
Screenshot comparison covered frames 0, 4, 4.5, 9, 9.5, 14, 50, 90, 150, 392.9,
393, 420, 436.7, 474, 522, 524.9, 525, 650, 785, then backward to 0. Nineteen
samples matched pixels exactly. At frame 150, 14 pixels differed: 13 had only a
one-level channel difference and one edge pixel changed gray to white. Visual
inspection found no changed text, placement or imagery; these small rendering
differences are retained as a documented limitation, not described as pixel equality.

Chrome checks passed at 390px and 1440px: preload, forward/backward step changes,
exclusive playback of the active card, pause outside the scene, resizing and
reduced motion, without JavaScript errors. No build was run.
