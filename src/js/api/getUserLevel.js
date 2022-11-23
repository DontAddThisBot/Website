import site from "../../config.json";

export async function getUserLevel(username) {
  const userLevel = await fetch(
    `${site.frontend.oldApi}/api/bot/users/${username}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  return userLevel;
}
