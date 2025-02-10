import Link from "next/link";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import FooterAccordionList from "./FooterAccordionList";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 container">
        {/* Logo and  social icons */}

        <div className="flex flex-col items-start justify-start gap-2 w-full md:w-fit order-2 md:order-1">
          <Link
            href="/"
            className="font-bold text-2xl hover:text-red hoverEffect"
          >
            Daily blog
          </Link>
          <p className="max-w-[250px] text-sm">
            If you&apos;re writer and want to share your knowledge with the
            world, you can join us.
          </p>

          <SocialLinks />
        </div>

        {/* Links  */}
        <div className="order-1 md:order-2 w-full">
          <FooterLinks />
          <FooterAccordionList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
