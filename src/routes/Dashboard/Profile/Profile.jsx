import React, { useContext } from 'react';
import { Context } from '../../../Context';
import styled from 'styled-components';
import { LoginButton } from '../../../js/api/LoginButton';
import { Divider } from '../functions/Divider';
import ChangeLanguage from './functions/ChangeLanguage';
import { useReturnLocation } from '../hooks/useLocation';
import Unknown from '../functions/Unknown';

const Profile = () => {
	const pathUser = useReturnLocation()[1];
	const { isLoggedIn } = useContext(Context);

	const ReturnUser = () => {
		if (isLoggedIn.id.data[0]?.login !== pathUser) {
			return <Unknown h1="Unauthorized" />;
		} else {
			return <ChangeLanguage />;
		}
	};

	const ReAuthButton = () => {
		if (isLoggedIn.id.data[0]?.login !== pathUser) {
			return <></>;
		} else {
			return (
				<div className="re-auth">
					<LoginButton>
						<button className="reauthorize">
							<Span>Reauthorize</Span>
						</button>
					</LoginButton>
				</div>
			);
		}
	};
	return (
		<>
			<OuterProfile className="outer-profile">
				<div className="profile-intro">
					<h1>Profile</h1>
					<h2>Here you can change your profile information, such as your lanuage, commands information etc.</h2>
				</div>
				<ReAuthButton />
			</OuterProfile>
			<Divider />
			<ProfileInfoDashboardBoxes>
				<ReturnUser />
			</ProfileInfoDashboardBoxes>
		</>
	);
};

const ProfileInfoDashboardBoxes = styled.div`
	padding: 8px;
	margin: 8px;
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}

	.change-lanuage {
		width: 70%;
		margin: 0 8px;
		padding: 24px;
		max-width: 20%;
		border-radius: 5px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		margin-bottom: 1rem;
		background-color: #413769;

		@media (max-width: 768px) {
			max-width: 100%;
		}

		.language-text {
			color: white;
			font-size: 1.3rem;
			text-align: center;
			font-variant: all-small-caps;
			margin-bottom: 1rem;
		}

		.form-input {
			margin-bottom: 1rem;

			.selected {
				background-color: lightblue;
				color: white;
			}

			select {
				color: #fff !important;
				background-color: #0c121d !important;
				border-style: none !important;
				height: calc(1.5em + 0.75rem + 10px) !important;
				display: block;
				width: 100%;
				padding: 0.375rem 0.75rem;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.5;
				background-clip: padding-box;
				border: 1px solid #ced4da;
				border-radius: 0.25rem;
				transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			}

			label {
				color: white;
				cursor: default;
				display: inline-block;
				margin-bottom: 0.5rem;
			}
		}
	}
`;

const Span = styled.span`
	width: 100%;
	display: inherit;
	align-items: inherit;
	justify-content: inherit;
	font-weight: bold;
`;

export const OuterProfile = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: inline-table;
	}

	.profile-intro {
		flex-direction: column;
		margin-left: 20px;
		font-family: system-ui;

		h1 {
			font-size: 2rem;
			font-weight: bold;
			margin: 0;
		}

		h2 {
			font-size: 1rem;
			font-weight: 550;
			margin: 0;
			color: grey;
		}
	}

	.re-auth,
	.join-button,
	.part-button {
		margin-left: auto;
	}

	.join-button,
	.part-button {
		margin-right: 20px;

		@media (max-width: 768px) {
			margin-left: 20px;
		}
	}

	button.reauthorize {
		color: white;
		background-color: #9146ff;
		border: 1px solid #9146ff;

		:hover {
			color: white;
			background-color: transparent;
			border: 1px solid #9146ff;
		}
	}

	button.join-button {
		color: white;
		background-color: #30c759;
		border: 1px solid #30c759;

		:hover {
			background-color: transparent;
			border: 1px solid #30c759;
		}
	}

	button.part-button {
		color: white;
		background-color: #d1243e;
		border: 1px solid #d1243e;

		:hover {
			background-color: transparent;
			border: 1px solid #d1243e;
		}
	}

	button {
		border: none;
		border-radius: 5px;
		padding: 15px 25px;
		color: white;
		font-weight: bold;
		cursor: pointer;
		border: 1px solid #9146ff;
		border-radius: 5px;
		background-color: #9146ff;
		transition: 0.3s;
		font-size: 1rem;
		margin: 10px;

		&:hover {
			background-color: transparent;
			border: 1.5px solid #9146ff;
			transform: scale(1.05);
		}
	}
`;

export default Profile;
