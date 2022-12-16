import { useEffect, useState } from 'react';
import { transition } from '../functions/transition';

let pfp = document.getElementsByClassName('streamer-pfp');
let username = document.getElementsByClassName('streamer-username');
let statusa = document.getElementsByClassName('streamer-status');
let followers = document.getElementsByClassName('streamer-followers');

const useTimer = ({ ms, totalStreamers, setButton }) => {
	const [count, setCount] = useState(0);

	function RightLoad() {
		if (totalStreamers) {
			const index = totalStreamers.findIndex((streamer) => streamer.name === username[0].innerHTML);
			transition('-', pfp, username, statusa, followers);
			if (index === totalStreamers.length - 1) {
				setButton(totalStreamers[0]?.name);
			} else {
				setButton(totalStreamers[index + 1].name);
			}
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count + 1);
			if (count === 5) {
				RightLoad();
				setCount(0);
			}
		}, ms);
		return () => clearInterval(interval);
	}, [count]);

	return [count, setCount];
};

export default useTimer;
