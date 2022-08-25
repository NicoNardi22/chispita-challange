import { useEffect, useState } from "react";
import { MouseEventHandler } from "react";

import Close from "../icons/Close";
import Globe from "../icons/Globe";
import Link from "next/link";
import Logo from "../Logo";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
import ReservarBtn from "../ReservarBtn";

const MenuContent = ({
  show,
  click,
  navUrls,
}: {
  show: boolean;
  click: MouseEventHandler;
  navUrls: { urls: Array<string> };
}) => {
  let alojateUrl: string = "";
  let coWorkUrl: string = "";
  let uneteUrl: string = "";
  let experimentaUrls: Array<string> = [];

  navUrls.urls.map((url) => {
    if (url.includes("experimenta")) {
      experimentaUrls.push(url);
    } else if (url.includes("alojate")) {
      alojateUrl = url;
    } else if (url.includes("co-work")) {
      coWorkUrl = url;
    } else if (url.includes("unete")) {
      uneteUrl = url;
    }
  });

  const [menuClass, setMenuClass] = useState("");
  const [dropdownMenuShow, setDropdownMenuShow] = useState(false);

  useEffect(() => {
    const menuClassCreator = () => {
      let value =
        "fixed top-0 h-screen w-screen z-40 bg-white px-6 pt-14 pb-11 transition-all duration-300 ease-in-out overflow-y-auto ";

      if (show) {
        value += "left-0";
      } else {
        value += "left-full";
      }

      setMenuClass(value);
    };

    menuClassCreator();
  }, [show]);

  return (
    <div className={menuClass}>
      <div className="flex items-center justify-between">
        <Logo />
        <button onClick={click}>
          <Close />
        </button>
      </div>
      <div className="mt-10">
        <div>
          <Link href={alojateUrl}>
            <a className="text-4xl font-semibold">Alojate</a>
          </Link>
        </div>
        <div className="pt-8">
          <Link href={coWorkUrl}>
            <a className="text-4xl font-semibold">Co-work</a>
          </Link>
        </div>
        <div className="pt-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setDropdownMenuShow(!dropdownMenuShow)}
          >
            <p className="text-4xl font-semibold">Experimenta</p>
            {dropdownMenuShow ? <Plus /> : <Minus />}
          </div>
        </div>
        <div className={"pt-8 pl-4 " + (dropdownMenuShow ? "hidden" : "")}>
          <div>
            <Link href={experimentaUrls[0]}>
              <a className="text-4xl font-semibold">City Host</a>
            </Link>
          </div>
          <div className="pt-8">
            <Link href={experimentaUrls[1]}>
              <a className="text-4xl font-semibold">Actividades</a>
            </Link>
          </div>
          <div className="pt-8">
            <Link href={experimentaUrls[2]}>
              <a className="text-4xl font-semibold">Gastronomía</a>
            </Link>
          </div>
        </div>
        <div className="pt-8">
          <Link href={uneteUrl}>
            <a className="text-4xl font-semibold">Únete</a>
          </Link>
        </div>
        <div className="pt-10 flex items-center">
          <Globe />
          <a className="ml-3">English</a>
        </div>
        <div className="mt-11">
          <ReservarBtn fullwidth={true} fillIcon="white" />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
