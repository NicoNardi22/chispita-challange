import Image from "next/image";
import { HotelData } from "../pages/api/home";
import Location from "./icons/Location";

const HotelCardMobile = ({ hotelInfo }: { hotelInfo: HotelData }) => {
  return (
    <div className="w-full rounded-2xl shadow-md relative">
      <Image
        src={hotelInfo.img.url}
        alt={hotelInfo.img.alt}
        className="rounded-2xl"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      />
      <div
        className={
          "absolute p-4 bottom-4 left-4 right-4 rounded-xl " +
          (hotelInfo.backgroundColor === "primary"
            ? "bg-primary"
            : `bg-[${hotelInfo.backgroundColor}]`)
        }
      >
        <div className="flex items-center">
          <Location />
          <p className="ml-1 text-white text-lg tracking-wider">
            {hotelInfo.location}
          </p>
        </div>
        <div className="mt-2">
          <Image
            src={hotelInfo.title.url}
            alt={hotelInfo.title.url}
            width={hotelInfo.widthTitle.mobile}
            height={hotelInfo.heightTitle.mobile}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HotelCardMobile;
