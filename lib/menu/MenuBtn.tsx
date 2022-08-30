import MenuIcon from "../icons/MenuIcon";
import { MouseEventHandler } from "react";

const MenuBtn = ({ click }: { click: MouseEventHandler }) => {
  return (
    <div
      className="shadow-lg p-2.5 xmd:p-4 flex items-center justify-center cursor-pointer rounded-lg transition-colors duration-500 ease-in-out bg-white hover:bg-gray-400"
      onClick={click}
    >
      <MenuIcon />
    </div>
  );
};

export default MenuBtn;
