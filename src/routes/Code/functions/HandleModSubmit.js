import React from 'react';
import { moderatorJoin } from '../../../js/api/modAddBot';

const HandleModSubmit = () => {
	const handleSubmit = (e) => {
		function controlSubmit(Boolean) {
			e.target[0].disabled = Boolean;
			Boolean ? (e.target[0].placeholder = 'Loading...') : (e.target[0].placeholder = 'Channel Name');
			e.target[1].disabled = Boolean;
		}

		function appeandH2(text, ms) {
			const h2 = document.createElement('h2');
			h2.innerText = `${text}`;
			e.target.appendChild(h2);
			setTimeout(() => {
				h2.remove();
			}, ms);
		}

		e.preventDefault();
		controlSubmit(true);
		const channel = e.target[0].value.toLowerCase();
		if (!channel) {
			return;
		}

		moderatorJoin(channel).then((res) => {
			controlSubmit(false);
			if (res.success) {
				appeandH2('Success!', 5000);
			} else {
				appeandH2(res.message, 5000);
			}
		});
	};

	return (
		<>
			<h1>Moderator in a channel?</h1>
			<h2>You can now add this bot to any channel you Moderate! doing so will also reward you 30 poros!</h2>
			<form className="moderator-bot" onSubmit={handleSubmit}>
				<input type="text" placeholder="Channel Name" className="moderator-bot-input" />
				<button type="submit" className="moderator-bot-button">
					Add bot
				</button>
			</form>
		</>
	);
};

export default HandleModSubmit;
