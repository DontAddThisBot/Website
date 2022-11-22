export async function disableLoading() {
  const loading = document.getElementsByClassName("loading");
  loading[0].parentNode.removeChild(loading[0]);
  console.log("button disabled");

  return true;
}
