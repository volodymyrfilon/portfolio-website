import Image from 'next/image'

const DevImg = ({
	containerStyles,
	imgSrc,
}: {
	containerStyles: string
	imgSrc: string
}) => {
	return (
		<div className={`${containerStyles}`}>
			<Image src={imgSrc} fill priority alt='developer-image' />
		</div>
	)
}

export default DevImg
