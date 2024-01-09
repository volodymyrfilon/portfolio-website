import About from '@/components/About'
import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import Service from '@/components/Services'
import Projects from '../../components/shared/Hero/Projects/Projects'

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Service />
			<Projects />
			{/* <Reviews /> */}
			<Cta />
		</main>
	)
}
