import Link from "next/link";
import NavMenu from "./NavMenu";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className="py-2 container flex items-center justify-between w-full ">
      <div>
        <Link href="/" className="font-bold text-2xl">
          Daily blog
        </Link>
      </div>
      <NavMenu />
      <HeaderActions />
    </header>
  );
};

export default Header;
