import React, { useContext, useMemo } from 'react';
import { Context } from '../../Context';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HideDashboard } from './functions/HideDashboard';
import Dropdown from './functions/Dropdown';
import ppCircle from '../../img/ppCircle.gif';

window.addEventListener('resize', (event) => {
	if (event.target.innerWidth > 768) {
		document.querySelector('.left-dashboard').style.display = 'block';
	}
});

const Dashboard = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { isBotIn, isLoggedIn, isLoading, userLevel } = useContext(Context);
	const { success, username, pfp, editors } = isBotIn;

	function getTargetChannel() {
		const regex = /\/dashboard\/([^/]*)/;
		const result = regex.exec(location.pathname);
		return result ? result[1] : null;
	}

	const editorsMapped = useMemo(() => {
		return editors ? new Set(editors.map((editor) => editor.id)) : null;
	}, [editors]);

	if (!isLoggedIn.success) {
		return navigate('/');
	}

	if (!isLoading || success === undefined) {
		return (
			<Loading>
				<h1>Loading...</h1>
				<img src={ppCircle} alt="Loading..." />
			</Loading>
		);
	}

	let { display_name, profile_image_url, login, id } = isLoggedIn.id.data[0];
	const targetChannel = getTargetChannel();
	if (targetChannel !== login) {
		if (!success) {
			return navigate('/');
		}

		if (editorsMapped) {
			if (!editorsMapped.has(id) && userLevel.level < 2) {
				return navigate('/');
			} else {
				login = username;
				display_name = username;
				profile_image_url = pfp;
			}
		}
	}

	return (
		<OuterDashboard>
			<aside className="left-dashboard">
				<div className="profile-box">
					<button className="profile-button">
						<div className="profile-image">
							<img src={profile_image_url} alt="profile" />
						</div>
						<div className="profile-info">
							<span className="manage-channel">Managing Channel</span>
							<span className="channel-name">{display_name}</span>
						</div>
					</button>
				</div>
				<BelowLeftDashboardProfileInfoText>
					<Dropdown className="Profile" Links={[{ href: `/dashboard/${login}/profile/user`, name: 'Profile Information' }]} />
					<Dropdown
						className="Channel"
						Links={[
							{ href: `/dashboard/${login}/channel/settings`, name: 'Bot Settings' },
							{ href: `/dashboard/${login}/channel/default`, name: 'Default Commands' },
							{ href: `/dashboard/${login}/channel/custom`, name: 'Custom Commands' },
							{ href: `/dashboard/${login}/channel/editors`, name: 'Editors' },
						]}
					/>
					<Dropdown
						className="Modules"
						Links={[
							{ href: `/dashboard/${login}/channel/seven-tv`, name: 'SevenTV' },
							{ href: `/dashboard/${login}/channel/justlog`, name: 'Justlog' },
						]}
					/>
					<Dropdown className="Help" Links={[{ href: '/commands', name: 'Documentaion' }]} />
				</BelowLeftDashboardProfileInfoText>
			</aside>
			<section className="right-dashboard">
				<aside className="mobile-left-dashboard">
					<button onClick={HideDashboard}>
						<div>SHOW MENU</div>
					</button>
				</aside>
				<Outlet />
			</section>
		</OuterDashboard>
	);
};

const Loading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		font-family: fangsong;
	}
`;

const BelowLeftDashboardProfileInfoText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	padding: 10px;
	text-align: left;
	font-size: 14px;
	line-height: 30px;
	flex-grow: 1;
	overflow-y: scroll;
	scrollbar-color: rebeccapurple green;
	scrollbar-width: thin;
	height: 70vh;

	::-webkit-scrollbar {
		width: 0.2em;
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.sidenav {
		background-color: #111;
		border-radius: 0.7rem;
	}

	button {
		color: white;
	}

	.sidenav a,
	.dropdown-btn {
		padding: 10px;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.8);
		display: block;
		border: none;
		background: none;
		width: 90%;
		text-align: left;
		cursor: pointer;
		outline: none;
		text-decoration: none;
		font-family: inherit;
		font-weight: 600;

		&:focus,
		&:hover,
		&:visited,
		&:link,
		&:active {
			text-decoration: none;
		}
	}

	.dropdown-container {
		display: none;
		background-color: rgb(24 26 34);

		a {
			color: grey;
		}
	}

	.sidenav a:hover {
		transform: scale(1.03);
		transition: 0.5s;
		text-shadow: none;
		border-left: 5px solid rgb(76 138 241);

		&.Channel {
			border-left: 5px solid #7a749d;
		}

		&.Modules {
			border-left: 5px solid #23ddf6;
		}
	}
`;

const OuterDashboard = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100vh;
	min-height: 0%;
	-webkit-box-flex: 1;
	flex-grow: 1;

	.mobile-left-dashboard {
		display: none;
	}

	.left-dashboard {
		width: 15%;
		background-color: #15191abf;
		text-align-last: start;
		.profile-box {
			position: relative;
			.profile-info {
				display: flex;
				flex-direction: column;
				-webkit-box-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				align-items: center;
				line-height: 30px;

				span {
					font-weight: 550;

					&.manage-channel {
						color: grey;
					}

					&.channel-name {
						color: #fff;
					}
				}
			}

			.profile-image {
				position: relative;
				width: 70px;
				padding-bottom: 70px;
				overflow: hidden;
				border-radius: 70px;
				margin: 0px auto;
				background-color: #15191abf;
				-webkit-box-shadow: 0px 0px 0px 2px #15191abf;
				box-shadow: 0px 0px 0px 2px #15191abf;
				margin: 10px 0px;

				img {
					position: absolute;
					top: 0px;
					left: 0px;
					width: 70px;
					object-fit: cover;
				}
			}

			.profile-button {
				-webkit-box-align: center;
				align-items: center;
				-webkit-box-pack: center;
				justify-content: center;
				position: relative;
				box-sizing: border-box;
				outline: 0px;
				border: 0px;
				margin: 0px;
				border-radius: 20px;
				cursor: pointer;
				vertical-align: middle;
				display: flex;
				flex-direction: column;
				background: rgba(255, 255, 255, 0.04);
				transition: background 0.3s ease 0s;
				width: 100%;
			}
		}
	}

	.right-dashboard {
		width: 85%;
		background-color: #121925;
	}

	@media (max-width: 768px) {
		.left-dashboard {
			display: inline-block;
			width: 50%;
			background-color: #232323;
			position: absolute;
			height: 100%;
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
		}

		.mobile-left-dashboard {
			display: block;
			button {
				color: #fff;
				width: 100%;
				background-color: #998fd2;
				padding: 10px 20px;
				font-size: 16px;
				font-weight: 550;
				border-radius: 10%;
				border: 1px solid #998fd2;
				margin: 10px 0px;
			}
		}

		.right-dashboard {
			width: 100%;
		}
	}
`;

export default Dashboard;
