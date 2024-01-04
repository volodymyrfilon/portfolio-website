import { useEffect, useState } from 'react'

const useScrollProgress = () => {
	const [completion, setCompletion] = useState(0)

	useEffect(() => {
		const updateScrollCopmpletion = () => {
			const currentProgress = window.scrollY
			const scrollHeight = document.body.scrollHeight - window.innerHeight

			if (scrollHeight) {
				setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100)
			}
		}

		//event
		window.addEventListener('scroll', updateScrollCopmpletion)
		//clear event
		return () => window.removeEventListener('scroll', updateScrollCopmpletion)
	}, [])

	return completion
}

export default useScrollProgress
