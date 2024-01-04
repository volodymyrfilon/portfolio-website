import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundpage = () => {
	return (
		<section className='flex items-center flex-col h-screen'>
			<h1 className='h1 mt-12 mb-12 xl:mb-24'>Page is not found</h1>
			<Image
				src={'/404/404.svg'}
				alt='404-image'
				height={300}
				width={300}
				className=' mb-12 xl:mb-24'
			/>
			<Link href='/'>
				<Button>Homepage</Button>
			</Link>
		</section>
	)
}

export default NotFoundpage
