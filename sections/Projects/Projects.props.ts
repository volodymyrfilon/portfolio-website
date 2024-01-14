export interface ProjectsProps {
  data: {
    title: string;
    subtitle: string;
    buttonProjectsPage: {
      href: string;
      name: string;
    };
  };
  projectsData: {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
  }[];
}
