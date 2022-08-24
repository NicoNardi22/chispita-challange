import Image from "next/image";
import UserContext from "./UserContext";
import { useContext } from "react";

const Logo = () => {
  const { screen } = useContext(UserContext);

  return (
    <div className="p-2.5 xmd:p-4">
      {screen.width != undefined && screen.height != undefined ? (
        <Image
          className="object-fit"
          src="/assets/Logo.png"
          alt="Logo de Nomad"
          width={screen.width >= 768 ? 95 : 71}
          height={screen.width >= 768 ? 16 : 12}
        ></Image>
      ) : null}
    </div>
  );
};

export default Logo;
