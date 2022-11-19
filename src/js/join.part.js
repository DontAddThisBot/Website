export function disableJoin() {
  const button = document.getElementsByClassName("join-button");
  button[0].style.display = "none";

  const loading = document.createElement("div");
  loading.className = "loading";
  loading.innerHTML = "Joining Channel...";
  button[0].parentNode.appendChild(loading);
}

export function disablePart() {
  const button = document.getElementsByClassName("part-button");
  button[0].style.display = "none";

  const loading = document.createElement("div");
  loading.className = "loading";
  loading.innerHTML = "Parting Channel...";
  button[0].parentNode.appendChild(loading);
}
