import site from "../../config.json";

export async function join() {
  const data = await fetch(`${site.frontend.origin}/api/bot/join`, {
    method: "POST",
    credentials: "include",
  }).then((res) => res.json());

  return data;
}

export async function part() {
  const data = await fetch(`${site.frontend.origin}/api/bot/part`, {
    method: "POST",
    credentials: "include",
  }).then((res) => res.json());

  return data;
}

export async function create() {
  const data = await fetch(`${site.frontend.origin}/api/bot/create`, {
    method: "POST",
    credentials: "include",
  }).then((res) => res.json());

  return data;
}
