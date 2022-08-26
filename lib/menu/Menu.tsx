import MenuBtn from "../menu/MenuBtn";
import MenuContent from "./MenuContent";
import { useState } from "react";

const Menu = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuBtn click={() => setShowMenu(!showMenu)} />
      <MenuContent
        show={showMenu}
        click={() => setShowMenu(!showMenu)}
        navUrls={navUrls}
      />
    </>
  );
};

export default Menu;
