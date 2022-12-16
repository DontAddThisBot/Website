import React from 'react';
import { Logout } from '../../../js/api/Logout';
import { removeListener } from './OnClickListener';

const LogoutUser = ({ setAuthState, setIsBotIn, setUserLevel }) => {
	function LogoutUser() {
		Logout();
		import('../../../js/api/isLogged').then(({ isLogged }) => {
			isLogged().then((login) => {
				setAuthState(login);
				setIsBotIn([]);
				setUserLevel([]);
			});
		});
	}

	return (
		<li
			id="logout"
			className="dropdown-text"
			onClick={() => {
				LogoutUser();
				removeListener();
			}}
		>
			Logout
		</li>
	);
};

export default LogoutUser;
