export function transition(isNegative, ...streamerInfo) {
	for (const classes of [...streamerInfo]) {
		if (classes) {
			classes[0].style.transform = `translate3d(${isNegative ? '-' : ''}10%, 0, 0)`;
			classes[0].style.transition = 'transform 0.5s ease-in-out';

			setTimeout(() => {
				classes[0].style.transform = 'translate3d(0, 0, 0)';
			}, 500);
		}
	}
}
