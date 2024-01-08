import { AlignJustify } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

import { links } from '@/database'
import useMenuActive from '@/hooks/useMenuActive'
import Link from 'next/link'
import Socials from './Socials'
import Logo from './shared/Logo'

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<AlignJustify className='cursor-pointer' />
			</SheetTrigger>
			<SheetContent>
				<div className='flex flex-col items-center justify-between h-full py-8'>
					<div className='flex flex-col items-center gap-y-32'>
						<Logo />
						<nav className='flex flex-col items-center gap-y-6'>
							{links.map((link, index) => {
								const isActive = useMenuActive(link.path)
								return (
									<Link
										className={`text-2xl hover:text-primary ${
											isActive ? 'text-primary' : ''
										}`}
										href={link.path}
										key={index}
									>
										<SheetClose>{link.name}</SheetClose>
									</Link>
								)
							})}
						</nav>
					</div>
					<Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
