import React from 'react';

const BotSlider = ({ totalStreamers }) => {
	return totalStreamers
		.map((streamer, key) => streamer)
		.slice(0, 1)
		.map((streamer, key) => (
			<div className="streamer-information" key={key}>
				<img src={streamer?.pfp} alt="information" className="streamer-pfp" />
				<div className="streamer-information-text">
					<p className="streamer-username">{streamer?.name}</p>
					<p className="streamer-status">{streamer?.status}</p>
					<p className="streamer-followers">{streamer?.followers}</p>
				</div>
			</div>
		));
};

export default BotSlider;
