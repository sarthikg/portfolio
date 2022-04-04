import {
	IconEmail,
	IconPhone,
	IconGithub,
	IconLinkedIn,
	IconTwitter,
	IconMedium,
} from '../components/Icon';

export const experienceDetails = [
	{
		institute: 'Soroco India Pvt Ltd, Bengaluru, India',
		position: 'Software Engineer',
		duration: 'Aug 2021 - Current',
		summary: [
			'Created Storybook to offer an interactive playground to showcase web component-based library of components, speed up the process of development of components, and provide easy to navigate and interact documentation.',
			'Played a core role in the process of design standardization by creating new reusable components and guiding the development of the UI component library.',
			'Developed custom components for form elements while making them accessible and compatible with reactive & template-driven forms.',
			'Tech Stack - TypeScript, Angular, Storybook, Jasmine, Sass, Git',
		],
	},
	{
		institute: 'Collegedunia Web Pvt Ltd, Gurugram, India',
		position: 'Business Analyst Intern',
		duration: 'Jan 2020 - Jul 2020',
		summary: [
			'Developed Full Stack News Website for fetching real-time updates from 85 websites to reduce the latency in publishing articles by 85% and increase the impressions by 400%.',
			'Managed products of the organization involving web hosting, web security, cloud computing, and database management.',
			'Tech Stack – NodeJS, Express, Python, MySQL, Selenium, BeautifulSoup, AWS',
		],
	},
];

export const educationDetails = [
	{
		institute: 'Punjab Engineering College, Chandigarh, India',
		position: 'Bachelor of Technology - Civil Engineering',
		duration: 'Aug 2017 - Jun 2021',
	},
	{
		institute: 'Bhavan Vidyalaya, Panchkula, India',
		position: 'Secondary High School - Science',
		duration: 'Apr 2016 - Mar 2017',
	},
	{
		institute: 'Bhavan Vidyalaya, Panchkula, India',
		position: 'High School',
		duration: 'Apr 2014 - Mar 2015',
	},
];

export const greetingTexts = [
	'Hello',
	'Hola',
	'Namaste',
	'Ni hao',
	'Bonjour',
	'Privet',
	'Ciao',
	'Anyoung',
];

export const skillsList = [
	{ name: 'ReactJS', level: 'bright' },
	{ name: 'NodeJS', level: 'bright' },
	{ name: 'Python', level: 'bright' },
	{ name: 'MySQL', level: 'bright' },
	{ name: 'JavaScript', level: 'bright' },
	{ name: 'Selenium', level: 'muted' },
	{ name: 'Git', level: 'muted' },
	{ name: 'REST', level: 'muted' },
	{ name: 'Flutter', level: 'muted' },
	{ name: 'Tableau', level: 'muted' },
	{ name: 'Cloud Computing', level: 'muted' },
	{ name: 'Microsoft Excel', level: 'muted' },
	{ name: 'Google Analytics', level: 'dim' },
	{ name: 'Microsoft PowerPoint', level: 'dim' },
	{ name: 'Adobe Photoshop', level: 'dim' },
	{ name: 'MongoDB', level: 'dim' },
	{ name: 'Sass', level: 'dim' },
	{ name: 'Statistics', level: 'dim' },
];

export const journeyContent = [
	`My journey to this portfolio began in May of 2019 when I first
	started programming in Flutter. Thanks to Android Studio, I could
	finally experience the peak temperatures of my laptop. Anyways, back
	to the story, by the next month, I had started Python, going through
	an online bootcamp, and boy it was easy and fun. It took me about a
	month to complete the Bootcamp after which I began SQL because after
	all, everything cannot be like Snapchat.`,
	`Fast-forward to January of 2020, I began my first internship at a
	startup where I first got exposed to Web-Scraping (ahem!)
	Web-Automation using Selenium. Within a couple of months, I pivoted
	to Web-Development and got my feet wet in this never-ending field.`,
	`Halfway down the Internship, Covid happened. Most of the time post
	then was invested in learning React & Trading. Well, losses were
	made, but at least there's this website :)`,
];

export const projectsList = [
	{
		name: 'Cache-em',
		description:
			'Autofill Input Forms with Cached Data from MySQL Databases with Auto-Refresh.',
		link: 'https://www.npmjs.com/package/cache-em',
	},
	{
		name: 'Pool-me',
		description:
			'Promise Wrapper for Async/Await with MySQL Pools along with Series & Parallel Execution.',
		link: 'https://www.npmjs.com/package/pool-me',
	},
	{
		name: 'Google SERP',
		description: 'Accessing Google Search Results without the need of external proxy pool.',
		link: 'https://github.com/sarthikg/Google-Scrape',
	},
];

export const achievementsList = [
	{
		name: 'ISB BAC Scholarship',
		description:
			'Selected by Indian School of Business, Mohali for Business Advantage Certification.',
	},
	{
		name: 'Cloud Computing Scholarship',
		description: 'Selected by Nutanix for a fully sponsored course on Hybrid Cloud Computing.',
	},
	{
		name: 'Certificate of Appreciation',
		description:
			'Honoured with COA for outstanding performance in co-curricular activities during the College.',
	},
];

export const contactDetails = [
	{
		type: 'email',
		url: 'href="mailto:sarthikg@gmail.com"',
		content: 'sarthikg@gmail.com',
		icon: <IconEmail />,
	},
	{
		type: 'phone',
		content: '+91-8872425152',
		icon: <IconPhone />,
	},
];

export const socialAccounts = [
	{
		alt: 'github',
		icon: <IconGithub />,
		url: 'https://www.github.com/sarthikg',
	},
	{
		alt: 'linkedin',
		icon: <IconLinkedIn />,
		url: 'https://www.linkedin.com/in/sarthikg',
	},
	{
		alt: 'twitter',
		icon: <IconTwitter />,
		url: 'https://www.twitter.com/sarthikg',
	},
	{
		alt: 'medium',
		icon: <IconMedium />,
		url: 'https://sarthikg.medium.com',
	},
];
