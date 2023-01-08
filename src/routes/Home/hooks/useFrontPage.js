import { useEffect, useState } from 'react';
import { fetchStreamers } from '../../../js/api/fetchStreamers';
import { totalChannels } from '../../../js/api/totalChannels';
import { modLookup } from '../../../js/api/modLookUp';
import { botRoles } from '../../../js/api/botRoles';

const useFrontPage = () => {
	const [totalStreamers, setTotalStreamers] = useState([]);
	const [totalMods, setTotalMods] = useState([]);
	const [totalChannelCount, setTotalChannelCount] = useState([]);
	const [totalRoles, setTotalRoles] = useState([]);

	useEffect(() => {
		totalChannels().then((res) => setTotalChannelCount(res));
		fetchStreamers().then((streamers) => setTotalStreamers(streamers));
		modLookup().then((mods) => setTotalMods(mods));
		botRoles().then(({ data }) => setTotalRoles(data));
	}, []);

	return {
		totalStreamers,
		totalMods,
		totalChannelCount,
		totalRoles,
	};
};

export default useFrontPage;
