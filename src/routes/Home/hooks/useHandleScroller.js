import { useEffect } from 'react';
import { handleScroll } from '../../../js/utility/handleScroll';

const useHandleScroller = () => {
	useEffect(() => {
		const topWrapper = document.getElementById('top-wrapper');
		const bottomWrapper = document.getElementById('bottom-wrapper');

		window.addEventListener('scroll', handleScroll);

		topWrapper.style.opacity = '0';
		bottomWrapper.style.opacity = '0';

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
};

export default useHandleScroller;
