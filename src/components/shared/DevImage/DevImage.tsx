import Image from 'next/image';

export const DevImage = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="developer-image" className="object-contain" />
    </div>
  );
};
