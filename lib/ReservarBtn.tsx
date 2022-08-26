import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";
import Drawer from "./drawer/Drawer";
import { useDrawer } from "./drawer/DrawerContext";
import type { HotelData } from "./../pages/api/hotels/availability";
import Calendar from "./icons/Calendar";
import UserContext from "./UserContext";
import { useContext } from "react";

const ReservarBtn = ({
  fullwidth = false,
  fillIcon = "",
  backgroundColor = "primary",
  textColor = "white",
  hotelsInfo,
}: {
  fullwidth?: boolean;
  fillIcon?: string;
  backgroundColor?: string;
  textColor?: string;
  hotelsInfo?: HotelData[];
}) => {
  const { screen } = useContext(UserContext);
  const [btnClass, setBtnClass] = useState("");
  const [txtClass, setTxtClass] = useState("");

  const { openDrawer, setOpenDrawer } = useDrawer();

  useEffect(() => {
    const btnClassCreator = () => {
      let value =
        "hover:cursor-happy p-2.5 xmd:p-4 flex cursor-pointer rounded-lg transition-colors duration-500 ease-in-out";

      if (fullwidth) {
        value += " w-full justify-center py-5 ";
      }
      if (backgroundColor === "primary") {
        value += " bg-primary hover:bg-primary-dark";
      } else {
        value += " bg-white hover:bg-gray-400";
      }

      setBtnClass(value);
    };

    btnClassCreator();

    const txtClassCreator = () => {
      let value = "ml-2.5 font-semibold leading-6 text-sm xmd:text-base";

      if (textColor === "white") {
        value += " text-white";
      } else if (textColor === "primary") {
        value += " text-primary";
      }

      setTxtClass(value);
    };

    txtClassCreator();
  }, [backgroundColor, fullwidth, textColor]);

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
    <div>
      <button className={btnClass} onClick={() => setOpenDrawer(!openDrawer)}>
        {fillIcon != "" ? <Calendar fill={fillIcon} /> : <Calendar />}
        <p className={txtClass}>Reservar</p>
      </button>
      <Drawer>
        {hotelsInfo != undefined
          ? hotelsInfo.map(
              (hotel: HotelData, index: number): ReactNode => {
                return drawerContent(hotel, index);
              }
            )
          : null}
      </Drawer>
    </div>
  );
};

export default ReservarBtn;
