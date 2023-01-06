import { useState } from 'react';

export let iso6391LanguageCodes = {
	Afrikaans: 'af',
	Albanian: 'sq',
	Amharic: 'am',
	Arabic: 'ar',
	Armenian: 'hy',
	Azerbaijani: 'az',
	Basque: 'eu',
	Belarusian: 'be',
	Bengali: 'bn',
	Bosnian: 'bs',
	Bulgarian: 'bg',
	Catalan: 'ca',
	Cebuano: 'ceb',
	Chinese: 'zh-CN',
	Taiwanese: 'zh-TW',
	Corsican: 'co',
	Croatian: 'hr',
	Czech: 'cs',
	Danish: 'da',
	Dutch: 'nl',
	English: 'en',
	Esperanto: 'eo',
	Estonian: 'et',
	Finnish: 'fi',
	French: 'fr',
	Frisian: 'fy',
	Galician: 'gl',
	Georgian: 'ka',
	German: 'de',
	Greek: 'el',
	Gujarati: 'gu',
	Haitian: 'ht',
	Hausa: 'ha',
	Hawaiian: 'haw',
	Hebrew: 'he',
	Hindi: 'hi',
	Hmong: 'hmn',
	Hungarian: 'hu',
	Icelandic: 'is',
	Igbo: 'ig',
	Indonesian: 'id',
	Irish: 'ga',
	Italian: 'it',
	Japanese: 'ja',
	Javanese: 'jv',
	Kannada: 'kn',
	Kazakh: 'kk',
	Khmer: 'km',
	Kinyarwanda: 'rw',
	Korean: 'ko',
	Kurdish: 'ku',
	Kyrgyz: 'ky',
	Lao: 'lo',
	Latin: 'la',
	Latvian: 'lv',
	Lithuanian: 'lt',
	Luxembourgish: 'lb',
	Macedonian: 'mk',
	Malagasy: 'mg',
	Malay: 'ms',
	Malayalam: 'ml',
	Maltese: 'mt',
	Maori: 'mi',
	Marathi: 'mr',
	Mongolian: 'mn',
	Burmese: 'my',
	Nepali: 'ne',
	Norwegian: 'no',
	Chichewa: 'ny',
	Oriya: 'or',
	Pashto: 'ps',
	Persian: 'fa',
	Polish: 'pl',
	Portuguese: 'pt',
	Punjabi: 'pa',
	Romanian: 'ro',
	Russian: 'ru',
	Samoan: 'sm',
	Gaelic: 'gd',
	Serbian: 'sr',
	Sesotho: 'st',
	Shona: 'sn',
	Sindhi: 'sd',
	Sinhalese: 'si',
	Slovak: 'sk',
	Slovenian: 'sl',
	Somali: 'so',
	Spanish: 'es',
	Sundanese: 'su',
	Swahili: 'sw',
	Swedish: 'sv',
	Tagalog: 'tl',
	Tajik: 'tg',
	Tamil: 'ta',
	Tatar: 'tt',
	Telugu: 'te',
	Thai: 'th',
	Turkish: 'tr',
	Turkmen: 'tk',
	Ukrainian: 'uk',
	Urdu: 'ur',
	Uyghur: 'ug',
	Uzbek: 'uz',
	Vietnamese: 'vi',
	Welsh: 'cy',
	Xhosa: 'xh',
	Yiddish: 'yi',
	Yoruba: 'yo',
	Zulu: 'zu',
};

export const returnLanguage = (languageOption) => {
	return Object.entries(iso6391LanguageCodes).find(([language, code]) => code === languageOption);
};

export const useLanguage = () => {
	const languageStorage = localStorage.getItem('language') === 'null' ? 'en' : localStorage.getItem('language');
	const findLanguage = returnLanguage(languageStorage);
	const [languageState, setLanguage] = useState({ language: findLanguage[0], code: findLanguage[1] });

	return [languageState, setLanguage];
};