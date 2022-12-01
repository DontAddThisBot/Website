import site from "../../config.json";

export async function isChannelBot(channelName) {
  const isChannelBot = await fetch(
    `${site.frontend.oldApi}/api/bot/channel/${channelName}`,
    {
      method: "GET",
      credentials: "include",
    }
  ).then((res) => res.json());
  return isChannelBot;
}
