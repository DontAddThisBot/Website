import { fetchStreamers } from "../js/fetchStreamers";
import { join as joinChannel, part as partChannel } from "../js/bot";
import { redirect } from "../js/redirect";
import { isChannelBot } from "../js/isChannelBot";
import { totalChannels } from "../js/totalChannels";
import { disableJoin, disablePart } from "../js/join.part.js";
import { loadAllImages } from "../js/loadAllImages";
import { handleScroll } from "../js/handleScroll";
import { disableLoading } from "../js/disableLoading";
import { transition } from "../js/transition";

import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import site from "../config.json";

import happE from "../img/happE.avif";
import StvM from "../img/7tvM.avif";
import StvMAnimated from "../img/7tvM-Animated.gif";
import Poro from "../img/Poro.avif";
import PoroAnimated from "../img/Poro-Animated.gif";
import Stats from "../img/Stats.avif";
import StatsAnimated from "../img/Stats-Animated.gif";
import peepoChat from "../img/peepoChat.avif";
import peepooChatAnimated from "../img/peepoChat-Animated.gif";
import Gradient from "../img/Gradient.png";
import Tutorial from "../img/Tutorial.avif";
import Tutorial2 from "../img/Tutorial2.avif";

let pfp = document.getElementsByClassName("streamer-pfp");
let username = document.getElementsByClassName("streamer-username");
let statusa = document.getElementsByClassName("streamer-status");
let followers = document.getElementsByClassName("streamer-followers");

