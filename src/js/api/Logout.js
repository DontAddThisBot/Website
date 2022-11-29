export async function Logout() {
  localStorage.removeItem("SITE_TOKEN");
}
