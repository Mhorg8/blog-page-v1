export interface NavItems {
  title: string;
  href: string;
}

export interface FooterItem {
  id: number;
  title: string;
  subLinks: {
    title: string;
    href: string;
  }[];
}
