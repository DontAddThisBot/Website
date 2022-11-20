import { v4 as uuidv4 } from "uuid";
import site from "../config.json";

export function LoginButton() {
  const newParams = new URLSearchParams({
    response_type: "code",
    client_id: site.frontend.client_id,
    redirect_uri: site.frontend.redirect_uri,
    state: uuidv4(),
  });

  const AuthLink = `https://id.twitch.tv/oauth2/authorize?${newParams.toString()}`;
  return <a href={AuthLink}>Login</a>;
}
