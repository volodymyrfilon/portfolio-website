'use client'

import Link from 'next/link'
import {
	RiFacebookFill,
	RiGithubFill,
	RiLinkedinFill,
	RiTelegramFill,
} from 'react-icons/ri'

const icons = [
	{
		path: 'https://www.linkedin.com/in/volodymyr-filon/',
		name: <RiLinkedinFill />,
	},
	{
		path: 'https://github.com/volodymyrfilon',
		name: <RiGithubFill />,
	},
	{
		path: 'https://t.me/wlodeeek1312',
		name: <RiTelegramFill />,
	},
	{
		path: 'https://www.facebook.com/wlodek.filon.26',
		name: <RiFacebookFill />,
	},
]

const Socials = ({ containerStyles, iconsStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index}>
						<div className={`${iconsStyles}`}>{icon.name}</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Socials
