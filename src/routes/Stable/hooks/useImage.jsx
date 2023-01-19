import { useState, useEffect } from 'react';
import site from '../../../config.json';

export default function useImage(ID) {
	const [image, setImage] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${site.frontend.oldApi}/api/bot/stable/${ID}`)
			.then((res) => res.json())
			.then((data) => {
				setImage(data);
				setLoading(false);
			});
	}, [ID]);

	return [image, loading];
}
