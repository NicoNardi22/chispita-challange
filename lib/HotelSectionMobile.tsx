import { HotelSection } from "../pages/api/home";
import HotelCardMobile from "./HotelCardMobile";

const HotelSectionMobile = ({
  hotelSection,
}: {
  hotelSection: HotelSection;
}) => {
  return (
    <div className="container bg-zinc-100 py-[100px]">
      <p className="text-5xl font-semibold tracking-tight">
        {hotelSection.title}
      </p>
      <div className="mt-6">
        <p className="font-light text-xl leading-8">{hotelSection.detail}</p>
      </div>
      <div className="mt-12 grid grid-flow-row gap-y-20">
        {hotelSection.hotelsInfo.map((hotelInfo, index) => {
          return <HotelCardMobile key={index} hotelInfo={hotelInfo} />;
        })}
      </div>
    </div>
  );
};

export default HotelSectionMobile;
