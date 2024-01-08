import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/'>
			<div className='text-4xl font-bold'>
				V<span className='text-primary'>F</span>
			</div>
		</Link>
	)
}

export default Logo
