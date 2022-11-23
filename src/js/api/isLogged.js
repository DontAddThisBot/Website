import site from "../../config.json";

export async function isLogged() {
  const isLogged = await fetch(`${site.frontend.origin}/api/twitch`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
  return isLogged;
}
