import { isChannelBot } from '../../../js/api/isChannelBot';
import { Span } from '../components/Span';
import { join as joinChannel } from '../../../js/api/bot';

const JoinButton = ({ loginFlow, callback }) => {
	const { success, id } = loginFlow;
	return (
		<button
			className="join-button"
			onClick={() => {
				const joinButton = document.getElementsByClassName('join-button');
				joinButton[0].innerHTML = 'Joining...';
				joinButton[0].disabled = true;
				joinChannel().then(() => isChannelBot(id?.data[0].login).then((res) => callback(res)));
			}}
		>
			<Span>Add Bot</Span>
		</button>
	);
};

export default JoinButton;
