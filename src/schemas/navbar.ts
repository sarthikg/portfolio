export enum NavbarPage {
  About = "About",
  Career = "Career",
  Articles = "Articles",
  Contact = "Contact",
}

export interface NavbarOption {
  page: NavbarPage;
  url: string;
}

export type Navbar = NavbarOption[];
