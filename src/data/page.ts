export enum Page {
  Home = "Home",
  About = "About",
  Career = "Career",
  Articles = "Articles",
  Contact = "Contact",
}

export interface PageInfo {
  label: string;
  url: string;
}

export const PageMap: Record<Page, PageInfo> = {
  [Page.Home]: {
    label: "Home",
    url: "/",
  },
  [Page.About]: {
    label: "About",
    url: "/about",
  },
  [Page.Articles]: {
    label: "Articles",
    url: "/articles",
  },
  [Page.Career]: {
    label: "Career",
    url: "/career",
  },
  [Page.Contact]: {
    label: "Contact",
    url: "/",
  },
};
