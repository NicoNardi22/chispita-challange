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
        <Link href={alojateUrl} className="text-base">
          <a>Alojate</a>
        </Link>
      </div>
      <div className="ml-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={coWorkUrl} className="text-base">
          <a>Co-Work</a>
        </Link>
      </div>
      <div
        className="ml-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400"
        id="dropdown-experimenta"
        onMouseEnter={() => setShowMenu(true)}
      >
        <p className="text-base">Experimenta</p>
        {showMenu ? (
          <div
            className="absolute top-20 bg-white rounded-lg p-4"
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[0]} className="text-base">
                <a>City Host</a>
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[1]} className="text-base">
                <a>Actividades</a>
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[2]} className="text-base">
                <a>Gastronomía</a>
              </Link>
            </div>
            <div className="bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[3]} className="text-base">
                <a>Eventos</a>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <div className="mx-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={uneteUrl} className="text-base">
          <a>Únete</a>
        </Link>
      </div>
      <div className="border-l border-l-slate-400">
        <div className="ml-4 bg-white p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400 cursor-pointer">
          <a className="text-base">English</a>
        </div>
      </div>
    </div>
  );
};

export default LinksContent;
