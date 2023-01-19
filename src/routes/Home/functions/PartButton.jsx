import { isChannelBot } from '../../../js/api/isChannelBot';
import { Span } from '../components/Span';
import { part as partChannel } from '../../../js/api/bot';

const PartButton = ({ loginFlow, callback }) => {
	const { id } = loginFlow;
	return (
		<button
			className="part-button"
			onClick={() => {
				const partButton = document.getElementsByClassName('part-button');
				partButton[0].innerHTML = 'Parting...';
				partButton[0].disabled = true;
				partChannel().then(() => isChannelBot(id?.data[0].login).then((res) => callback(res)));
			}}
		>
			<Span>Part Bot</Span>
		</button>
	);
};

export default PartButton;
