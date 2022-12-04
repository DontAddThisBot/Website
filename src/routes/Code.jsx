import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { humanizeDuration } from "../js/utility/humanizeDuration";
import styled from "styled-components";
import Loading from "../img/Loading.gif";
import poroDespair from "../img/poroDespair.avif";
import { disableJoin } from "../js/utility/join.part";
import { isChannelBot } from "../js/api/isChannelBot";
import { join as joinChannel } from "../js/api/bot";
import { moderatorJoin } from "../js/api/modAddBot";

const Code = () => {
  const {
    isLoggedIn: isUserLoggedIn,
    isLoading,
    isBotIn,
    setIsBotIn,
  } = useContext(Context);

  const { success, id } = isUserLoggedIn;
  const [poroData, setPoro] = useState([]);
  const [todayCode, setTodayCode] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);
  const [didPoroLoad, setDidPoroLoad] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  useEffect(() => {
    if (success) {
      import("../js/api/getPoroInfo").then(({ poroInfo }) => {
        const { login } = id.data[0];
        poroInfo(login).then((res) => {
          if (res.success) {
            setPoro(res);
            if (res.cooldowns?.poroRedeem.isAvailable === false) {
              const timeLeft =
                new Date(res.cooldowns?.poroRedeem.lastUsage).getTime() -
                new Date().getTime() +
                1000 * 60 * 60 * 24;
              setRemainingTime(timeLeft);
            }
          } else {
            setPoro(res);
          }
          setDidPoroLoad(true);
        });
        import("../js/api/totalChannels").then(({ totalChannels }) => {
          totalChannels().then(({ todaysCode }) => setTodayCode(todaysCode));
        });
      });
    }
  }, [success]);

  const Available = () => {
    return (
      <>
        <h1 className="daily-redeem">your daily redeem</h1>
        <h2>is ready!</h2>
      </>
    );
  };

  function IsCooldown() {
    const { cooldowns, success: poroSuccess } = poroData;
    if (poroSuccess) {
      if (cooldowns?.poroRedeem.isAvailable === false) {
        if (remainingTime <= 0) {
          return <Available />;
        } else {
          return (
            <>
              <h1>your daily redeem</h1>
              <h2>is available in</h2>
              <h1>{humanizeDuration(remainingTime)}</h1>
            </>
          );
        }
      } else {
        return <Available />;
      }
    } else {
      return (
        <>
          <h1>You are not registered!</h1>
          <h2>Type |poro in a chat to get started!</h2>
        </>
      );
    }
  }

  function DidBotJoin() {
    if (!isBotIn?.isChannel) {
      return (
        <>
          <div className="top-info-code-3">
            <h1>Adding the bot on Twitch</h1>
            <h2>will give you free 100 poros!</h2>
          </div>
          <div className="add-bot-button">
            <button
              className="join-button"
              onClick={() => {
                disableJoin();
                joinChannel().then(() => {
                  isChannelBot(id?.data[0].login).then((res) => {
                    setIsBotIn(res);
                  });
                });
              }}>
              Add bot
            </button>
          </div>
        </>
      );
    }
  }

  const CodePage = () => {
    if (!isLoading && !didPoroLoad) {
      return (
        <div className="loading">
          <img src={Loading} alt="loading" />
        </div>
      );
    } else {
      if (!success) {
        return (
          <div className="un-authorized">
            <h1>Unauthorized</h1>
            <img src={poroDespair} alt="poroDespair" className="poro" />
            <h2>Please Login</h2>
          </div>
        );
      } else {
        return (
          <>
            <div className="top-info">
              <div className="top-info-code">
                <h1>Todays Hint</h1>
                <h2>{todayCode}</h2>
              </div>
              <div className="top-info-code-2">
                <IsCooldown />
              </div>
            </div>
            <DidBotJoin />
          </>
        );
      }
    }
  };

  const handleSubmit = (e) => {
    function controlSubmit(Boolean) {
      e.target[0].disabled = Boolean;
      Boolean
        ? (e.target[0].placeholder = "Loading...")
        : (e.target[0].placeholder = "Channel Name");
      e.target[1].disabled = Boolean;
    }

    function appeandH2(text, ms) {
      const h2 = document.createElement("h2");
      h2.innerText = `${text}`;
      e.target.appendChild(h2);
      setTimeout(() => {
        h2.remove();
      }, ms);
    }

    e.preventDefault();
    controlSubmit(true);
    const channel = e.target[0].value;
    if (!channel) {
      return;
    }

    moderatorJoin(channel).then((res) => {
      console.log(res);
      controlSubmit(false);
      if (res.success) {
        appeandH2("Success!", 5000);
      } else {
        appeandH2(res.message, 5000);
      }
    });
  };

  return (
    <OuterWrapper>
      <MakeABox>
        <CodePage />
        <IsModerator>
          <h1>Moderator in a channel?</h1>
          <h2>
            You can now add this bot to any channel you Moderate! doing so will
            also reward you 30 poros!
          </h2>
          <form className="moderator-bot" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Channel Name"
              className="moderator-bot-input"
            />
            <button type="submit" className="moderator-bot-button">
              Add bot
            </button>
          </form>
        </IsModerator>
      </MakeABox>
    </OuterWrapper>
  );
};

