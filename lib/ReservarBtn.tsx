import { useEffect, useState } from "react";
import Drawer from "./drawer/Drawer";
import { useDrawer } from "./drawer/DrawerContext";
import Calendar from "./icons/Calendar";

const ReservarBtn = ({
  fullwidth = false,
  fillIcon = "",
  backgroundColor = "primary",
  textColor = "white",
}: {
  fullwidth?: boolean;
  fillIcon?: string;
  backgroundColor?: string;
  textColor?: string;
}) => {
  const [btnClass, setBtnClass] = useState("");
  const [txtClass, setTxtClass] = useState("");

  const { openDrawer, setOpenDrawer } = useDrawer();

  useEffect(() => {
    const btnClassCreator = () => {
      let value =
        "shadow-lg hover:cursor-happy p-2.5 xmd:p-4 flex cursor-pointer rounded-lg transition-colors duration-500 ease-in-out";

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

  return (
    <div>
      <button className={btnClass} onClick={() => setOpenDrawer(!openDrawer)}>
        {fillIcon != "" ? <Calendar fill={fillIcon} /> : <Calendar />}
        <p className={txtClass}>Reservar</p>
      </button>
      <Drawer />
    </div>
  );
};

export default ReservarBtn;
