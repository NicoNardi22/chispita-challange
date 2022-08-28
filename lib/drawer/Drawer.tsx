import Image from "next/image";
import { ReactNode } from "react";
import { useEffect, useState } from "react";
import Close from "../icons/Close";
import UserContext from "../UserContext";
import { useContext } from "react";
import { useDrawer } from "../drawer/DrawerContext";
import type { HotelData } from "../../pages/api/hotels/availability";
import axios from "axios";
import Loading from "../icons/Loading";

const Drawer = () => {
  const { screen } = useContext(UserContext);
  const [drawerClass, setDrawerClass] = useState("");
  const { openDrawer, setOpenDrawer } = useDrawer();

  const [hotelsInfo, setHotelsInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const drawerClassCreator = () => {
      let value =
        "fixed top-0 h-screen z-50 bg-white px-10 xmd:px-6 py-8 xmd:py-14 transition-all duration-300 ease-in-out overflow-y-auto ";

      if (openDrawer) {
        value +=
          screen.width != undefined && screen.width >= 960
            ? "w-[708px] right-0"
            : "w-screen left-0";
      } else {
        value +=
          screen.width != undefined && screen.width >= 960
            ? "w-[708px] right-[-708px]"
            : "w-screen left-full";
      }

      setDrawerClass(value);
    };

    drawerClassCreator();

    axios(`http://localhost:3000/api/hotels/availability`).then((res) => {
      setHotelsInfo(res.data);
      setLoading(false);
    });
  }, [screen, openDrawer]);

  const drawerContent = (object: HotelData, index: number): ReactNode => {
    return (
      <div key={index} className="mt-16 flex flex-col">
        <div className="grid grid-cols-1 xmd:grid-cols-3 gap-6 place-content-stretch">
          {/* Picture */}
          {screen.width != undefined && screen.height != undefined ? (
            <Image
              className="rounded-lg"
              src={object.img.url}
              alt={object.img.alt}
              width={screen.width >= 960 ? 250 : 327}
              height={screen.width >= 960 ? 274 : 200}
              objectFit="fill"
            />
          ) : null}
          {/* Details */}
          <div className="xmd:col-span-2">
            {/* Title */}
            <Image
              src={object.logo.url}
              alt={object.logo.alt}
              width="100%"
              height="30"
              layout="fixed"
              objectFit="fill"
            />
            {/* Wording */}
            <p className="tracking-wider mt-3">{object.wording}</p>
            <p className="text-gray-500 text-sm tracking-wide mt-4">
              {object.details.join(" · ")}
            </p>
            <p className="mt-6 text-gray-500 tracking-wider">
              Desde&nbsp;
              <span className="font-black text-black">
                ${object.price}/Noche
              </span>
            </p>
            <button className="mt-9 xmd:mt-6 p-3 flex items-center justify-center rounded-lg text-white bg-primary hover:bg-primary-dark font-semibold">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={drawerClass}>
      <div className="flex items-center justify-between">
        <p className="text-3xl xmd:text-5xl font-semibold">Reservar</p>
        <button onClick={() => setOpenDrawer(!openDrawer)}>
          <Close />
        </button>
      </div>
      {isLoading ? (
        <div className="flex items-center">
          Loading{" "}
          <span>
            <Loading />
          </span>
        </div>
      ) : hotelsInfo != undefined ? (
        hotelsInfo.map(
          (hotel: HotelData, index: number): ReactNode => {
            return drawerContent(hotel, index);
          }
        )
      ) : null}
    </div>
  );
};

export default Drawer;
