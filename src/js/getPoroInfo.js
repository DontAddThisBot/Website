import site from "../config.json";

export async function poroInfo(username) {
  const data = await fetch(
    `${site.frontend.oldApi}/api/bot/porocount/${username}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  return data;
}
