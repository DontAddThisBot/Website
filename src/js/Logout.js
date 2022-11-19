import site from "../config.json";

export function Logout() {
  fetch(`${site.frontend.origin}/api/twitch/logout`, {
    method: "POST",
    credentials: "include",
  });
}
