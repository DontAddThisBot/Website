export async function fetchPfp(streamers) {
  const data = await fetch(
    `https://api.ivr.fi/v2/twitch/user?login=${streamers.join("%2C")}`,
    {
      method: "GET",
      headers: {
        "User-Agent": "IF YOU SEE THIS VI VON ZULUL",
      },
    }
  ).then((res) => res.json());
  return data;
}
