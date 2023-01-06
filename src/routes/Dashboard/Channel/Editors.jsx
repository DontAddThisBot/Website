import React, { useContext } from 'react';
import { Context } from '../../../Context';
import TopHeader from './functions/OuterProfile';

import Unkonwn from '../functions/Unknown';

const Editors = () => {
	const asd = useContext(Context);
	const { isChannel } = asd.isBotIn;
	if (!isChannel) {
		return (
			<>
				<TopHeader h1="Editors" h2="Manage your editors, editors can remove and add your 7TV emotes." />
				<Unkonwn h1="No Bot Added..." />
			</>
		);
	}

	return <TopHeader h1="Editors" h2="Manage your editors, editors can remove and add your 7TV emotes." />;
};

export default Editors;
