import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Box,
  Briefcase,
  Calendar,
  Code2,
  GraduationCap,
  HomeIcon,
  Languages,
  MailIcon,
  PhoneCall,
  User2,
} from 'lucide-react';
import Image from 'next/image';

//database
import { DevImage } from '@/components/shared/DevImage';
import { AboutProps } from './About.props';

const personalIcons: Record<string, JSX.Element> = {
  user: <User2 size={20} />,
  phone: <PhoneCall size={20} />,
  mail: <MailIcon size={20} />,
  calendar: <Calendar size={20} />,
  graduation: <GraduationCap size={20} />,
  home: <HomeIcon size={20} />,
};

export const About = ({ data }: AboutProps) => {
  const { personalData, qualificationData, tabSections, skillData, title, devImageSrc } = data;
  const { educationData, experienceData } = qualificationData;
  const { techSkill, toolSkill } = skillData;

  return (
    <section className="pb-12 pt-0 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">{title}</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImage
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc={devImageSrc}
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none md:w-[172px] xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] text-sm xl:w-auto" value="personal">
                  {tabSections.personal}
                </TabsTrigger>
                <TabsTrigger className="w-[162px] text-sm xl:w-auto" value="qualifications">
                  {tabSections.qualification}
                </TabsTrigger>
                <TabsTrigger className="w-[162px] text-sm xl:w-auto" value="skills">
                  {tabSections.skills}
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-base xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">{personalData.title}</h3>
                    <p className="subtitle mx-auto max-w-xl xl:mx-0">{personalData.subtitle}</p>
                    {/* icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {personalData.data.map((item: any, index: number) => (
                        <div className="mx-auto flex items-center gap-x-4 xl:mx-0" key={index}>
                          <div className="text-primary">{personalIcons[item.icon]}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* language info*/}
                    <div className="flex flex-col">
                      <div className="mb-2 flex items-center justify-center gap-x-2 text-xl font-semibold xl:justify-start">
                        <Languages size={20} className="text-primary" />
                        <h4>{personalData.languageInfo.title}</h4>
                      </div>
                      <div className="mb-4 border-b border-border "></div>
                      <div>{personalData.languageInfo.text}</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">{qualificationData.title}</h3>
                    {/* experience & education wrapper*/}
                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[18px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">{experienceData.title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {experienceData.data.map((item: any, index: number) => {
                            const { company, role, years } = item;
                            return (
                              <div className="group flex gap-x-8" key={index}>
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                </div>
                                <div>
                                  <div className="mb-2 text-base font-semibold leading-none">
                                    {company}
                                  </div>
                                  <div className="mb-4 text-sm leading-none text-muted-foreground">
                                    {role}
                                  </div>
                                  <div className="text-sm font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[18px]  text-primary">
                          <GraduationCap />
                          <h4 className="font-medium capitalize">{educationData.title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {educationData.data.map((item: any, index: number) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="group flex gap-x-8" key={index}>
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                </div>
                                <div>
                                  <div className="mb-2 text-base font-semibold leading-none">
                                    {university}
                                  </div>
                                  <div className="mb-4 text-sm leading-none text-muted-foreground">
                                    {qualification}
                                  </div>
                                  <div className="text-sm font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">{skillData.title}</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <div className="mb-2 flex items-center justify-center gap-x-2 text-xl font-semibold xl:justify-start">
                        <Code2 size={24} className="text-primary" />
                        <h4>{techSkill.title}</h4>
                      </div>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skills list */}
                      <div>
                        {techSkill.data.map((item: any, index: number) => (
                          <div
                            className="mx-auto w-2/4 text-center leading-7 xl:mx-0 xl:text-left"
                            key={index}
                          >
                            <div className="font-medium">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <div className="mb-2 flex items-center justify-center gap-x-2 text-xl font-semibold xl:justify-start">
                        <Box size={20} className="text-primary" />
                        <h4>{toolSkill.title}</h4>
                      </div>
                      <div className="mb-4 border-b border-border"></div>
                      {/* tools list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {toolSkill.data.map((item: any, index: number) => (
                          <div key={index}>
                            <Image src={item.imgPath} width={48} height={48} alt="tool" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