export default function Home({ loginFlow, isBotIn, isLoading, setBotState }) {
  useEffect(() => {
    const topWrapper = document.getElementById("top-wrapper");
    const bottomWrapper = document.getElementById("bottom-wrapper");
    window.addEventListener("scroll", handleScroll);
    topWrapper.style.opacity = "0";
    bottomWrapper.style.opacity = "0";
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { success, id } = loginFlow;
  const { success: isChannelSuccess, isChannel } = isBotIn;

  const [totalSteamers, setTotalStreamers] = useState([]);
  const [count, setCount] = useState(0);
  const [button, setButton] = useState([]);

  const [totalChannelCount, setTotalChannelCount] = useState([]);

  useEffect(() => {
    totalChannels().then((res) => setTotalChannelCount(res));
    fetchStreamers().then((streamers) => setTotalStreamers(streamers));
    const userID = id?.data[0].login;
    if (success) {
      if (userID) {
        isChannelBot(userID).then((res) => {
          setBotState(res);
        });
      }
    }
  }, []);

  const JoinButton = () => {
    return (
      <button
        className="join-button"
        onClick={() => {
          disableJoin();
          joinChannel().then(() => {
            isChannelBot(id?.data[0].login).then((res) => {
              disableLoading();
              setBotState(res);
            });
          });
        }}
      >
        <Span>Add Bot</Span>
      </button>
    );
  };

  const PartButton = () => {
    return (
      <button
        className="part-button"
        onClick={() => {
          disablePart();
          partChannel().then(() => {
            isChannelBot(id?.data[0].login).then((res) => {
              disableLoading();
              setBotState(res);
            });
          });
        }}
      >
        <Span>Part Bot</Span>
      </button>
    );
  };

  const IsApiLoaded = () => {
    if (!isLoading) {
      return <div className="loading">Loading...</div>;
    } else {
      return IsInChannel();
    }
  };

  const IsInChannel = () => {
    if (!success) {
      return (
        <a href={`${site.frontend.origin}/auth/twitch`}>
          <button className="login-button">
            <Span>Login with Twitch</Span>
          </button>
        </a>
      );
    }

    if (success && isChannelSuccess) {
      if (!isChannel) {
        return <JoinButton />;
      } else {
        return <PartButton />;
      }
    } else if (success && !isChannelSuccess) {
      return <JoinButton />;
    }
  };

  // useEffect(() => {
  //   let Timer = setInterval(() => {
  //     setCount((count) => count + 1);
  //     if (count === 5) {
  //       reset();
  //       function reset() {
  //         setCount(0);
  //         LeftLoad();
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(Timer);
  // }, [count]);

  const changeStreamer = (name) => {
    totalSteamers.forEach((streamer) => {
      if (streamer.name === name) {
        const {
          name,
          status,
          pfp: profile_pic,
          followers: follower_count,
        } = streamer;

        setButton(name);
        ChangeButtonDependingOnStreamer(name);
        username[0].innerHTML = name;
        statusa[0].innerHTML = status;
        pfp[0].src = profile_pic;
        followers[0].innerHTML = follower_count;
      }
    });
  };

  function ChangeButtonDependingOnStreamer(streamerName) {
    const streamer = document.getElementsByClassName(streamerName);
    streamer[0].style.backgroundColor = "#fff"; // white
    const newSteamer = document.getElementsByClassName(button);
    if (newSteamer[0]) {
      return (newSteamer[0].style.backgroundColor = "#1e1e1e"); // black
    }
  }

  function ButtonClickLoad(streamer) {
    changeStreamer(streamer);
    transition("-", pfp, username, statusa, followers);
  }

  const LeftLoad = () => {
    const index = totalSteamers.findIndex(
      (streamer) => streamer.name === username[0].innerHTML
    );
    if (index === 0) {
      changeStreamer(totalSteamers[totalSteamers.length - 1].name);
    } else {
      changeStreamer(totalSteamers[index - 1].name);
    }
    transition("", pfp, username, statusa, followers);
  };

  function RightLoad() {
    const index = totalSteamers.findIndex(
      (streamer) => streamer.name === username[0].innerHTML
    );
    if (index === totalSteamers.length - 1) {
      changeStreamer(totalSteamers[0].name);
    } else {
      changeStreamer(totalSteamers[index + 1].name);
    }
    transition("-", pfp, username, statusa, followers);
  }

  return (
    <Wrapper>
      <TopHeaders>
        {loadAllImages(
          Poro,
          PoroAnimated,
          StvM,
          StvMAnimated,
          happE,
          Stats,
          StatsAnimated,
          peepoChat,
          peepooChatAnimated,
          Gradient,
          Tutorial,
          Tutorial2
        )}
        <div>
          Variety
          <br />
          Multi-Channel
          <br />
          Fun utility chat bot
        </div>
        <div className="div-button">
          <IsApiLoaded />
        </div>
        <div className="channel-count">
          Currently in {totalChannelCount.channelCount} Channels
          <p className="bot-info">
            Total {totalChannelCount.totalPoros} Poros farmed
          </p>
          <p className="bot-info">
            Total {totalChannelCount.executedCommands} commands execued
          </p>
          <p className="bot-info">
            Total {totalChannelCount.seenUsers} users seen
          </p>
          <p className="bot-info since">Since 2022-04-24</p>
        </div>
      </TopHeaders>
      <MiddleHeaders>
        <img src={happE} alt="happE" className="bot-pfp" onClick={redirect} />
        <div className="bot-name">What can this bot do?</div>
        <p>
          DontAddThisBot is a multi-channel variety and utility moderation/fun
          chat-bot.
        </p>
        <p>
          Simply login with Twitch and add the bot to your channel to get
          stared! The bot has alot of utility, and variety of commands.
        </p>
        <p>
          The bot is currently in development, and is being updated frequently.
        </p>
      </MiddleHeaders>
      <RowWrapper id="top-wrapper">
        <MiddleHeaders className="stv">
          <img src={StvM} alt="YEAHBUT7TV" className="bot-pfp stv" />
          <div className="bot-name">7TV Commands?</div>
          <p>After granting DontAddThisBot as 7TV editor</p>
          <p>Add, Remove, Alias emotes through Twitch chat!</p>
        </MiddleHeaders>
        <MiddleHeaders className="poro">
          <img src={Poro} alt="Poro" className="bot-pfp poro" />
          <div className="bot-name">Poro Commands?</div>
          <p>Virtual currency in Twitch Chat</p>
          <p>
            Simply type |poro to get started, You can also checkout the Poro
            leaderboard!
          </p>
        </MiddleHeaders>
      </RowWrapper>
      <RowWrapper2 id="bottom-wrapper">
        <MiddleHeaders className="utility">
          <img src={peepoChat} alt="utility" className="bot-pfp utility" />
          <div className="bot-name">Utility Commands</div>
          <p>Alot of utility commandsㅤㅤㅤㅤ</p>
          <p>
            Check utility commands of user's information in
            chats!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
          </p>
        </MiddleHeaders>
        <MiddleHeaders className="stats">
          <img src={Stats} alt="stats" className="bot-pfp stats" />
          <div className="bot-name">Statistics</div>
          <p>Tracking Statistics</p>
          <p>
            DontAddThisBot's purpose is to track statistics so users are aware
            of their activity!
          </p>
        </MiddleHeaders>
      </RowWrapper2>
      <BottomWrapper>
        <BottomTextHeaders>
          <div className="bot-started-information">
            How do I use it in chat?
          </div>
          <span />
        </BottomTextHeaders>
        <BottomImageHeaders>
          <div className="images">
            <img src={Tutorial} alt="information" className="bot-pfp stv" />
          </div>
        </BottomImageHeaders>
      </BottomWrapper>
      <StreamerText>
        <div className="streamer-bot-info">Who is using DontAddThisBot?</div>
        <p>
          These are the top streamers using the bot! DontAddThisBot is trusted
          by these streamers!
        </p>
      </StreamerText>
      <StreamerBox>
        <button
          className="streamer-button left"
          onClick={() => {
            LeftLoad();
            setCount(0);
          }}
        >
          <span>&#60;</span>
        </button>
        {totalSteamers
          .map((streamer, key) => streamer)
          .slice(0, 1)
          .map((streamer, key) => (
            <div className="streamer-information" key={key}>
              <img
                src={streamer.pfp}
                alt="information"
                className="streamer-pfp"
              />
              <div className="streamer-information-text">
                <p className="streamer-username">{streamer.name}</p>
                <p className="streamer-status">{streamer.status}</p>
                <p className="streamer-followers">{streamer.followers}</p>
              </div>
            </div>
          ))}
        <button
          className="streamer-button right"
          onClick={() => {
            RightLoad();
            setCount(0);
          }}
        >
          <span>&#62;</span>
        </button>
      </StreamerBox>
      <BottomImageSliderButtons>
        {totalSteamers.map((streamer, key) => (
          <button
            className={streamer.name}
            key={key}
            onClick={() => {
              ButtonClickLoad(streamer.name);
              setCount(0);
            }}
          ></button>
        ))}
      </BottomImageSliderButtons>
    </Wrapper>
  );
}

const BottomImageSliderButtons = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  width: 100%;
  z-index: 1;

  button {
    background-color: #1e1e1e;
    border: 2px solid #fff;
    cursor: pointer;
    height: 15px;
    margin: 0 5px;
    outline: none;
    width: 10px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
  }
`;

const StreamerText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;

  p {
    margin: 0 auto;
    color: grey;
  }

  .streamer-bot-info {
    font-size: 50px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const StreamerBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  cursor: pointer;
  border: 2px solid grey;
  background-color: transparent;
  animation: slide 1s ease-in-out;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;
    outline: none;
    border-radius: 50%;
    border: 2px solid grey;
    width: 50px;
    height: 50px;

    &:hover {
      border-radius: 50%;
      color: #000000;
      background-color: lightgrey;
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:active {
      border-radius: 50%;
      color: #000000;
      background-color: transparent;
      transform: scale(0.7);
    }

    span {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      span {
        font-size: 1.3rem;
      }

      &.right {
        margin-top: 15px;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 10px;
    box-shadow: 0 0 10px 0 lightgrey;
    margin-right: 4rem;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      margin-top: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  .streamer-information {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    width: 400px;
    max-width: 90%;
    transition: 0.3s;

    .streamer-information-text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .streamer-username {
      font-size: 200%;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }

    .streamer-status {
      font-size: 150%;
      font-weight: 600;
      margin-top: -3%;
      color: #9146ff;
    }

    .streamer-followers {
      font-size: 150%;
      font-weight: 600;
      color: grey;
      margin-top: -2%;
      margin-bottom: 5px;
    }

    @media (max-width: 768px) {
      flex-direction: column;

      .streamer-username {
        margin-top: 0.3rem;
      }

      .streamer-status {
        margin-bottom: 0.3rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const BottomWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Gradient});
  background-size: cover;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    margin-top: 2rem;
  }
`;

const BottomTextHeaders = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
  p {
    font-size: 1.5rem;
    font-weight: 200;
    margin-top: 1rem;
    color: lightgrey;
  }

  span {
    background-color: white;
    display: inline-block;
    width: 200px;
    height: 1px;
  }

  .bot-started-information {
    font-size: 50px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const BottomImageHeaders = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: 50%;
  max-height: 50%;
  background-color: #1a1a1a;
  margin-bottom: 3%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 80%;
    max-height: 80%;
    margin-bottom: 4rem;
    background-color: transparent;
    box-shadow: none;
    border: none;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      content: url(${Tutorial2});
      box-shadow: 0 0 10px 0 white;
    }
  }
`;

const RowWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .stv,
  .poro {
    margin-right: 2rem;
    margin-left: 2rem;
    transition: all 0.2s ease-in-out;
    .bot-pfp {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 85px;
      &.stv {
        box-shadow: 0 0 20px #29d9f7;
      }
      &.poro {
        box-shadow: 0 0 20px white;
      }
    }
    :hover {
      transform: scale(1.1);
    }
    &.stv:hover {
      box-shadow: 0 0 20px #29d9f7;
      img.stv {
        content: url(${StvMAnimated});
      }
    }
    &.poro:hover {
      box-shadow: 0 0 20px white;
      img.poro {
        content: url(${PoroAnimated});
      }
    }
    @media (max-width: 768px) {
      width: 60%;
    }
  }
`;

const RowWrapper2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .utility,
  .stats {
    margin-right: 2rem;
    margin-left: 2rem;
    transition: all 0.2s ease-in-out;
    .bot-pfp {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 85px;
      &.utility {
        box-shadow: 0 0 20px #9bd02a;
      }
      &.stats {
        box-shadow: 0 0 20px #74f593;
      }
    }
    :hover {
      transform: scale(1.1);
    }
    &.utility:hover {
      box-shadow: 0 0 20px #9bd02a;
      img.utility {
        content: url(${peepooChatAnimated});
      }
    }
    &.stats:hover {
      box-shadow: 0 0 20px #74f593;
      img.stats {
        content: url(${StatsAnimated});
      }
    }

    @media (max-width: 768px) {
      width: 60%;
    }
  }
`;

const Wrapper = styled.section`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div.bot-name {
    font-size: 50px;
  }
`;

const TopHeaders = styled.section`
  display: flex;
  font-size: 3rem;
  margin-top: 3rem;
  text-align: center;
  allign-items: center;
  font-weight: bold;
  line-height: 60px;
  flex-direction: column;
  justify-content: center;

  div.div-button {
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  div.channel-count {
    font-size: 2rem;
    p.bot-info {
      font-size: 1rem;
      color: grey;
      line-height: 10px;
    }
    p.since {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
  }

  button.join-button {
    color: white;
    background-color: transparent;
    border: 1px solid #30c759;

    :hover {
      background-color: #30c759;
      border: 1px solid #30c759;
    }
  }

  button.part-button {
    color: white;
    background-color: transparent;
    border: 1px solid #d1243e;

    :hover {
      background-color: #d1243e;
      border: 1px solid #d1243e;
    }
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 15px 35px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #9146ff;
    border-radius: 5px;
    background-color: #9146ff;
    transition: 0.3s;

    &:hover {
      background-color: transparent;
      border: 1.5px solid #9146ff;
      transform: scale(1.1);
    }
  }
`;

const Span = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  font-weight: bold;
`;

const MiddleHeaders = styled.section`
  color: #c7c7c7;
  width: 60%;
  padding: 24px;
  max-width: 800px;
  box-shadow: -3px 3px 10px #ffffff12;
  margin-top: 40px;
  margin-bottom: 48px;
  background-color: #1f1f1f;
  border-radius: 15px;

  animation-name: slideFromLeft;
  animation-duration: 1s;

  @keyframes slideFromLeft {
    0% {
      transform: translateY(-2%);
    }
    100% {
      transform: translateX(0%);
    }
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  div.bot-name {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  img {
    width: 85px;
    border: 8px solid #1f1f1f;
    box-shadow: -3px 3px 10px #ffffff12;
    margin-top: -80px;
    margin-left: -20px;
    border-radius: 50%;
    background-color: #1f1f1f;
    box-shadow: 0 0 20px #9146ff;
  }
`;
