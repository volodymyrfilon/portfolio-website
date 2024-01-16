import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// database
import { Blocks, GanttChartSquare, Gem } from 'lucide-react';
import { ServicesProps } from './Services.props';

const serviceDataIcons: Record<string, JSX.Element> = {
  chart: <GanttChartSquare size={72} strokeWidth={0.8} />,
  blocks: <Blocks size={72} strokeWidth={0.8} />,
  gem: <Gem size={72} strokeWidth={0.8} />,
};

export const Services = ({ data }: ServicesProps) => {
  const { title, serviceData } = data;
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center xl:mb-24">{title}</h2>
        {/* grid items */}
        <div className="grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {serviceData.map((item: any, index: number) => (
            <Card
              className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16"
              key={index}
            >
              <CardHeader className="absolute -top-[60px] text-primary">
                <div className="flex h-[80px] w-[140px] items-center justify-center bg-white dark:bg-background">
                  {serviceDataIcons[item.icon]}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4 text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base leading-7">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
