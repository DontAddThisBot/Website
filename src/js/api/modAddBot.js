import site from "../../config.json";

export async function moderatorJoin(channel) {
  const data = await fetch(
    `${site.frontend.oldApi}/api/bot/mod/join/${encodeURIComponent(channel)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("SITE_TOKEN")}`,
      },
    }
  ).then((res) => res.json());

  return data;
}
