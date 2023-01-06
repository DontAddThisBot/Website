import React, { useContext } from 'react';
import { Context } from '../../../Context';
import TopHeader from './functions/OuterProfile';

import Unkonwn from '../functions/Unknown';

const CustomCommands = () => {
	const asd = useContext(Context);
	const { isChannel } = asd.isBotIn;
	if (!isChannel) {
		return (
			<>
				<TopHeader h1="Custom Commands" h2="Here you can add custom commands for your channel." />
				<Unkonwn h1="No Bot Added..." />
			</>
		);
	}

	return <TopHeader h1="Custom Commands" h2="Here you can add custom commands for your channel." />;
};

export default CustomCommands;
