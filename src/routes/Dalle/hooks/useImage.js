import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

export default function useImage(ID) {
	const [image, setImage] = useState([]);
	useEffect(() => {
		fetch(`https://poros.lol/api/bot/dalle/${ID}`)
			.then((res) => res.json())
			.then((data) => {
				setImage(data);
			});
	}, [ID]);

	return image;
}
