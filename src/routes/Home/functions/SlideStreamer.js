import React from 'react';
import { transition } from './transition';

let pfp = document.getElementsByClassName('streamer-pfp');
let username = document.getElementsByClassName('streamer-username');
let statusa = document.getElementsByClassName('streamer-status');
let followers = document.getElementsByClassName('streamer-followers');

function convertUnicode(input) {
	const codePoint = parseInt(input.slice(2), 10);
	return String.fromCodePoint(codePoint);
}

const SlideStreamer = ({ position, totalStreamers, setButton, setCount }) => {
	function LeftLoad() {
		if (totalStreamers) {
			const index = totalStreamers.findIndex((streamer) => streamer.name === username[0].innerHTML);
			transition('', pfp, username, statusa, followers);
			if (index === 0) {
				setButton(totalStreamers[totalStreamers.length - 1].name);
			} else {
				setButton(totalStreamers[index - 1].name);
			}
		}
	}

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

	return (
		<button
			className={`streamer-button ${position}`}
			onClick={() => {
				position === 'left' ? LeftLoad() : RightLoad();
				setCount(0);
				console.log(totalStreamers);
			}}
		>
			<span>{position === 'left' ? convertUnicode('&#60;') : convertUnicode('&#62;')}</span>
		</button>
	);
};
export default SlideStreamer;
