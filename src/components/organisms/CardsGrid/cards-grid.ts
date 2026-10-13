class CardsGrid extends HTMLElement {
	private observer?: IntersectionObserver;
	private reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	private completed = new Set<EventTarget>();
	private itemCount = 0;

	private finish = () => {
		this.observer?.disconnect();
		this.dataset.reveal = 'complete';
	};

	private onMotionChange = () => {
		if (this.reducedMotion.matches) this.finish();
	};

	private onAnimationEnd = (event: AnimationEvent) => {
		if (event.animationName !== 'cards-grid-reveal' || !event.target) return;
		this.completed.add(event.target);
		if (this.completed.size === this.itemCount) this.finish();
	};

	connectedCallback() {
		if (this.dataset.reveal === 'complete') return;
		const list = this.querySelector<HTMLElement>('.cards-grid__list');
		this.itemCount = this.querySelectorAll('.cards-grid__item').length;
		if (!list || !this.itemCount || this.reducedMotion.matches || !('IntersectionObserver' in window)) return;
		this.dataset.reveal = 'pending';
		this.addEventListener('animationend', this.onAnimationEnd);
		this.addEventListener('focusin', this.finish);
		this.reducedMotion.addEventListener('change', this.onMotionChange);
		this.observer = new IntersectionObserver((entries) => {
			if (!entries.some((entry) => entry.isIntersecting)) return;
			this.dataset.reveal = 'playing';
			this.observer?.disconnect();
		});
		this.observer.observe(list);
	}

	disconnectedCallback() {
		this.finish();
		this.removeEventListener('animationend', this.onAnimationEnd);
		this.removeEventListener('focusin', this.finish);
		this.reducedMotion.removeEventListener('change', this.onMotionChange);
	}
}

if (!customElements.get('cards-grid')) {
	customElements.define('cards-grid', CardsGrid);
}
