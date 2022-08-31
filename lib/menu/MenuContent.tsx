import { useEffect, useState } from "react";
import { MouseEventHandler } from "react";
import { useRouter } from "next/router";

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
    if (url.includes("experimenta") || url.includes("experience")) {
      experimentaUrls.push(url);
    } else if (url.includes("alojate") || url.includes("stay")) {
      alojateUrl = url;
    } else if (url.includes("co-work")) {
      coWorkUrl = url;
    } else if (url.includes("unete") || url.includes("join-up")) {
      uneteUrl = url;
    }
  });
  const router = useRouter();

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
            <a className="text-4xl font-semibold capitalize">
              {alojateUrl.replace("/", "")}
            </a>
          </Link>
        </div>
        <div className="pt-8">
          <Link href={coWorkUrl}>
            <a className="text-4xl font-semibold capitalize">
              {coWorkUrl.replace("/", "")}
            </a>
          </Link>
        </div>
        <div className="pt-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setDropdownMenuShow(!dropdownMenuShow)}
          >
            <p className="text-4xl font-semibold">
              {router.locales != undefined && router.locale === "es-AR"
                ? "Experimenta"
                : "Experience"}
            </p>
            {dropdownMenuShow ? <Plus /> : <Minus />}
          </div>
        </div>
        <div className={"pt-8 pl-4 " + (dropdownMenuShow ? "hidden" : "")}>
          {experimentaUrls.map((url, index) => {
            return (
              <div key={index} className={index > 0 ? "pt-8" : ""}>
                <Link href={url}>
                  <a className="text-4xl font-semibold capitalize">
                    {router.locales != undefined && router.locale === "es-AR"
                      ? url.replace("/experimenta/", "")
                      : url.replace("/experience/", "")}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="pt-8">
          <Link href={uneteUrl}>
            <a className="text-4xl font-semibold capitalize">
              {uneteUrl.replace("/", "")}
            </a>
          </Link>
        </div>
        <div className="pt-10">
          {router.locales != undefined ? (
            <div className="flex items-center">
              <Globe />
              {router.locale === "es-AR" ? (
                <Link href={router.asPath} locale={router.locales[1]}>
                  <a className="ml-3">English</a>
                </Link>
              ) : (
                <Link href={router.asPath} locale={router.locales[0]}>
                  <a className="ml-3">Spanish</a>
                </Link>
              )}
            </div>
          ) : null}
        </div>
        <div className="mt-11">
          <ReservarBtn fullwidth={true} fillIcon="white" />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
