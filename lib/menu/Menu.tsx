import MenuBtn from "../menu/MenuBtn";
import MenuContent from "./MenuContent";
import { useState } from "react";
import type { HotelData } from "../../pages/api/hotels/availability";

const Menu = ({
  navUrls,
  hotelsInfo,
}: {
  navUrls: { urls: Array<string> };
  hotelsInfo: HotelData[];
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuBtn click={() => setShowMenu(!showMenu)} />
      <MenuContent
        show={showMenu}
        click={() => setShowMenu(!showMenu)}
        navUrls={navUrls}
        hotelsInfo={hotelsInfo}
      />
    </>
  );
};

export default Menu;
