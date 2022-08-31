import Image from "next/image";
import { useState, useEffect, ReactNode } from "react";
import type { HotelSection } from "../pages/api/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Location from "./icons/Location";

const HotelSectionDesktop = ({
  hotelSection,
}: {
  hotelSection: HotelSection;
}) => {
  const [hoveredCard, setHoveredCard] = useState<ReactNode>();

  useEffect(() => {}, []);

  return (
    <div className="mt-20 bg-split-zinc-white py-[72px]">
      <div className="pl-6 xmd:pl-[85px]">
        <p className="text-5xl font-semibold leading-tight tracking-tight">
          {hotelSection.title}
        </p>
        <p
          className="mt-6 text-xl leading-8 font-light"
          dangerouslySetInnerHTML={{ __html: hotelSection.detail }}
        ></p>
        <div className="mt-14">
          <Swiper
            className="swiper-hotel"
            modules={[Autoplay]}
            spaceBetween={10}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            slidesPerView={1}
            loop
            grabCursor={true}
            onSlideChange={(event) => {
              console.log("slide change");
            }}
            onSwiper={(swiper) => {
              console.log("swiper", swiper);
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              960: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 1.3,
              },
              1110: {
                slidesPerView: 1.5,
              },
              1250: {
                slidesPerView: 1.8,
              },
            }}
          >
            {hotelSection.hotelsInfo.map((hotelInfo, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative group">
                    <Image
                      src={hotelInfo.img.url}
                      alt={hotelInfo.img.alt}
                      className="rounded-2xl transition-all duration-100 ease-in-out"
                      width={624}
                      height={432}
                      layout="fixed"
                      objectFit="contain"
                    />
                    <div
                      className={
                        "absolute p-4 bottom-[42px] left-[292px] w-[356px] rounded-xl group-hover:bg-[#2b2b2bcc] transition-all duration-100 ease-in " +
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
                      <div className="mt-6 hidden group-hover:block">
                        <p className="leading-6 text-white tracking-wider">
                          {hotelInfo.detail}
                        </p>
                        {/* Divisor */}
                        <div className="mt-4">
                          <div
                            className={
                              "h-px w-full " +
                              (hotelInfo.backgroundColor === "primary"
                                ? "bg-primary"
                                : `bg-[${hotelInfo.backgroundColor}]`)
                            }
                          ></div>
                        </div>
                        <p className="mt-4 text-white leading-5 text-sm tracking-wide">
                          Servicios de este hotel
                        </p>
                        <div className="mt-2.5 flex items-center">
                          {hotelInfo.servicesIcon?.map((icon, index) => {
                            return (
                              <div
                                key={index}
                                className={index > 0 ? "ml-2.5" : ""}
                              >
                                <Image
                                  src={icon.url}
                                  alt={icon.alt}
                                  width={24}
                                  height={24}
                                  objectFit="contain"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HotelSectionDesktop;
