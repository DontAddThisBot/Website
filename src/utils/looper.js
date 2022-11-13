import fetch from "node-fetch";

let streamersArray = [];
async function fetchStreamers() {
  const streamers = ["xqc", "kattah", "forsen", "turtoise", "pokimane"];
  const data = await fetch(
    `https://api.ivr.fi/v2/twitch/user?login=${streamers.join("%2C")}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  return (streamersArray = data);
}
fetchStreamers();

export async function getStreamers() {
  const mapped = streamersArray.map((streamer) => {
    const { displayName, logo, followers } = streamer;
    return {
      name: displayName,
      pfp: logo,
      status: "Partner",
      followers: followers.toLocaleString(),
    };
  });
  return mapped;
}
