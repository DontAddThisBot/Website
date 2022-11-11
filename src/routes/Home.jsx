import React from "react";
import styled from "styled-components";
import happE from "../img/happE.avif";
import StvM from "../img/7tvM.avif";
import StvMAnimated from "../img/7tvM-Animated.gif";
import Poro from "../img/Poro.avif";
import PoroAnimated from "../img/Poro-Animated.gif";
import Stats from "../img/Stats.avif";
import StatsAnimated from "../img/Stats-Animated.gif";
import peepoChat from "../img/peepoChat.avif";
import peepooChatAnimated from "../img/peepoChat-Animated.gif";

function redirect() {
  const a = "/";
  const b = "c";
  const c = "o";
  const d = "d";
  const e = "e";
  window.location.href = `${a}${b}${c}${d}${e}`;
}

const loadAllImages = () => {
  const images = [
    StvMAnimated,
    PoroAnimated,
    StatsAnimated,
    peepooChatAnimated,
  ];

  const displayNone = {
    display: "none",
  };

  return (
    <div style={displayNone}>
      {images.map(
        (image, key) => <img src={image} alt={key} key={key} /> ?? null
      )}
    </div>
  );
};

const Home = () => {
  return (
    <Wrapper>
      <TopHeaders>
        {loadAllImages()}
        <div>
          Variety
          <br />
          Multi-Channel
          <br />
          Fun utility chat bot
        </div>
        <div className="div-button">
          <a href="/login">
            <button className="login-button">
              <Span>Login with Twitch</Span>
            </button>
          </a>
        </div>
        <div className="channel-count">Serving in 0000 Channels!</div>
      </TopHeaders>
      <br />
      <br />
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
      <RowWrapper>
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
      <RowWrapper2>
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
          <div className="bot-name">How do I use it in chat?</div>
          <p>Simply to get started with the bot, do the following!</p>
        </BottomTextHeaders>
        <BottomImageHeaders>
          <div className="images">
            <img
              src="https://i.imgur.com/gMDtQXj.gif"
              alt="information"
              className="bot-pfp stv"
            />
          </div>
        </BottomImageHeaders>
      </BottomWrapper>
      <StreamerInformationText>
        <div className="bot-name">Who is using the bot?</div>
        <p>
          These are the top streamers using the bot! DontAddThisBot is trusted
          by these streamers!
        </p>
      </StreamerInformationText>
      <StreamerInformationInABox>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/1eec6ff3-35dc-4928-b905-b2ee991c98e8-profile_image-600x600.png"
          alt="information"
        />
        <div className="streamer-information">
          <p className="streamer-username">LoreStorm</p>
          <p className="streamer-status">Partner</p>
          <p className="streamer-followers">1,000,000</p>
        </div>
      </StreamerInformationInABox>
      <Footer>
        <div className="footer-text">
          <p>
            DontAddThisBot is a multi-channel variety and utility moderation/fun
            chat-bot.
          </p>
          <p>
            Simply login with Twitch and add the bot to your channel to get
            stared! The bot has alot of utility, and variety of commands.
          </p>
          <p>
            The bot is currently in development, and is being updated
            frequently.
          </p>
        </div>
      </Footer>
    </Wrapper>
  );
};

const StreamerInformationText = styled.div`
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
`;

const StreamerInformationInABox = styled.div`
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

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 10px;
    margin-left: 7%;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      margin-left: 20px;
    }
  }

  .streamer-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    width: 300px;
    max-width: 90%;

    .streamer-username {
      font-size: 200%;
      font-weight: 600;
      margin-top: 10px;
    }

    .streamer-status {
      font-size: 150%;
      font-weight: 600;
      margin-top: -9%;
      color: #9146ff;
    }

    .streamer-followers {
      font-size: 150%;
      font-weight: 600;
      color: grey;
      margin-top: -2%;
      margin-bottom: 5px;
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
  background-color: #1a1a1a;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
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
    margin-top: 3rem;
    margin-bottom: 4rem;
    background-color: transparent;
    box-shadow: none;
    border: none;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      content: url("https://i.imgur.com/L3AWFhn.gif");
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
  }

  button.login-button {
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

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
  background-color: #1f1f1f;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 50%;
  }

  div {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  a {
    color: #9146ff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export default Home;
