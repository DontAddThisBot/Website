import { useLocation } from 'react-router-dom';

export const useReturnLocation = () => {
	const location = useLocation();
	const regex = /\/dashboard\/([^/]*)/;
	const result = regex.exec(location.pathname);

	return result;
};
