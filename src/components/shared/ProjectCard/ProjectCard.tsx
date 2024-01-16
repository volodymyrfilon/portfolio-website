import { Github, Link2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../../ui/badge';
import { Card, CardHeader } from '../../ui/card';
import { ProjectCardProps } from './ProjectCard.props';

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark">
          <Image
            className="absolute bottom-0 rounded-t-xl shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt={`image of ${project.name}`}
            priority
          />
          {/* buttons links */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-xs font-normal uppercase leading-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1 font-eUkraineHead text-primary/80">{project.name}</h4>
        <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
