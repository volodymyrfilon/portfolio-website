import Link from 'next/link'
import { FC } from 'react'
import { LogoProps } from './Logo.props'

export const Logo: FC<LogoProps> = ({ href }) => {
	return (
		<Link href={href}>
			<div className='text-4xl font-bold'>
				V<span className='text-primary'>F</span>
			</div>
		</Link>
	)
}

export default Logo
