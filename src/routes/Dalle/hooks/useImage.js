import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

export default function useImage(ID) {
	const [image, setImage] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`https://api.poros.lol/api/bot/dalle/${ID}`)
			.then((res) => res.json())
			.then((data) => {
				setImage(data);
				setLoading(false);
			});
	}, [ID]);

	return [image, loading];
}
