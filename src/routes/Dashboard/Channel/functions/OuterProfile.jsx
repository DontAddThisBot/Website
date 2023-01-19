import React, { useContext } from 'react';
import { Context } from '../../../../Context';
import { Divider } from '../../functions/Divider';
import { OuterProfile } from '../../Profile/Profile';
import JoinButton from '../../../Home/functions/JoinButton';
import PartButton from '../../../Home/functions/PartButton';
import { useReturnLocation } from '../../hooks/useLocation';

const TopHeader = ({ h1, h2 }) => {
	const { isLoggedIn, setIsBotIn, isBotIn } = useContext(Context);
	const { success: isChannelSuccess, isChannel: isBotInChannel } = isBotIn;
	const { success, id } = isLoggedIn;

	const currentDashboardPath = useReturnLocation()[1];
	const ChannelBotButton = () => {
		if (success) {
			if (currentDashboardPath !== id.data[0].login) {
				return <></>;
			}

			if (!isBotInChannel || !isChannelSuccess) {
				return (
					<>
						<JoinButton loginFlow={isLoggedIn} callback={setIsBotIn} />
					</>
				);
			} else {
				return (
					<>
						<PartButton loginFlow={isLoggedIn} callback={setIsBotIn} />
					</>
				);
			}
		}
	};

	return (
		<>
			<OuterProfile>
				<div className="profile-intro">
					<h1>{h1}</h1>
					<h2>{h2}</h2>
				</div>
				<ChannelBotButton />
			</OuterProfile>
			<Divider />
		</>
	);
};

export default TopHeader;
