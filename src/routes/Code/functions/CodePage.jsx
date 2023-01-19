import React from 'react';
import Loading from '../../../img/Loading.gif';
import poroDespair from '../../../img/poroDespair.avif';
import { join as joinChannel } from '../../../js/api/bot';
import { disableJoin } from '../../../js/utility/join.part';
import { isChannelBot } from '../../../js/api/isChannelBot';
import Available from './Available';
import { humanizeDuration } from '../../../js/utility/humanizeDuration';

const CodePage = ({ isLoading, didPoroLoad, todayCode, isUserLoggedIn, isBotIn, setIsBotIn, poroData, remainingTime }) => {
	const { success, id } = isUserLoggedIn;

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
							}}
						>
							Add bot
						</button>
					</div>
				</>
			);
		}
	}

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

export default CodePage;
