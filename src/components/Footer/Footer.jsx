import styled from 'styled-components';
import React from 'react';
import { infoText } from './functions/socialMedia';
import { socialMedias } from './functions/infoText';

const Footer = () => {
	return (
		<FooterThatFitsMobile>
			<div className="outer-footer">
				<div className="copyright">
					<span className="Bot-Name-1">
						DontAdd<span className="Bot-Name-2">ThisBot</span>
					</span>
					<p>© 2022 Kattah</p>
					<p>Not affiliated with Twitch, All Rights Reserved.</p>
				</div>
				<div className="information-footer">
					<p className="information-footer-text">Information</p>
					<div className="information-redirects">
						{infoText.map((text, key) => {
							return (
								<a href={text.href} key={key}>
									{text.name}
								</a>
							);
						})}
					</div>
				</div>
				<div className="social-media">
					<p className="social-media-text">Contact</p>
					<div className="social-media-redirects">
						{socialMedias.map((socialMedia, key) => {
							return (
								<a href={socialMedia.link} key={key} target="_blank" rel="noopener noreferrer">
									<img src={socialMedia.img} alt={socialMedia.name} className={`social-media-pfp ${socialMedia.name}`} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</FooterThatFitsMobile>
	);
};

const FooterThatFitsMobile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 5%;
	background-color: #1f1f1f;
	width: 100%;

	.outer-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		margin-bottom: 2%;
		margin-top: 2%;
		margin-right: 10%;
		width: 70%;
		gap: 25%;

		.copyright,
		.information-footer,
		.social-media {
			flex-direction: column;

			a {
				color: #a9a9a9;
			}

			p {
				font-size: 0.9rem;
				color: #a9a9a9;
				margin-top: 1%;
			}

			p.information-footer-text,
			p.social-media-text {
				font-size: 1.3rem;
				font-weight: 600;
				color: #f8f8f8;
			}

			.information-redirects,
			.social-media-redirects {
				display: flex;
				flex-direction: column;
				margin-top: 1%;

				a {
					font-size: 1rem;
					font-weight: 500;
					color: #a9a9a9;

					&:hover {
						transition: 0.3s;
						color: #f8f8f8;
						span {
							visibility: visible;
						}
					}
				}
			}

			.social-media-redirects {
				display: flex;
				flex-direction: row;
				gap: 20%;
				img {
					width: 1.5rem;
					height: 1.5rem;

					&:hover {
						transition: 0.5s;
						filter: brightness(0.5);
					}
				}

				.Github {
					width: 1.8rem;
					height: 1.8rem;
					margin-top: -0.2rem;
					margin-left: -0.2rem;
				}

				.Twitter {
					width: 1.6rem;
					height: 1.4rem;
				}
			}

			span {
				font-size: 1.3rem;
				font-weight: 600;
				&.Bot-Name-1 {
					color: #f8f8f8;
					margin-top: 100px;
				}
				&.Bot-Name-2 {
					color: #998fd2;
				}
			}
		}
	}

	@media (max-width: 768px) {
		margin-top: 13%;
		.outer-footer {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			margin-right: 0%;
			margin-top: -10%;
			margin-bottom: 10%;

			.copyright,
			.information-footer {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				text-align: center;
			}

			.copyright {
				margin-bottom: 5%;
			}

			.information-footer {
				margin-bottom: 15%;

				a {
					margin-top: 1%;
				}
			}

			p.social-media-text {
				display: flex;
				justify-content: center;
			}

			.social-media-redirects {
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
		}
	}
`;

export default Footer;
