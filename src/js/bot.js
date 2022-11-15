export async function join() {
  const r = await fetch("https://test.poros.lol/api/bot/join", {
    method: "POST",
    credentials: "include",
  });
  const b = await r.json();
  if (b.success) {
    window.location.href = "/";
  } else {
    // show error notification with `b.message`
  }
}

export async function part() {
  const r = await fetch("https://test.poros.lol/api/bot/part", {
    method: "POST",
    credentials: "include",
  });
  const b = await r.json();
  if (b.success) {
    window.location.href = "/";
  } else {
    // show error notification with `b.message`
  }
}
