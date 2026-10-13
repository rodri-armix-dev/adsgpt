const initialized = new WeakSet<HTMLElement>();

function initializePricing() {
	for (const pricing of document.querySelectorAll<HTMLElement>('[data-pricing]')) {
		if (initialized.has(pricing)) continue;
		initialized.add(pricing);

		const updatePrices = () => {
			const annual = pricing.querySelector<HTMLInputElement>('[data-billing-period]:checked')?.value === 'annual';
			const discount = Number(pricing.dataset.annualDiscount);
			const multiplier = annual ? 1 - discount / 100 : 1;

			for (const plan of pricing.querySelectorAll<HTMLElement>('[data-monthly-price]')) {
				const amount = plan.querySelector<HTMLElement>('[data-price-amount]');
				if (amount) amount.textContent = (Number(plan.dataset.monthlyPrice) * multiplier).toFixed(2);
			}
		};

		pricing.addEventListener('change', (event) => {
			if (event.target instanceof HTMLInputElement && event.target.matches('[data-billing-period]')) updatePrices();
		});
		updatePrices();
	}
}

initializePricing();
document.addEventListener('astro:page-load', initializePricing);
