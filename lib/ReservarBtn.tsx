import { useEffect, useState } from "react";

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

  useEffect(() => {
    const btnClassCreator = () => {
      let value =
        "hover:cursor-happy p-2.5 xmd:p-4 flex cursor-pointer rounded-lg transition-colors duration-500 ease-in-out";

      if (fullwidth) {
        value += " w-full";
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
    <div className={btnClass}>
      {fillIcon != "" ? <Calendar fill={fillIcon} /> : <Calendar />}
      <p className={txtClass}>Reserva</p>
    </div>
  );
};

export default ReservarBtn;