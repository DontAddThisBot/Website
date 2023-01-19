import React from 'react';
import { LoginButton } from '../../../js/api/LoginButton';
import LogoutUser from './LogoutUser';
import { CustomLink } from '../../../js/utility/CustomLink';

function onClickHide() {
	document.getElementById('hamburger-icon').classList.toggle('open');
}

function ReturnMobileRoutes() {
	return (
		<>
			<CustomLink to="/" onClick={onClickHide}>
				Home
			</CustomLink>
			<CustomLink to="/leaderboard" onClick={onClickHide}>
				Leaderboard
			</CustomLink>
			<CustomLink to="/commands" onClick={onClickHide}>
				Commands
			</CustomLink>
			<li>
				<a href="https://stats.kattah.me">Stats</a>
			</li>
		</>
	);
}

const MobileNavBar = ({ userAuth, userLevel, setAuthState, setIsBotIn, setUserLevel }) => {
	const { id, success } = userAuth;
	const { level } = userLevel;
	if (success) {
		return (
			<>
				<ReturnMobileRoutes />
				<ul className="mobile-text-dropdown">
					<CustomLink to={`/dashboard/${id?.data[0].login}/profile/user`} id="dropdown-text dashboard" onClick={onClickHide}>
						{' '}
						Dashboard{' '}
					</CustomLink>
					<li id="dropdown-text dashboard">
						<p className="user-level">Level: {level}</p>
					</li>
				</ul>
				<li>
					<p className="user-name">Logged in as</p>
					<p>{id?.data[0].login}</p>
				</li>
				<LogoutUser setAuthState={setAuthState} setIsBotIn={setIsBotIn} setUserLevel={setUserLevel} />
			</>
		);
	} else {
		return (
			<>
				<ReturnMobileRoutes />
				<li id="login">
					<LoginButton>Login</LoginButton>
				</li>
			</>
		);
	}
};

export default MobileNavBar;