const IsModerator = styled.div`
  color: grey;
  text-align: center;
  line-height: 0.8;

  .moderator-bot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    .moderator-bot-input {
      width: 50%;
      padding: 0.5rem;
      border: 1px solid grey;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .moderator-bot-button {
      padding: 0.5rem;
      border: 1px solid grey;
      border-radius: 0.5rem;
      background-color: #1e1e1e;
      color: white;
      cursor: pointer;
    }
  }

  h2 {
    font-size: 1.2rem;
  }
`;

const MakeABox = styled.div`
  background-color: rgba(29, 31, 29, 0.5);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: break-word;
  box-shadow: 0 0 10px 0 rgba(145, 70, 255, 1);

  animation-name: slideFromLeft;
  animation-duration: 0.5s;

  @keyframes slideFromLeft {
    0% {
      transform: translateX(-2%);
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

  .top-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 10px;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .top-info-code {
    align-self: self-start;
    overflow-wrap: anywhere;
    float: right;

    h1 {
      font-size: 30px;
      text-align: -webkit-left;
      text-transform: uppercase;
    }

    h2 {
      text-align: -webkit-left;
      text-transform: uppercase;
    }
  }

  .top-info-code-2 {
    align-self: self-start;
    overflow-wrap: anywhere;
    float: right;
    color: grey;

    h1.daily-redeem {
      font-size: 30px;
      text-transform: uppercase;
      overflow-wrap: anywhere;
      contain: style;
    }

    h1 {
      font-size: 30px;
      text-align: -webkit-right;
      text-transform: uppercase;
    }

    h2 {
      text-align: -webkit-right;
      text-transform: uppercase;
    }
  }

  .top-info-code-3 {
    text-align: center;
  }

  div.add-bot-button {
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .add-bot-button {
    button.join-button {
      color: white;
      background-color: transparent;
      border: 1px solid #30c759;

      :hover {
        background-color: #30c759;
        border: 1px solid #30c759;
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
  }

  @media (max-width: 768px) {
    width: 90%;
    gap: 1%;
    .top-info-code {
      align-self: stretch;
      align-items: center;
      font-size: 10px;
      line-height: 1;

      h1,
      h2 {
        text-align: center;
        align-items: center;
      }
    }

    .top-info-code-2 {
      align-self: stretch;
      align-items: center;
      line-height: 1;

      h1,
      h2,
      h1.daily-redeem {
        font-size: 20px;
        text-align: center;
        align-items: center;
      }
    }

    .top-info-code-3 {
      margin-top: 0%;
    }
  }
`;

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;

  div.un-authorized {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Code;
