import { v4 as uuidv4 } from 'uuid';
import site from '../../config.json';
import { useLocation, Link } from 'react-router-dom';

export function LoginButton({ children }) {
	const { pathname } = useLocation();
	const newParams = new URLSearchParams({
		response_type: 'code',
		client_id: site.frontend.client_id,
		redirect_uri: site.frontend.redirect_uri,
		state: uuidv4(),
	});

	const AuthLink = `https://id.twitch.tv/oauth2/authorize?${newParams.toString()}`;
	return (
		<Link
			onClick={() => {
				window.localStorage.setItem(
					'CURRENT_STATE',
					JSON.stringify({
						returnTo: pathname.startsWith('/auth/twitch') ? '/' : pathname,
					}),
				);

				window.location.href = AuthLink;
			}}
		>
			{children}
		</Link>
	);
}
