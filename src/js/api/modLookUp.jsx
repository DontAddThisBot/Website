export async function modLookup() {
	const data = await fetch(`https://modlookup.3v.fi/api/user-totals/dontaddthisbot`, {
		method: 'GET',
	}).then((res) => res.json());
	return data;
}
