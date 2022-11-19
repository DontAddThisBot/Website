export function disableLoading() {
  const loading = document.getElementsByClassName("loading");
  loading[0].parentNode.removeChild(loading[0]);
}
