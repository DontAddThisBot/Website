import { Redirect } from '../../js/api/redirect';
import { loadAllImages } from '../../js/utility/loadAllImages';

import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from '../../Context';
import Footer from '../../components/Footer/Footer';

import happE from '../../img/happE.avif';
import StvM from '../../img/7tvM.avif';
import StvMAnimated from '../../img/7tvM-Animated.gif';
import Poro from '../../img/Poro.avif';
import PoroAnimated from '../../img/Poro-Animated.gif';
import Stats from '../../img/Stats.avif';
import StatsAnimated from '../../img/Stats-Animated.gif';
import peepoChat from '../../img/peepoChat.avif';
import peepooChatAnimated from '../../img/peepoChat-Animated.gif';
import Gradient from '../../img/Gradient.png';
import Tutorial from '../../img/Tutorial.avif';
import Tutorial2 from '../../img/Tutorial2.avif';

import { AmazonAds } from './components/AmazonAds';
import { BottomImageHeaders } from './components/BottomImageHeaders';
import { BottomImageSliderButtons } from './components/BottomImageSliderButtons';
import { BottomTextHeaders } from './components/BottomTextHeaders';
import { BottomWrapper } from './components/BottomWrapper';
import { RowWrapper } from './components/RowWrapper';
import { RowWrapperTwo } from './components/RowWrapperTwo';
import { StreamerBox } from './components/StreamerBox';
import { StreamerText } from './components/StreamerText';
import { TopHeaders } from './components/TopHeaders';
import { TopMainHeader } from './components/TopMainHeader';

import HandleFlow from './functions/IsApiLoaded';
import FrontPageInfo from './functions/FrontPageInfo';
import BotRoles from './functions/BotRoles';
import BotSlider from './functions/BotSlider';
import SlideStreamer from './functions/SlideStreamer';

import useTimer from './hooks/useTimer';
import useHandleScroller from './hooks/useHandleScroller';
import useFrontPage from './hooks/useFrontPage';
import useStreamer from './hooks/useStreamer';

export default function Home() {
	const { isLoggedIn: loginFlow, isBotIn, isLoading, setIsBotIn: setBotState } = useContext(Context);
	const { totalStreamers, totalMods, totalChannelCount, totalRoles } = useFrontPage(loginFlow, setBotState);

	useHandleScroller();
	const [button, setButton] = useStreamer({ totalStreamers });
	const [count, setCount] = useTimer({ ms: 3000, totalStreamers, setButton });

	return (
		<Wrapper>
			<TopHeaders>
				{loadAllImages(Poro, PoroAnimated, StvM, StvMAnimated, happE, Stats, StatsAnimated, peepoChat, peepooChatAnimated, Gradient, Tutorial, Tutorial2)}
				<TopMainHeader>
					Variety
					<br />
					<span className="multi">Multi-</span>Channel
					<br />
					Fun <span className="utility">Utility</span> chat bot
				</TopMainHeader>
				<div className="div-button">
					<HandleFlow isLoading={isLoading} loginFlow={loginFlow} channelBot={isBotIn} setBotState={setBotState} />
				</div>
				<FrontPageInfo totalChannelCount={totalChannelCount} />
			</TopHeaders>
			<AmazonAds>
				<iframe
					src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=22&l=ur1&category=primediscounted&banner=07J0Y188XW9Z5B3A9782&f=ifr&linkID=510e04bf751b18e84dbb88f3af063d49&t=poros0f-20&tracking_id=poros0f-20"
					width="250"
					height="250"
					title="Amazon Ads"
					sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
				></iframe>
			</AmazonAds>
			<MiddleHeaders>
				<Redirect to="/code">
					<img src={happE} alt="happE" className="bot-pfp" />
				</Redirect>
				<div className="bot-name">What can this bot do?</div>
				<p>DontAddThisBot is a multi-channel variety and utility moderation/fun chat-bot.</p>
				<p>Simply login with Twitch and add the bot to your channel to get started! The bot has a lot of utility, and variety of commands.</p>
				<p>The bot is currently in development, and is being updated frequently.</p>
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
					<p>Simply type |poro to get started, You can also check out the Poro leaderboard!</p>
				</MiddleHeaders>
			</RowWrapper>
			<RowWrapperTwo id="bottom-wrapper">
				<MiddleHeaders className="utility">
					<img src={peepoChat} alt="utility" className="bot-pfp utility" />
					<div className="bot-name">Utility Commands</div>
					<p>A lot of utility commandsㅤㅤㅤㅤ</p>
					<p>Check utility commands of user's information in chats!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
				</MiddleHeaders>
				<MiddleHeaders className="stats">
					<img src={Stats} alt="stats" className="bot-pfp stats" />
					<div className="bot-name">Statistics</div>
					<p>Tracking Statistics</p>
					<p>DontAddThisBot's purpose is to track statistics so users are aware of their activity!</p>
				</MiddleHeaders>
			</RowWrapperTwo>
			<BottomWrapper>
				<BottomTextHeaders>
					<div className="bot-started-information">How do I use it in chat?</div>
					<span />
				</BottomTextHeaders>
				<BottomImageHeaders>
					<div className="images">
						<img src={Tutorial} alt="information" className="bot-pfp stv" />
					</div>
				</BottomImageHeaders>
			</BottomWrapper>
			<StreamerText>
				<BotRoles totalRoles={totalRoles} totalMods={totalMods} />
			</StreamerText>
			<StreamerBox>
				<SlideStreamer position="left" totalStreamers={totalStreamers} setButton={setButton} setCount={setCount} />
				<BotSlider totalStreamers={totalStreamers} />
				<SlideStreamer position="right" totalStreamers={totalStreamers} setButton={setButton} setCount={setCount} />
			</StreamerBox>
			<BottomImageSliderButtons>
				{totalStreamers.map((streamer, key) => (
					<button
						className={streamer.name}
						key={key}
						onClick={() => {
							setButton(streamer.name);
							setCount(0);
						}}
					></button>
				))}
			</BottomImageSliderButtons>
			<Footer />
		</Wrapper>
	);
}

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
