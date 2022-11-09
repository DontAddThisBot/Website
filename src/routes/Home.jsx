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

const Home = () => {
  return (
    <Wrapper>
      <TopHeaders>
        <div>
          Variety
          <br />
          Multi-Channel
          <br />
          Fun utility chat bot
        </div>
        <DivButton>
          <a href="/login">
            <LoginButton>
              <Span>Login with Twitch</Span>
            </LoginButton>
          </a>
        </DivButton>
        <div className="channel-count">Serving in 0000 Channels!</div>
      </TopHeaders>
      <br />
      <br />
      <MiddleHeaders>
        <img src={happE} alt="happE" className="bot-pfp" />
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
      <BottomHeaders>
        <div>TEST TEST TEST</div>
      </BottomHeaders>
    </Wrapper>
  );
};

const RowWrapper = styled.div`
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

const RowWrapper2 = styled.div`
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

const Wrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div.bot-name {
    font-size: 50px;
  }
`;

const TopHeaders = styled.div`
  display: flex;
  font-size: 3rem;
  margin-top: 3rem;
  text-align: center;
  allign-items: center;
  font-weight: bold;
  line-height: 60px;
  flex-direction: column;
  justify-content: center;
  div.channel-count {
    font-size: 2rem;
  }
`;

const DivButton = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 15px 35px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #9146ff;
  border-radius: 5px;
  background-color: #9146ff;

  &:hover {
    background-color: transparent;
    border: 1.5px solid #9146ff;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const Span = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  font-weight: bold;
`;

const MiddleHeaders = styled.div`
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

const BottomHeaders = styled.div`
  color: #c7c7c7;
  width: 60%;
  padding: 24px;
  max-width: 800px;
  box-shadow: -3px 3px 10px #ffffff12;
  margin-top: 40px;
  margin-bottom: 48px;
  background-color: #1f1f1f;
  border-radius: 15px;
`;

export default Home;
