import type { Importer } from 'sass';

// Shared by Astro/JavaScript and the virtual Sass module registered in astro.config.mjs.
// Values are in pixels. S is the base range, not a min-width media query.
export const breakpoints = {
	s: 0,
	m: 576,
	l: 1024,
	xl: 1380,
	xxl: 1980,
} as const;

export type Breakpoint = keyof typeof breakpoints;

function query(min?: number, max?: number): string {
	return [
		min === undefined ? undefined : `(min-width: ${min}px)`,
		max === undefined ? undefined : `(max-width: ${max}px)`,
	].filter(Boolean).join(' and ');
}

// CSS cascade order: broad ranges first, combined and exclusive overrides last.
export const mediaQueries = {
	m: query(breakpoints.m),
	l: query(breakpoints.l),
	xl: query(breakpoints.xl),
	xxl: query(breakpoints.xxl),
	osm: query(undefined, breakpoints.l - 1),
	osml: query(undefined, breakpoints.xl - 1),
	oml: query(breakpoints.m, breakpoints.xl - 1),
	os: query(undefined, breakpoints.m - 1),
	om: query(breakpoints.m, breakpoints.l - 1),
	ol: query(breakpoints.l, breakpoints.xl - 1),
	oxl: query(breakpoints.xl, breakpoints.xxl - 1),
	oxxl: query(breakpoints.xxl),
} as const;

export type ResponsiveRange = keyof typeof mediaQueries;
export type ResponsiveValues<T> = Partial<Record<ResponsiveRange, T>>;
export const rangeOrder = Object.keys(mediaQueries) as ResponsiveRange[];

export const sharedBreakpointsImporter: Importer<'sync'> = {
	canonicalize(url) {
		return url === 'shared:breakpoints' ? new URL(url) : null;
	},
	load(url) {
		if (url.href !== 'shared:breakpoints') return null;

		const entries = Object.entries(breakpoints);

		return {
			contents: [
				...entries.map(([name, value]) => `$breakpoint-${name}: ${value}px;`),
				`$breakpoints: (${entries.map(([name]) => `${name}: $breakpoint-${name}`).join(', ')});`,
				`$media-queries: (${Object.entries(mediaQueries).map(([name, value]) => `${name}: ${JSON.stringify(value)}`).join(', ')});`,
				`$range-order: (${rangeOrder.join(', ')});`,
			].join('\n'),
			syntax: 'scss',
		};
	},
};
