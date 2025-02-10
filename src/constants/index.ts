import { FooterItem, NavItems } from "@/types";

export const navItems: NavItems[] = [
  { title: "Home", href: "/" },
  { title: "Trends", href: "/trend" },
  { title: "Liked", href: "/liked" },
  { title: "Saved", href: "/saved" },
];

export const footerLinks: FooterItem[] = [
  {
    id: 0,
    title: "Support",
    subLinks: [
      {
        title: "Get Help",
        href: "/help",
      },
      { title: "Reviews", href: "/reviews" },
      { title: "Contact Us", href: "/contact" },
      { title: "FAQ", href: "/faq" },
    ],
  },

  {
    id: 1,
    title: "Pages",
    subLinks: [
      {
        title: "Daily blog",
        href: "/",
      },
      {
        title: "Trends",
        href: "/trends",
      },
      { title: "For you", href: "/for-you" },
      { title: "Saved", href: "/saved" },
      { title: "FAQ", href: "/faq" },
    ],
  },

  {
    id: 2,
    title: "About us",
    subLinks: [
      {
        title: "About us",
        href: "/",
      },
      {
        title: "Our team",
        href: "/team",
      },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Location", href: "/location" },
    ],
  },
];
