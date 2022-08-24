import Link from "next/link";
import LinksContent from "./LinksContent";
import Logo from "./Logo";
import ReservarBtn from "./ReservarBtn";
import UserContext from "./UserContext";
import { useContext } from "react";

const NavBar = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  const { screen } = useContext(UserContext);

  return (
    <div className="container flex justify-between absolute top-14 md:top-8">
      <Link href="/">
        <a className="bg-white rounded-lg flex items-center justify-center transition-colors duration-500 ease-in-out hover:bg-gray-400">
          <Logo />
        </a>
      </Link>
      {screen.width != undefined ? (
        screen.width >= 768 ? (
          <div className="relative">
            <div className="p-2 bg-white rounded-2xl flex items-center">
              <LinksContent navUrls={navUrls} />
              <div className="ml-2">
                <ReservarBtn fillIcon="#FFFFFF" />
              </div>
            </div>
          </div>
        ) : (
          <div>{/* Menú mobile */}</div>
        )
      ) : null}
    </div>
  );
};

export default NavBar;
