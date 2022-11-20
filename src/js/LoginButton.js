import { v4 as uuidv4 } from "uuid";
import site from "../config.json";
import { useLocation } from "react-router-dom";

export function LoginButton({ children }) {
  const { pathname } = useLocation();
  const newParams = new URLSearchParams({
    response_type: "code",
    client_id: site.frontend.client_id,
    redirect_uri: site.frontend.redirect_uri,
    state: uuidv4(),
  });

  const AuthLink = `https://id.twitch.tv/oauth2/authorize?${newParams.toString()}`;
  return (
    <a
      href="#"
      onClick={() => {
        fetch(`https://test.poros.lol/redirect?path=${pathname}`, {
          method: "POST",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              window.location.href = AuthLink;
            }
          });
      }}
      // onClick={async () => {
      //   // await fetch(`${site.frontend.origin}/redirect?path=${pathname}`, {
      //   //   method: "GET",
      //   //   credentials: "include",
      //   //   headers: {
      //   //     "Content-Type": "application/json",
      //   //   },
      //   // });
      // }}
    >
      {children}
    </a>
  );
}
