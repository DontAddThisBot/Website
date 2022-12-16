import React from 'react';
import styled from 'styled-components';
import Loading from '../../img/Loading.gif';
import useLeaderboard from './hooks/useLeaderboard';
import SortLeaderboard from './functions/SortLeaderboard';

const Leaderboard = () => {
	const { leaderboard, data, setLeaderboard, setProfilePic, setData } = useLeaderboard();

	return (
		<Wrapper>
			<h1>Leaderboard</h1>
			<p className="leaderboard-prize">Within Top 10 Gets lower cooldowns & colored bot reply!</p>
			<label className="dropdown">
				<div className="dd-button">Sort by</div>
				<input type="checkbox" className="dd-input" id="test" />
				<ul className="dd-menu">
					<SortLeaderboard isLowest={false} setData={setData} setLeaderboard={setLeaderboard} setProfilePic={setProfilePic} />
					<li className="divider" />
					<SortLeaderboard isLowest={true} setData={setData} setLeaderboard={setLeaderboard} setProfilePic={setProfilePic} />
				</ul>
			</label>
			<div className="leaderboard">
				{leaderboard.map((user, index) => {
					return (
						<div className={`user user${index + 1}`} key={index}>
							<div className={`rank ranking${index + 1}`}>#{user.userRank}</div>
							<div className="pfp">
								<img
									src={data === null ? Loading : user.pfp}
									alt="pfp"
									onError={(e) => {
										e.target.onerror = null;
										e.target.src = Loading;
									}}
								/>
							</div>
							<div className="info">
								<h2>{user.username}</h2>
								<p>{user.poroPrestige} Prestige</p>
								<p>{user.poroCount} Poros</p>
							</div>
							<div className="joined">
								Registered
								<br />
								{new Date(user.joinedAt).toLocaleDateString('en-US')}
							</div>
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow-wrap: break-word;
	word-break: break-all;
	min-height: 100vh;

	animation-name: slideFromLeft;
	animation-duration: 0.5s;

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

	a {
		text-decoration: none;
		color: #000000;
	}

	a:hover {
		color: #222222;
	}

	/* Dropdown */

	.dropdown {
		display: inline-block;
		position: relative;
		margin-left: auto;
		margin-right: 24.5%;
	}

	.dd-button {
		display: inline-block;
		border: 1px solid gray;
		border-radius: 4px;
		padding: 10px 30px 10px 20px;
		background-color: #1e1e1e;
		cursor: pointer;
		white-space: nowrap;
	}

	.dd-button:after {
		content: '';
		position: absolute;
		top: 50%;
		right: 15px;
		transform: translateY(-50%);
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid #ffffff;
	}

	.dd-button:hover {
		background-color: gray;
	}

	.dd-input {
		display: none;
	}

	.dd-menu {
		position: absolute;
		top: 100%;
		border: 1px solid #616161;
		border-radius: 4px;
		padding: 0;
		margin: 2px 0 0 0;
		box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
		background-color: #1b1e1e;
		list-style-type: none;
		width: 100%;
	}

	.dd-input + .dd-menu {
		display: none;
	}

	.dd-input:checked + .dd-menu {
		display: block;
	}

	.dd-menu li {
		padding: 10px 20px;
		cursor: pointer;
		white-space: nowrap;
	}

	.dd-menu li:hover {
		transition: 0.2s;
		background-color: gray;
	}

	.dd-menu li a {
		display: block;
		margin: -10px -20px;
		padding: 10px 20px;
	}

	.dd-menu li.divider {
		padding: 0;
		border-bottom: 1px solid #cccccc;
	}

	p.leaderboard-prize {
		font-size: 1.2rem;
		font-weight: 500;
		margin-top: -1rem;
		text-align: center;
	}

	.leaderboard {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}

	.user {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 50%;
		height: 50px;
		background-color: #1e1e1e;
		border-radius: 10px;
		margin-bottom: 10px;
		padding: 10px;

		.rank,
		joined {
			display: flex;
			align-items: right;
			justify-content: center;
			width: 55px;
			font-size: 15px;
			font-weight: 600;
		}

		&.user1 {
			box-shadow: 0 0 5px 5px #ffcc00;
			.ranking1 {
				color: #ffd700;
			}
		}

		&.user2 {
			box-shadow: 0 0 5px 5px #c0c0c0;
			.ranking2 {
				color: #c0c0c0;
			}
		}

		&.user3 {
			box-shadow: 0 0 5px 5px #cd7f32;
			.ranking3 {
				color: #cd7f32;
			}
		}

		joined {
			margin-right: 10px;
		}

		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-right: auto;
			margin-left: 15px;
		}

		.info {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-left: 15px;
			flex: auto;
		}

		h2 {
			font-size: 20px;
			margin: 0;
		}

		p {
			font-size: 10px;
			margin: 0;
			color: #a0a0a0;
		}

		&:hover {
			background-color: #2e2e2e;
		}

		@media (max-width: 768px) {
			word-break: break-all;
			width: 90%;

			.rank,
			joined {
				width: 20px;
				font-size: 12px;
				font-weight: 600;
			}

			.joined {
				font-size: 15px;
			}

			img {
				width: 30px;
				height: 30px;
				border-radius: 50%;
				margin-right: auto;
				margin-left: 15px;
			}

			.info {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				margin-left: 15px;
				flex: auto;
			}

			h2 {
				font-size: 10px;
				margin: 0;
			}

			p {
				font-size: 10px;
				margin: 0;
				color: #a0a0a0;
			}

			&:hover {
				background-color: #2e2e2e;
			}
		}
	}
`;

export default Leaderboard;
