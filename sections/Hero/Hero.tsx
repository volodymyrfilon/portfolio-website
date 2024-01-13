import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri';

import { Badge } from '@/components/shared/Badge';
import { DevImage } from '@/components/shared/DevImage';
import { Socials } from '@/components/shared/Socials';
import { Button } from '@/components/ui/button';
import { HeroProps } from './Hero.props';

export const Hero = ({ data }: HeroProps) => {
  const {
    position,
    developer,
    aboutDeveloper,
    contactButton,
    downloadButton,
    badge1,
    badge2,
    badge3,
  } = data;
  return (
    <section className="h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              {position}
            </div>
            <h1 className="h1 mb-4">{developer}</h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">{aboutDeveloper}</p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link href={contactButton.href}>
                <Button className="gap-x-2">
                  {contactButton.name} <Send size={18} />
                </Button>
              </Link>
              <Link href={downloadButton.href} target="_blank" rel="noopener noreferrer" download>
                <Button variant="secondary" className="gap-x-2">
                  {downloadButton.name}
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={badge1.endCountNum}
              badgeText={badge1.badgeText}
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={badge2.endCountNum}
              badgeText={badge2.badgeText}
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={badge3.endCountNum}
              badgeText={badge3.badgeText}
            />
            <div className="absolute -right-2 -top-1 h-[500px] w-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark"></div>
            <DevImage
              containerStyles="bg-hero_shape w-[510px] h-[462px] relative bg-no-repeat  bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
