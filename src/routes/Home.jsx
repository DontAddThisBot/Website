import React from "react";
import styled from "styled-components";
import happE from "../img/happE.avif";
import StvM from "../img/7tvM.avif";
import StvMAnimated from "../img/7tvM-Animated.gif";
import Poro from "../img/Poro.avif";
import PoroAnimated from "../img/Poro-Animated.gif";

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
      </TopHeaders>
      <MiddleHeaders>
        <img src={happE} alt="happE" className="bot-pfp" />
        <div className="bot-name">What can this bot do?</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          deserunt consequatur itaque, aliquam autem accusamus labore, eos rem
          nesciunt perferendis, vel voluptas. Consequuntur amet doloremque
          laborum. Quia provident impedit accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          minus dolore numquam possimus ab, voluptate recusandae, praesentium
          excepturi sed quisquam asperiores vel voluptatum aliquid, totam
          blanditiis distinctio eveniet. Ducimus, odio?
        </p>
      </MiddleHeaders>
      <MiddleHeaders>
        <img src={StvM} alt="YEAHBUT7TV" className="bot-pfp-2" />
        <div className="bot-name">7TV Commands?</div>
        <p>After granting DontAddThisBot as 7TV editor</p>
        <p>
          <code>!7tv</code> - Shows the 7TV emotes you have access to
        </p>
      </MiddleHeaders>
      <MiddleHeaders>
        <img src={Poro} alt="Poro" className="bot-pfp-3" />
        <div className="bot-name">Poro Commands?</div>
        <p>After granting DontAddThisBot as 7TV editor</p>
        <p>
          <code>!7tv</code> - Shows the 7TV emotes you have access to
        </p>
      </MiddleHeaders>
      {/* <BottomHeaders>
        
      </BottomHeaders> */}
    </Wrapper>
  );
};

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

    &.bot-pfp-2 {
      box-shadow: 0 0 20px #29d9f7;
      transition: 0s content;
      &:hover {
        content: url(${StvMAnimated});
        transition-delay: 0.5s;
      }
    }

    &.bot-pfp-3 {
      box-shadow: 0 0 20px white;
      transition: 0s content;
      &:hover {
        content: url(${PoroAnimated});
        transition-delay: 0.5s;
      }
    }
  }
`;

const BottomHeaders = styled.div`
  color: #c7c7c7;
  width: 100%;
  padding: 8px;
  box-shadow: -3px 3px 10px #ffffff12;
  margin-top: 40px;
  margin-bottom: 48px;
  background-color: #261c32;
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: 250px;
`;

export default Home;
