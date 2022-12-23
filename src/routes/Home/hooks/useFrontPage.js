import { useEffect, useState } from 'react';
import { fetchStreamers } from '../../../js/api/fetchStreamers';
import { totalChannels } from '../../../js/api/totalChannels';
import { modLookup } from '../../../js/api/modLookUp';
import { botRoles } from '../../../js/api/botRoles';
import { isChannelBot } from '../../../js/api/isChannelBot';

const useFrontPage = (loginFlow, callback) => {
	const { success, id } = loginFlow;
	const [totalStreamers, setTotalStreamers] = useState([]);
	const [totalMods, setTotalMods] = useState([]);
	const [totalChannelCount, setTotalChannelCount] = useState([]);
	const [totalRoles, setTotalRoles] = useState([]);

	useEffect(() => {
		totalChannels().then((res) => setTotalChannelCount(res));
		fetchStreamers().then((streamers) => setTotalStreamers(streamers));
		modLookup().then((mods) => setTotalMods(mods));
		botRoles().then(({ data }) => setTotalRoles(data));
		if (success) {
			const userID = id.data[0].login;
			if (userID) {
				isChannelBot(userID).then((res) => callback(res));
			}
		}
	}, [success, id, callback]);

	return {
		totalStreamers,
		totalMods,
		totalChannelCount,
		totalRoles,
	};
};

export default useFrontPage;
