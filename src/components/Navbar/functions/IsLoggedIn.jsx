import React from 'react';
import { LoginButton } from '../../../js/api/LoginButton';
import { CustomLink } from '../../../js/utility/CustomLink';
import { dropdownBox } from './OnClickListener';
import LogoutUser from './LogoutUser';

const IsLoggedIn = ({ userAuth, userLevel, setAuthState, setIsBotIn, setUserLevel }) => {
	const { id, success } = userAuth;
	const { level } = userLevel;

	if (success) {
		const style = {
			marginRight: '50px',
		};

		return (
			<div>
				<ul>
					<img src={id?.data[0].profile_image_url} alt="navbar-pfp" onClick={dropdownBox} style={style} />
				</ul>
				<div className="dropdown-content">
					<li className="dropdown-text dashboard">
						<p className="user-level">{id?.data[0].login}</p>
						<p className="user-level">Level: {level}</p>
					</li>
					<CustomLink to={`/dashboard/${id?.data[0].login}/profile/user`} className="dropdown-text dashboard" onClick={dropdownBox}>
						Dashboard
					</CustomLink>
					<LogoutUser setAuthState={setAuthState} setIsBotIn={setIsBotIn} setUserLevel={setUserLevel} />
				</div>
			</div>
		);
	} else {
		return (
			<ul>
				<li id="login">
					<LoginButton>Login</LoginButton>
				</li>
			</ul>
		);
	}
};

export default IsLoggedIn;
