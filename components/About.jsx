import DevImg from './DevImg'

import {
	Calendar,
	GraduationCap,
	HomeIcon,
	MailIcon,
	PhoneCall,
	User2,
} from 'lucide-react'

const infoData = [
	{
		icon: <User2 size={20} />,
		text: 'Volodymyr Filon',
	},
	{
		icon: <PhoneCall size={20} />,
		text: '+48 222 22 222',
	},
	{
		icon: <MailIcon size={20} />,
		text: 'volodymyrfilon@22222',
	},
	{
		icon: <Calendar size={20} />,
		text: 'Born on 26 Apr, 2002',
	},
	{
		icon: <GraduationCap size={20} />,
		text: 'Master of Int. Freight Forwarding & Transpotation',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Poznan, Poland',
	},
]

const qualificationData = [
	{
		title: 'education',
		data: [
			{
				university: 'High School of Logistics',
				qualification: 'Bachelor of Logistics & Supply Chain Management',
				years: '2019 - 2022',
			},
			{
				university: 'High School of Logistics',
				qualification:
					'Master of Internatioal Freight Forwarding Company Management',
				years: '2022 - 2024',
			},
		],
	},
	{
		title: 'experience',
		data: [
			{
				company: 'Transport Wietrak Group',
				qualification: 'Int. Freight Forwarder & Trasnport Manager',
				years: '2021 - Present',
			},
			{
				company: 'BAZA Trainee Ukraine',
				qualification: 'Frontend Web Developer',
				years: '2023 - Present',
			},
		],
	},
]

const skillData = [
	{
		title: 'skills',
		data: [
			{
				name: 'HTML5, CSS3, Sass',
			},
			{
				name: 'Frontend Development',
			},
			{
				name: 'JavaScript, TypeScript',
			},
			{
				name: 'ReactJS, NextJS',
			},
			{
				name: 'NodeJS',
			},
		],
	},
	{
		title: 'tools',
		data: [
			{
				imgPath: '/about/vscode.svg',
			},
			{
				imgPath: '/about/vscode.svg',
			},
			{
				imgPath: '/about/vscode.svg',
			},
			{
				imgPath: '/about/vscode.svg',
			},
			{
				imgPath: '/about/vscode.svg',
			},
		],
	},
]

const About = () => {
	const getData = (arr, title) => {
		return arr.find(item => item.title === title)
	}
	return (
		<section className='xl:h-[860px] pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
					About me
				</h2>
				<div>
					{/* image */}
					<div>
						<DevImg
							containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
							imgSrc='/about/developer.png'
						/>
					</div>
				</div>
			</div>
			<div></div>
		</section>
	)
}

export default About
