import React from "react";
import { useEffect, useState } from "react";
import Close from "../icons/Close";
import UserContext from "../UserContext";
import { useContext } from "react";
import { useDrawer } from "../drawer/DrawerContext";

const Drawer = ({ children }: { children?: React.ReactNode }) => {
  const { screen } = useContext(UserContext);
  const [drawerClass, setDrawerClass] = useState("");
  const { openDrawer, setOpenDrawer } = useDrawer();

  useEffect(() => {
    const drawerClassCreator = () => {
      let value =
        "fixed top-0 h-screen z-50 bg-white px-10 xmd:px-6 py-8 xmd:py-14 transition-all duration-300 ease-in-out overflow-y-auto ";

      if (openDrawer) {
        value += screen.width != undefined && screen.width >= 960 ? "w-[708px] right-0" : "w-screen left-0";
      } else {
        value +=
          screen.width != undefined && screen.width >= 960
            ? "w-[708px] right-[-708px]"
            : "w-screen left-full";
      }

      setDrawerClass(value);
    };

    drawerClassCreator();
  }, [screen, openDrawer]);

  return (
    <div className={drawerClass}>
      <div className="flex items-center justify-between">
        <p className="text-3xl xmd:text-5xl font-semibold">Reservar</p>
        <button onClick={() => setOpenDrawer(!openDrawer)}>
          <Close />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Drawer;
