import site from "../../config.json";

export async function Logout() {
  const data = await fetch(`${site.frontend.origin}/api/twitch/logout`, {
    method: "POST",
    credentials: "include",
  }).then((res) => res.json());

  return data;
}
