import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../Context';
import TopHeader from './functions/OuterProfile';
import styled from 'styled-components';
import site from '../../../config.json';

import Unkonwn from '../functions/Unknown';

const DefaultCommands = () => {
	const asd = useContext(Context);
	const { isChannel, id, username } = asd.isBotIn;
	const [disabledCommands, setDisabledCommands] = useState([]);
	const [searchCommands, setSearchCommands] = useState([]);

	useEffect(() => {
		if (asd.isBotIn) {
			setDisabledCommands(asd.isBotIn.disabledCommands);
			setSearchCommands(asd.isBotIn.disabledCommands);
		}
	}, [asd.isBotIn]);

	function handleSubmit(e) {
		const value = e.target?.value.toLowerCase();
		const filtered = disabledCommands.filter((cmd) => {
			if (!cmd.desc) cmd.desc = '';
			return cmd.command.includes(value) || cmd.desc.includes(value);
		});
		setSearchCommands(filtered);
	}

	async function handleChange(e) {
		const command = e.target.value;
		const {
			success,
			message,
			disabledCommands: newDisabled,
		} = await fetch(`${site.frontend.oldApi}/api/bot/command`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
			},
			body: JSON.stringify({
				command,
				channelID: id,
				channelLogin: username,
			}),
		}).then((res) => res.json());

		if (success) {
			setDisabledCommands(newDisabled);
			setSearchCommands(newDisabled);
		} else {
			alert(message);
		}
	}

	if (!isChannel) {
		return (
			<>
				<TopHeader h1="Default Commands" h2="Here you can disable & enable Default commands." />
				<Unkonwn h1="No Bot Added..." />
			</>
		);
	}

	return (
		<>
			<TopHeader h1="Default Commands" h2="Here you can disable & enable Default commands." />
			<h3>Default Commands</h3>
			<SearchBar>
				<input type="text" placeholder="Search..., eg. Poro or 7TV" onInput={handleSubmit} />
			</SearchBar>
			<DefaultCommandsHeader>
				<table>
					<thead>
						<tr>
							<th className="command">Command</th>
							<th className="desc">Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{searchCommands?.map((cmd) => (
							<tr key={cmd.command}>
								<td className="command-name">{cmd.command}</td>
								<td className="command-desc">{cmd.desc}</td>
								<td className="command-status">
									<label class="switch">
										<input type="checkbox" id="switch" checked={cmd.disabled} onChange={handleChange} value={cmd.command} />
										<span class="slider round" />
									</label>
									<div className={cmd.disabled ? 'enable-box' : 'disable-box'}>
										<h1 className={cmd.disabled ? 'enable-text' : 'disable-text'}>{cmd.disabled ? 'Disabled' : 'Enabled'}</h1>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</DefaultCommandsHeader>
		</>
	);
};

const SearchBar = styled.div`
	input {
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
`;

const DefaultCommandsHeader = styled.div`
	display: inline-grid;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 1rem;
	overflow-y: scroll;
	scrollbar-color: rebeccapurple green;
	scrollbar-width: thin;
	width: 90%;
	height: 75vh;
	max-height: 100%;
	line-height: 0.8rem;

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

	tbody {
		display: table-row-group;
		vertical-align: middle;
		border-color: inherit;
	}

	th {
		padding: 2rem;
	}

	th.desc {
		float: left;
	}

	tr,
	td {
		transition: 0.3s ease-in-out;
		padding: 0.5rem;
	}

	tr {
		transition: all 300ms ease 0s;
		border-bottom: 1rem solid rgb(19, 27, 40);
		border-top: 1rem solid rgb(19, 27, 40);
		background-color: transparent;
		color: inherit;
		display: table-row;
		outline: 0;
		vertical-align: middle;
		border-spacing: 0;
		border-collapse: collapse;
		text-indent: initial;

		td {
			color: inherit;
			width: calc((100% - 210px) / 2);
			box-sizing: border-box;
			font-size: inherit;
			font-family: inherit;
			font-weight: 500;
			padding: 1.2rem;
			background-color: rgb(34, 44, 69);
			border-radius: 1.5rem;

			&.command-desc {
				color: grey;
			}

			&.command-status {
				.disable-box,
				.enable-box {
					margin-top: 20px;
					background-color: rgba(0, 255, 0, 0.1);
					border-radius: 25px;
					padding: 1px 10px;
					height: 25px;
					align-items: center;
					display: flex;

					&.enable-box {
						background-color: rgba(209, 36, 62, 0.1);
					}

					h1.disable-text,
					h1.enable-text {
						padding: 0;
						color: rgba(0, 255, 0, 0.7);
						font-variant: normal;
						font-size: 1.2rem;
						font-weight: 500;

						@media (max-width: 768px) {
							font-size: 0.7rem;
						}

						&.enable-text {
							color: rgba(209, 36, 62, 0.7);
						}
					}
				}

				.switch {
					position: relative;
					display: inline-block;
					width: 40px;
					height: 24px;
				}

				.switch input {
					opacity: 0;
					width: 0;
					height: 0;
				}

				.slider {
					position: absolute;
					cursor: pointer;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: #ccc;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				.slider:before {
					position: absolute;
					content: '';
					height: 20px;
					width: 20px;
					left: 2px;
					bottom: 2px;
					background-color: white;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				input:checked + .slider {
					background-color: rgba(209, 36, 62, 0.7);
				}

				input:focus + .slider {
					box-shadow: 0 0 1px rgba(209, 36, 62, 0.7);
				}

				input:checked + .slider:before {
					-webkit-transform: translateX(15px);
					-ms-transform: translateX(15px);
					transform: translateX(15px);
				}

				.slider.round {
					border-radius: 34px;
				}

				.slider.round:before {
					border-radius: 50%;
				}
			}
		}
	}

	@media (max-width: 768px) {
		height: 40vh;
		width: 100%;
		line-height: 1.1rem;

		th {
			flex-direction: column;
			padding: 0;

			&.desc {
				display: none;
			}
		}

		tr,
		td {
			flex-direction: column;
			padding: 0;
		}

		td {
			width: 100%;
			padding: 0.5rem;

			&.command-desc {
				display: none;
			}
		}
	}
`;

export default DefaultCommands;
