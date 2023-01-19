import { Span } from '../components/Span';

const LearnMoreButton = () => {
	return (
		<button
			className="learn-more-button"
			onClick={() => {
                window.location.href = 'https://docs.poros.lol';
			}}
		>
			<Span>Learn More</Span>
		</button>
	);
};

export default LearnMoreButton;