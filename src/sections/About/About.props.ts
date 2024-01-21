export interface AboutProps {
  data: {
    title: string;
    devImageSrc: string;
    tabSections: {
      personal: string;
      qualification: string;
      skills: string;
    };
    personalData: {
      title: string;
      subtitle: string;
      data: {
        icon: string;
        text: string;
      }[];
      languageInfo: {
        title: string;
        text: string;
      };
    };
    qualificationData: {
      title: string;
      educationData: {
        title: string;
        data: {
          university: string;
          qualification: string;
          years: string;
        }[];
      };
      experienceData: {
        title: string;
        data: {
          company: string;
          role: string;
          years: string;
        }[];
      };
    };
    skillData: {
      title: string;
      techSkill: {
        title: string;
        data: {
          name: string;
        }[];
      };
      toolSkill: {
        title: string;
        data: {
          imgPath: string;
        }[];
      };
    };
  };
}
