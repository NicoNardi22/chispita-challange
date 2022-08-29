import type { BannerSlide } from "../pages/api/home";
import { useContext, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import UserContext from "./UserContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Hero = ({
  bannerDesktop,
  bannerMobile,
}: {
  bannerDesktop: BannerSlide[];
  bannerMobile: BannerSlide[];
}) => {
  const { screen } = useContext(UserContext);

  const emptyBannerSlide: BannerSlide = useMemo(() => {
    return {
      img: {
        url: "",
        alt: "",
      },
      title: "",
    };
  }, []);

  const [swiperSlides, setSwiperSlides] = useState([emptyBannerSlide]);
  const [activeSlide, setActiveSlide] = useState("0");
  const [swiper, setSwiper] = useState<SwiperCore>();

  useEffect(() => {
    setSwiperSlides(
      screen && screen.width != undefined
        ? screen.width >= 960
          ? bannerDesktop
          : bannerMobile
        : [emptyBannerSlide]
    );
  }, [screen, bannerDesktop, bannerMobile, emptyBannerSlide]);

  return (
    <div>
      <Swiper
        className="swiper-hero"
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
        }}
        onSlideChange={(event) => {
          setActiveSlide(event.activeIndex.toString());
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {swiperSlides.map((slide: BannerSlide, index: number) => {
          return (
            <SwiperSlide key={index} className="relative">
              <Image
                src={slide.img.url}
                alt={slide.img.alt}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={slide.img.url}
              />
              <div className="container">
                <div className="absolute top-[430px] xmd:top-[290px]">
                  <p
                    className="text-white font-bold text-6xl xmd:text-8xl"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  ></p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="absolute top-[650px] xmd:top-[643px] container z-10">
          <div className="flex gap-10">
            {swiperSlides.map((slide: BannerSlide, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    "cursor-pointer text-white tracking-wider xmd:tracking-wide text-sm xmd:text-base font-semibold xmd:font-normal " +
                    (activeSlide === index.toString() ? "" : "opacity-25")
                  }
                  onClick={() => {
                    if (swiper != undefined) swiper.slideTo(index);
                  }}
                >
                  <div>
                    <p>{index + 1}</p>
                  </div>
                  <div className="mt-1">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: slide.detail ? slide.detail : "",
                      }}
                    ></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
