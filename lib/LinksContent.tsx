import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const LinksContent = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  const router = useRouter();
  const [showDDMenu, setShowDDMenu] = useState(false);
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

  return (
    <div className="flex justify-between items-center">
      <div className="bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={alojateUrl}>
          <a className="text-sm xmd:text-base capitalize">
            {alojateUrl.replace("/", "")}
          </a>
        </Link>
      </div>
      <div className="ml-2 xmd:ml-4 bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={coWorkUrl}>
          <a className="text-sm xmd:text-base capitalize">
            {coWorkUrl.replace("/", "")}
          </a>
        </Link>
      </div>
      <div
        className="ml-2 xmd:ml-4 bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400"
        id="dropdown-experimenta"
        onMouseEnter={() => setShowDDMenu(true)}
      >
        <p className="text-sm xmd:text-base">
          {router.locales != undefined && router.locale === "es-AR"
            ? "Experimenta"
            : "Experience"}
        </p>
        {showDDMenu ? (
          <div
            className="absolute top-20 bg-white rounded-lg p-2 xmd:p-4 shadow-lg"
            onMouseLeave={() => setShowDDMenu(false)}
          >
            {experimentaUrls.map((url, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400"
                >
                  <Link href={url}>
                    <a className="text-sm xmd:text-base capitalize">
                      {router.locales != undefined && router.locale === "es-AR"
                        ? url.replace("/experimenta/", "")
                        : url.replace("/experience/", "")}
                    </a>
                  </Link>
                </div>
              );
            })}
            {/* <div className="bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[1]}>
                <a className="text-sm xmd:text-base">Actividades</a>
              </Link>
            </div>
            <div className="bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[2]}>
                <a className="text-sm xmd:text-base">Gastronomía</a>
              </Link>
            </div>
            <div className="bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
              <Link href={experimentaUrls[3]}>
                <a className="text-sm xmd:text-base">Eventos</a>
              </Link>
            </div> */}
          </div>
        ) : null}
      </div>
      <div className="mx-2 xmd:mx-4 bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400">
        <Link href={uneteUrl}>
          <a className="text-sm xmd:text-base capitalize">
            {uneteUrl.replace("/", "")}
          </a>
        </Link>
      </div>
      <div className="border-l border-l-slate-400">
        <div className="ml-2 xmd:ml-4 bg-white p-2.5 xmd:p-3 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-400 cursor-pointer">
          {router.locales != undefined ? (
            <div>
              {router.locale === "es-AR" ? (
                <Link href={router.asPath} locale={router.locales[1]}>
                  <a className="text-sm xmd:text-base">English</a>
                </Link>
              ) : (
                <Link href={router.asPath} locale={router.locales[0]}>
                  <a className="text-sm xmd:text-base">Spanish</a>
                </Link>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LinksContent;
