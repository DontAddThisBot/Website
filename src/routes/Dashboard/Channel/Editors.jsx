import React, { useContext, useState } from 'react';
import { Context } from '../../../Context';
import styled from 'styled-components';
import TopHeader from './functions/OuterProfile';
import site from '../../../config.json';
import LoadingScuffed from '../../../img/LoadingScuffed.gif';

import Unkonwn from '../functions/Unknown';

const Editors = () => {
	const asd = useContext(Context);
	const { isChannel, editors, id } = asd.isBotIn;
	const [editorState, setEditorState] = useState(editors);
	if (!isChannel) {
		return (
			<>
				<TopHeader h1="Editors" h2="Manage your editors, editors can remove and add your 7TV emotes." />
				<Unkonwn h1="No Bot Added..." />
			</>
		);
	}

	const NoEditors = () => {
		if (editorState?.length === 0) {
			return (
				<>
					<h1>No editors found...</h1>
				</>
			);
		} else {
			return (
				<tr>
					<th>Username</th>
					<th>Granted</th>
					<th>Action</th>
				</tr>
			);
		}
	};

	const removeEditor = async (e) => {
		e.preventDefault();
		const value = e.target?.value.toLowerCase();
		const { success, data, message } = await fetch(`${site.frontend.oldApi}/api/bot/editor`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
			},
			body: JSON.stringify({
				type: 'REMOVE',
				targetID: value,
				channelID: id,
			}),
		}).then((res) => res.json());

		if (success) {
			setEditorState(data.editors);
		} else {
			alert(message);
		}
	};

	const addEditor = async (e) => {
		e.preventDefault();
		let loading = document.querySelector('.loading');
		loading.style.display = 'block';
		const targetUser = e.target[0].value.toLowerCase();
		const { success, data, message } = await fetch(`${site.frontend.oldApi}/api/bot/editor`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
			},
			body: JSON.stringify({
				type: 'ADD',
				targetUser,
				channelID: id,
			}),
		}).then((res) => res.json());

		if (success) {
			loading.style.display = 'none';
			setEditorState(data.editors);
		} else {
			loading.style.display = 'none';
			alert(message);
		}
	};

	return (
		<>
			<TopHeader h1="Editors" h2="Manage your editors, editors can remove and add your 7TV emotes." />
			<SearchBar>
				<h3>Add Editors</h3>
				<form onSubmit={addEditor}>
					<input type="text" placeholder="Search..., eg. forsen" />
					<img src={LoadingScuffed} alt="loading" className="loading" />
				</form>
			</SearchBar>
			<OuterEditor>
				<table>
					<thead>
						<NoEditors />
					</thead>
					<tbody>
						{editorState?.map((editor) => {
							const { username, id, grantedAt, avatar } = editor;
							return (
								<tr>
									<td className="editor-name">
										<img src={avatar} alt="Kattah" />
										<a href={`https://twitch.tv/${username}`}>{username}</a>
									</td>
									<td className="editor-grant">{grantedAt.split('T')[0]}</td>
									<td className="editor-action">
										<button className="editor-remove" onClick={removeEditor} value={id}>
											Remove
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</OuterEditor>
		</>
	);
};

const SearchBar = styled.div`
	margin-left: 20px;
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

	img.loading {
		display: none;
		width: 1.5rem;
		height: 1.5rem;
	}
`;

const OuterEditor = styled.div`
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
	animation-name: slideFromLeft;
	animation-duration: 0.5s;

	@media (max-width: 768px) {
		width: 95%;
		height: 40vh;
		margin-left: 0.5rem;
	}

	@keyframes slideFromLeft {
		0% {
			transform: translateX(-2%);
		}
		100% {
			transform: translateX(0%);
		}
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	table {
		display: flex;
		align-self: flex-start;
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

	tbody {
		display: table-row-group;
		vertical-align: middle;
		border-color: inherit;
	}

	th {
		display: table-cell;
		vertical-align: inherit;
		padding: 0.75rem;
	}

	td {
		display: table-cell;
		vertical-align: inherit;
		padding: 0.75rem;
		background-color: rgb(34, 44, 69);
	}

	.editor-name {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 0.5rem 0 0 0.5rem;
		justify-content: start;

		img {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
		}

		a {
			color: #fff;
			text-decoration: none;
			margin-left: 0.5rem;
		}

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			word-break: break-all;

			img {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
			}

			a {
				color: #fff;
				text-decoration: none;
				margin-left: 0.5rem;
				word-break: break-all;
				margin-top: 0.5rem;
			}
		}
	}

	.editor-action {
		display: table-cell;
		border-radius: 0 0.5rem 0.5rem 0;
		margin-left: 0.5rem;

		button {
			background-color: #d1243e;
			border: none;
			border-radius: 5px;
			color: white;
			font-weight: bold;
			cursor: pointer;
			transition: 0.3s;
			font-size: 0.9rem;

			:hover {
				background-color: transparent;
				border: 1.5px solid #d1243e;
				transform: scale(1.1);
			}
		}
	}

	.editor-grant {
		font-weight: 600;
		color: grey;
	}

	tr {
		display: table-row;
		vertical-align: inherit;
	}

	table {
		display: table;
		border-collapse: collapse;
		border-spacing: 2px;
		border-color: grey;
	}

	thead {
		display: table-header-group;
		vertical-align: middle;
		border-color: inherit;
	}
`;

export default Editors;
