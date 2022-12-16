import { useState, useEffect } from 'react';
import { transition } from '../functions/transition';

let pfp = document.getElementsByClassName('streamer-pfp');
let username = document.getElementsByClassName('streamer-username');
let statusa = document.getElementsByClassName('streamer-status');
let followers = document.getElementsByClassName('streamer-followers');

const useStreamer = ({ totalStreamers }) => {
	const [button, setButton] = useState([]);
	const [oldStreamer, setOldStreamer] = useState([]);
	useEffect(() => {
		totalStreamers.forEach((streamer) => {
			const { name, status, pfp: profile_pic, followers: follower_count } = streamer;
			if (name === button) {
				setOldStreamer(button);
				setButton({
					old: oldStreamer,
					new: name,
				});

				const streamerSlider = document.getElementsByClassName(name);
				streamerSlider[0].style.backgroundColor = '#fff'; // white
				username[0].innerHTML = name;
				statusa[0].innerHTML = status;
				pfp[0].src = profile_pic;
				followers[0].innerHTML = follower_count;
				transition('-', pfp, username, statusa, followers);
			}

			if (button?.new !== button?.old) {
				const newSteamer = document.getElementsByClassName(button?.old);
				if (newSteamer[0]) {
					return (newSteamer[0].style.backgroundColor = '#1e1e1e'); // black
				}
			}
		});
	}, [button, totalStreamers]);

	return [button, setButton];
};

export default useStreamer;
