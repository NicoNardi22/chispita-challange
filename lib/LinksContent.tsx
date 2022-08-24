import Link from "next/link";
import { useState } from "react";

const LinksContent = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  let alojateUrl: string = "";
  let coWorkUrl: string = "";
  let uneteUrl: string = "";
  let experimentaUrls: Array<string> = [];

  const [showMenu, setShowMenu] = useState(false);

  navUrls.urls.map((url) => {
    if (url.includes("experimenta")) {
      experimentaUrls.push(url);
    } else if (url === "/alojate") {
      alojateUrl = url;
    } else if (url === "/co-work") {
      coWorkUrl = url;
    } else if (url === "/unete") {
      uneteUrl = url;
    }
  });

  return (
    <div className="flex justify-between items-center">
      <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={alojateUrl}>
          <a className="text-sm xmd:text-base">Alojate</a>
        </Link>
      </div>
      <div className="ml-2 xmd:ml-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={coWorkUrl}>
          <a className="text-sm xmd:text-base">Co-Work</a>
        </Link>
      </div>
      <div
        className="ml-2 xmd:ml-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400"
        id="dropdown-experimenta"
        onMouseEnter={() => setShowMenu(true)}
      >
        <p className="text-sm xmd:text-base">Experimenta</p>
        {showMenu ? (
          <div
            className="absolute top-20 bg-white rounded-lg p-2 xmd:p-4"
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[0]}>
                <a className="text-sm xmd:text-base">City Host</a>
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[1]}>
                <a className="text-sm xmd:text-base">Actividades</a>
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[2]}>
                <a className="text-sm xmd:text-base">Gastronomía</a>
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[3]}>
                <a className="text-sm xmd:text-base">Eventos</a>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <div className="mx-2 xmd:mx-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={uneteUrl}>
          <a className="text-sm xmd:text-base">Únete</a>
        </Link>
      </div>
      <div className="border-l border-l-slate-400">
        <div className="ml-2 xmd:ml-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400 cursor-pointer">
          <a className="text-sm xmd:text-base">English</a>
        </div>
      </div>
    </div>
  );
};

export default LinksContent;
