import site from "../config.json";

export async function join() {
  await fetch(`${site.frontend.origin}/api/bot/join`, {
    method: "POST",
    credentials: "include",
  });
}

export async function part() {
  await fetch(`${site.frontend.origin}/api/bot/part`, {
    method: "POST",
    credentials: "include",
  });
}

export async function create() {
  await fetch(`${site.frontend.origin}/api/bot/create`, {
    method: "POST",
    credentials: "include",
  });
}
