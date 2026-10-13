import type { AstroIntegration } from 'astro';

const icon = `
	<svg viewBox="0 0 18 20" aria-hidden="true">
		<text
			data-viewport-breakpoint
			x="9"
			y="10.5"
			fill="currentColor"
			font-family="ui-sans-serif, system-ui, sans-serif"
			font-size="10"
			font-weight="700"
			text-anchor="middle"
			dominant-baseline="middle"
		>S</text>
	</svg>
`;

export default function viewportToolbar(): AstroIntegration {
	return {
		name: 'armix-viewport-toolbar',
		hooks: {
			'astro:config:setup': ({ addDevToolbarApp }) => {
				addDevToolbarApp({
					id: 'armix:viewport',
					name: 'ARMIX viewport',
					icon,
					entrypoint: new URL('./app.ts', import.meta.url),
				});
			},
		},
	};
}
