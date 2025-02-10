import { footerLinks } from "@/constants";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="hidden md:flex flex-wrap items-start justify-evenly gap-12 h-full flex-1 ">
      {footerLinks.map((link) => {
        return (
          <div className="flex flex-col " key={link.title}>
            <h3 className="text-xl text-darkGray font-bold">{link.title}</h3>
            <ul className="flex flex-col">
              {link.subLinks.map((subLink) => {
                return (
                  <Link
                    className="hover:scale-x-110 hover:underline hoverEffect"
                    href={subLink.href}
                    key={subLink.href}
                  >
                    {subLink.title}
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;
