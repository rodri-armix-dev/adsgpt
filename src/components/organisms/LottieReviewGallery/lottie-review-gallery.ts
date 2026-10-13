const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

for (const gallery of document.querySelectorAll<HTMLElement>('[data-review-gallery]')) {
	const form = gallery.querySelector<HTMLFormElement>('[data-filters]');
	const count = gallery.querySelector<HTMLElement>('[data-count]');
	const empty = gallery.querySelector<HTMLElement>('[data-empty]');
	const items = [...gallery.querySelectorAll<HTMLElement>('lottie-review-item')];
	if (!form || !count || !empty) continue;
	const pause = (item: HTMLElement) => item.querySelector<HTMLElement & { pause?: () => void }>('lottie-animation')?.pause?.();
	const filter = () => {
		const values = new FormData(form);
		const search = normalize(String(values.get('search') ?? ''));
		let visible = 0;
		for (const item of items) {
			const matches = ['location', 'folder', 'format'].every(key => !values.get(key) || values.get(key) === item.dataset[key])
				&& normalize(item.dataset.search ?? '').includes(search);
			item.hidden = !matches;
			if (matches) visible++;
			else pause(item);
		}
		count.textContent = `${visible} de ${items.length} archivos`;
		empty.hidden = visible !== 0;
	};
	form.addEventListener('submit', event => event.preventDefault());
	form.addEventListener('input', filter);
	form.addEventListener('change', filter);
	gallery.querySelector('[data-action="pause-all"] button')?.addEventListener('click', () => items.forEach(pause));
	filter();
}
