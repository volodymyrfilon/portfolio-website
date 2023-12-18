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
		path: '/',
		name: <RiLinkedinFill />,
	},
	{
		path: '/',
		name: <RiGithubFill />,
	},
	{
		path: '/',
		name: <RiTelegramFill />,
	},
	{
		path: '/',
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
