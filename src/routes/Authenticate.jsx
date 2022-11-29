import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import site from "../config.json";
import styled from "styled-components";
import ppCircle from "../img/ppCircle.gif";

async function generateToken(code, state) {
  const createToken = await fetch(`${site.frontend.oldApi}/authenticate`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, state }),
  }).then((res) => res.json());
  return createToken;
}

const Auth = () => {
  const navgiate = useNavigate();
  useEffect(() => {
    const localToken = localStorage.getItem("SITE_TOKEN");
    if (localToken) {
      navgiate("/");
    }

    if (
      (!localToken || localToken == null) &&
      window.location.href.startsWith(`${site.frontend.origin}/auth/twitch`)
    ) {
      let code;
      let state;

      const searchParams = new URLSearchParams(window.location.href);
      for (const [key, value] of searchParams) {
        if (key.endsWith("code")) {
          code = value;
        }
        if (key.endsWith("state")) {
          state = value;
        }
      }

      generateToken(code, state).then((res) => {
        if (res?.success) {
          localStorage.setItem("SITE_TOKEN", res.token);
          const currentPath = JSON.parse(localStorage.getItem("CURRENT_STATE"));
          navgiate(currentPath.returnTo);
        }

        if (!res?.success) {
          navgiate("/");
        }
      });
    }
  }, []);

  return (
    <LoggingIn>
      <h1>Logging in...</h1>
      <img src={ppCircle} alt="Loading..." />
    </LoggingIn>
  );
};

const LoggingIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: fangsong;
  }
`;

export default Auth;
