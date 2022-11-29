import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./routes/Home";
import Unknown from "./routes/Unknown";
import Navbar from "./components/Navbar";
import Commands from "./routes/Commands";
import Leaderboard from "./routes/Leaderboard";
import Dashboard from "./routes/Dashboard";
import Code from "./routes/Code";
import Authorize from "./routes/Authenticate";
import styled from "styled-components";
import img from "./img/backgroundshapes.png";
import { create as createUser } from "./js/api/bot";
import { isLogged } from "./js/api/isLogged";
import { isChannelBot } from "./js/api/isChannelBot";
import { getUserLevel } from "./js/api/getUserLevel";
import { Logout } from "./js/api/Logout";
import { Context } from "./Context";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const localeStorageToken = localStorage.getItem("SITE_TOKEN");
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [isBotIn, setIsBotIn] = useState([]);
  const [userLevel, setUserLevel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  function HelmetPath() {
    if (pathname === "/") {
      return "Home";
    } else if (pathname === "/leaderboard") {
      return "Leaderboard";
    } else if (/^\/dashboard\/.*/i.test(pathname)) {
      const path = pathname.split("/");
      return path[2];
    } else if (pathname === "/code") {
      return "Code";
    } else {
      return "Unknown";
    }
  }

  useEffect(() => {
    if (localeStorageToken) {
      isLogged().then((loginFlow) => {
        setIsLoggedIn(loginFlow);
        const { success, id } = loginFlow;
        if (success) {
          isChannelBot(id?.data[0].login).then((channelInfo) =>
            setIsBotIn(channelInfo)
          );
          getUserLevel(id?.data[0].login).then((userLevel) => {
            const { success, level } = userLevel;
            if (level === 0) {
              setIsLoggedIn([]);
              Logout();
            }

            if (success) {
              setUserLevel(userLevel);
              setIsLoading(true);
            } else {
              createUser().then(() =>
                getUserLevel(id?.data[0].login).then((userLevel) => {
                  setUserLevel(userLevel);
                  setIsLoading(true);
                })
              );
            }
          });
        } else {
          setIsLoading(true);
        }
      });
    } else {
      setIsLoading(true);
    }
  }, [localeStorageToken]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{HelmetPath()} - DontAddThisBot</title>
      </Helmet>
      <AppContainer>
        {/* <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
        </div> */}
        <Context.Provider
          value={{
            isLoggedIn,
            isBotIn,
            isLoading,
            setIsBotIn,
            setIsLoggedIn,
            setUserLevel,
            userLevel,
            Navbar,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/dashboard" element={<Dashboard test={isLoggedIn} />}>
              <Route path="/dashboard/:id" element={<Dashboard />} />
            </Route>
            <Route path="/commands" element={<Commands />} />
            <Route path="/code" element={<Code />} />
            <Route path="/auth/twitch/*" element={<Authorize />} />
            <Route path="*" element={<Unknown />} />
          </Routes>
        </Context.Provider>
      </AppContainer>
    </HelmetProvider>
  );
}

const AppContainer = styled.div`
  color: white;
  min-height: 100vh;
  background-color: rgb(29 25 56);
  background-image: url(${img});

  body {
    color: white;
    min-height: 100vh;
    background-color: #1d1f1d;
  }

  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Arial;
    text-shadow: 0 0 1px #000;
  }

  @-webkit-keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @-webkit-keyframes snowflakes-shake {
    0% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
    50% {
      -webkit-transform: translateX(80px);
      transform: translateX(80px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
  }
  .snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
  }
  .snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, 0.5s;
    animation-delay: 6s, 0.5s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s;
  }
`;

export default App;
