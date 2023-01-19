import React from 'react';
import { returnLanguage, useLanguage, iso6391LanguageCodes } from '../hooks/useLanguage';
import site from '../../../../config.json';

const ChangeLanguage = () => {
	const [languageState, setLanguage] = useLanguage();

	async function ChangeLanguageFromAPI(language) {
		const { success, message } = await fetch(`${site.frontend.oldApi}/api/bot/language`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('SITE_TOKEN')}`,
			},
			body: JSON.stringify({
				language,
			}),
		}).then((res) => res.json());

		if (success) {
			const newLang = returnLanguage(language);
			setLanguage({ language: newLang[0], code: newLang[1] });
			localStorage.setItem('language', language);
		} else {
			alert(message);
		}
	}

	return (
		<div className="change-lanuage">
			<div className="language-text">
				Current Langauge
				<br />
				{languageState.language}
			</div>
			<div className="form-input">
				<label>Change Language</label>
				<select
					onChange={(event) => {
						ChangeLanguageFromAPI(event.target.value);
					}}
				>
					{Object.entries(iso6391LanguageCodes).map(([language], index) => {
						const { code } = languageState;
						return (
							<option key={index} value={iso6391LanguageCodes[language]} className={code === iso6391LanguageCodes[language] ? 'selected' : ''}>
								{language}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default ChangeLanguage;
