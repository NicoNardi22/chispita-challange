import Link from "next/link";
import LinksContent from "./LinksContent";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import ReservarBtn from "./ReservarBtn";
import UserContext from "./UserContext";
import { useContext, useEffect } from "react";

const NavBar = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  const { screen } = useContext(UserContext);

  useEffect(() => {
    const nav = document.getElementById("nav");
    // console.log(nav?.getBoundingClientRect());
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        console.log("scroll down");
        nav && nav.classList.remove("top-14");
        nav && nav.classList.remove("xmd:top-8");
        nav && nav.classList.add(`-top-full`);
      } else {
        console.log("scroll up");
        nav && nav.classList.add("top-14");
        nav && nav.classList.add("xmd:top-8");
        nav && nav.classList.remove(`-top-full`);
      }

      lastScrollY = window.scrollY;
    });
  }, []);

  return (
    <div
      id="nav"
      className="container z-10 flex justify-between top-14 xmd:top-8 fixed transition-all duration-500 ease-in-out"
    >
      <Link href="/">
        <a className="bg-white rounded-lg flex items-center justify-center transition-colors duration-500 ease-in-out hover:bg-gray-400 shadow-lg">
          <Logo />
        </a>
      </Link>
      {screen.width != undefined ? (
        screen.width >= 960 ? (
          <div className="p-2 bg-white rounded-2xl flex items-center shadow-lg">
            <LinksContent navUrls={navUrls} />
            <div className="ml-2">
              <ReservarBtn fillIcon="#FFFFFF" />
            </div>
          </div>
        ) : (
          <div className="flex gap-x-2.5">
            <ReservarBtn
              textColor="primary"
              backgroundColor="white"
              fillIcon="#3D63A9"
            />
            <Menu navUrls={navUrls} />
          </div>
        )
      ) : null}
    </div>
  );
};

export default NavBar;
