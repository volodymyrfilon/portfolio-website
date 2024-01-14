export interface HeroProps {
  data: {
    position: string;
    developer: string;
    aboutDeveloper: string;
    contactButton: {
      href: string;
      name: string;
    };
    downloadButton: {
      href: string;
      name: string;
    };
    badge1: {
      endCountNum: number;
      badgeText: string;
    };
    badge2: {
      endCountNum: number;
      badgeText: string;
    };
    badge3: {
      endCountNum: number;
      badgeText: string;
    };
    devImageSrc: string;
  };
}
