import React, { useContext, useState } from 'react';
import { Context } from '../../../Context';
import styled from 'styled-components';
import TopHeader from './functions/OuterProfile';
import site from '../../../config.json';

import Unkonwn from '../functions/Unknown';

const ChannelBotSettings = () => {
	const asd = useContext(Context);
	const { prefix, offlineOnly, isChannel, id } = asd.isBotIn;

	const [channelPrefix, setChannelPrefix] = useState(prefix);
	const [isChecked, setIsChecked] = useState(offlineOnly === null ? false : offlineOnly);
	if (!isChannel) {
		return (
			<>
				<TopHeader h1="Bot Configuration Settings" h2="Here you can change your bot settings, events, chat, prefix etc." />
				<Unkonwn h1="No Bot Added..." />
			</>
		);
	}

	async function handleChange() {
		const { success, data } = await fetch(`${site.frontend.oldApi}/api/bot/offline`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
			},
			body: JSON.stringify({
				channelID: id,
			}),
		}).then((res) => res.json());

		if (success) {
			setIsChecked(data.offlineOnly);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const prefix = e.target[0].value;
		if (!prefix || prefix.length < 1) return alert('Please enter a valid prefix.');
		const { success, message, data } = await fetch(`${site.frontend.oldApi}/api/bot/prefix`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
			},
			body: JSON.stringify({
				prefix,
				channelID: id,
			}),
		}).then((res) => res.json());

		if (success) {
			setChannelPrefix(data.prefix);
		} else {
			alert(message);
		}
	}

	return (
		<>
			<TopHeader h1="Bot Configuration Settings" h2="Here you can change your bot settings, events, chat, prefix etc." />
			<ScrollContainer>
				<div className="scroller">
					<OfflineOnly>
						<div>
							<h1>Offline Only</h1>
							<h2>Only allow the bot to be used when the stream is offline.</h2>
						</div>
						<div className="offline-only-box">
							<input type="checkbox" id="switch" checked={isChecked} onChange={handleChange} />
							<label for="switch">Toggle</label>
							<div className={isChecked ? 'outer-offline-box' : 'outer-online-offline-box'}>
								<h1 className={isChecked ? 'offline' : 'online-offline'}>{isChecked ? 'Offline' : 'Offline & Online'}</h1>
							</div>
						</div>
					</OfflineOnly>
					<ChannelPrefix>
						<div>
							<h1>Change Prefix</h1>
						</div>
						<div className="prefix-box">
							<h2>Current Prefix: {channelPrefix === null ? 'No Prefix' : channelPrefix}</h2>
							<form className="change-prefix" onSubmit={handleSubmit}>
								<input type="text" placeholder="New Prefix, eg. ! or ?" className="prefix-change-input" />
								<button type="submit" className="prefix-change-button">
									Change Prefix
								</button>
							</form>
						</div>
					</ChannelPrefix>
				</div>
			</ScrollContainer>
		</>
	);
};

const OfflineOnly = styled.div`
	.outer-online-offline-box,
	.outer-offline-box {
		margin-left: 20px;
		margin-top: 20px;
		background-color: rgba(0, 255, 0, 0.1);
		border-radius: 25px;
		padding: 1px 10px;
		height: 25px;
		align-items: center;
		display: flex;

		&.outer-offline-box {
			background-color: rgba(209, 36, 62, 0.1);
		}
	}

	h2 {
		color: grey;
		font-size: 1.1rem;
		margin-top: -20px;
	}

	h1.online-offline,
	h1.offline {
		padding: 0;
		color: rgba(0, 255, 0, 0.7);
		font-variant: normal;
		font-size: 1.2rem;
		font-weight: 500;

		@media (max-width: 768px) {
			font-size: 0.7rem;
		}

		&.offline {
			color: rgba(209, 36, 62, 0.7);
		}
	}

	.offline-only-box {
		display: flex;
		flex-direction: row;
		width: 50%;
		padding: 8px;
		border-radius: 5px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		margin-bottom: 1rem;
		background-color: #242831;
		color: white;
		font-variant: all-small-caps;
		transition: 0.3s ease-in-out;
		cursor: pointer;
		border: none;
		outline: none;

		@media (max-width: 768px) {
			width: 90%;
		}

		input[type='checkbox'] {
			height: 0;
			width: 0;
			visibility: hidden;
		}

		label {
			cursor: pointer;
			text-indent: -9999px;
			width: 70px;
			height: 35px;
			background: grey;
			display: block;
			border-radius: 100px;
			position: relative;
			margin-top: 15px;
			margin-bottom: 15px;
		}

		label:after {
			content: '';
			position: absolute;
			top: 5px;
			left: 5px;
			width: 25px;
			height: 25px;
			background: #fff;
			border-radius: 90px;
			transition: 0.3s;
		}

		input:checked + label {
			background: #ff5b5b6b;
		}

		input:checked + label:after {
			left: calc(100% - 5px);
			transform: translateX(-100%);
		}

		label:active:after {
			width: 50px;
		}
	}
`;

const ChannelPrefix = styled.div`
	.prefix-box {
		width: 50%;
		padding: 8px;
		border-radius: 5px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		margin-bottom: 1rem;
		background-color: #242831;
		color: white;
		font-variant: all-small-caps;
		transition: 0.3s ease-in-out;
		cursor: pointer;
		border: none;
		outline: none;

		@media (max-width: 768px) {
			width: 90%;
		}

		.change-prefix {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-top: 1rem;
			outline: none;

			.prefix-change-input {
				padding: 0.5rem;
				border: 1px solid grey;
				border-radius: 0.5rem;
				margin-bottom: 0.5rem;
				background-color: transparent;
				color: white;
				font-weight: 600;

				:focus {
					outline: none;
					border: 1px solid rgb(68, 138, 255);
					transition: 0.3s ease-in-out;
				}
			}

			.prefix-change-button {
				padding: 0.5rem;
				border: transparent;
				border-radius: 0.5rem;
				background-color: #1e1e1e;
				color: white;
				cursor: pointer;
			}
		}
	}
`;

const ScrollContainer = styled.div`
	display: flex;

	.scroller {
		width: 95%;
		height: 75vh;
		overflow-y: scroll;
		scrollbar-color: rebeccapurple green;
		scrollbar-width: thin;
		padding: 8px;
		margin: 8px;

		@media (max-width: 768px) {
			height: 40vh;
			width: 90%;
		}

		::-webkit-scrollbar {
			width: 20px;
		}

		::-webkit-scrollbar-track {
			background-color: transparent;
		}

		::-webkit-scrollbar-thumb {
			background-color: #d6dee1;
			border-radius: 20px;
			border: 6px solid transparent;
			background-clip: content-box;
		}

		::-webkit-scrollbar-thumb:hover {
			background-color: #a8bbbf;
		}
	}
`;

export default ChannelBotSettings;
