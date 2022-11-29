import site from "../../config.json";

export async function join() {
  const data = await fetch(`${site.frontend.oldApi}/api/bot/join`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("SITE_TOKEN")}`,
    },
  }).then((res) => res.json());

  return data;
}

export async function part() {
  const data = await fetch(`${site.frontend.oldApi}/api/bot/part`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("SITE_TOKEN")}`,
    },
  }).then((res) => res.json());

  return data;
}

export async function create() {
  const data = await fetch(`${site.frontend.oldApi}/api/bot/create`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("SITE_TOKEN")}`,
    },
  }).then((res) => res.json());

  return data;
}
