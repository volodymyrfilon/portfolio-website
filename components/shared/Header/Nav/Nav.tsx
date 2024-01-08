import { links } from '@/database'
import useMenuActive from '@/hooks/useMenuActive/useMenuActive'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { NavProps } from './Nav.props'

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				const isActive = useMenuActive(link.path)
				return (
					<Link
						className={`capitalize ${linkStyles}`}
						href={link.path}
						key={index}
					>
						{isActive && (
							<motion.span
								initial={{ y: '-100%' }}
								animate={{ y: 0 }}
								transition={{ type: 'tween' }}
								layoutId='underline'
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				)
			})}
		</nav>
	)
}

export default Nav
