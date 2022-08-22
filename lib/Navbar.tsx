import Link from "next/link";
import Logo from "./Logo";

const NavBar = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  return (
    <div className="container flex absolute top-14 md:top-8">
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
