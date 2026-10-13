let initialization: Promise<void> | undefined;
let ready = false;
let frame = 0;
let navigation = 0;

function initialize() {
	if (initialization) return initialization;
	cancelAnimationFrame(frame);
	initialization = (async () => {
		// Las fuentes deben estar asentadas antes de medir el pin y el destino.
		await document.fonts.ready;
		await import('./scroll-panels-unified');
		ready = true;
	})();
	return initialization;
}

document.addEventListener('click', (event) => {
	if (ready || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
	if (!(event.target instanceof Element)) return;
	const link = event.target.closest<HTMLAnchorElement>('a[href]');
	if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
	const destination = new URL(link.href);
	if (destination.origin !== location.origin || destination.pathname !== location.pathname || destination.search !== location.search || destination.hash !== '#pricing') return;
	if (!document.getElementById('pricing')) return;

	event.preventDefault();
	const currentNavigation = ++navigation;
	void initialize().catch((error) => {
		console.error('No se pudo inicializar ScrollPanels antes de navegar a Planes.', error);
	}).then(() => {
		if (currentNavigation === navigation) location.assign(destination.href);
	});
}, { capture: true });

// Dos frames dan al navegador una oportunidad de pintar el Hero antes de cargar el controlador.
frame = requestAnimationFrame(() => {
	frame = requestAnimationFrame(() => {
		void initialize().then(() => {
			// En una entrada directa, esperar el refresh de load antes de corregir el ancla.
			const restoreAnchor = () => {
				if (!navigation && location.hash === '#pricing') document.getElementById('pricing')?.scrollIntoView({ behavior: 'instant' });
			};
			if (document.readyState === 'complete') restoreAnchor();
			else window.addEventListener('load', restoreAnchor, { once: true });
		}).catch((error) => {
			console.error('No se pudo inicializar ScrollPanels después del primer frame.', error);
		});
	});
});
