import type { NextApiRequest, NextApiResponse } from "next";

interface Logo {
  url: string;
  alt: string;
}

export interface BannerSlide {
  img: {
    url: string;
    alt: string;
  };
  title: string;
  detail?: string;
}

export interface HotelData {
  img: {
    url: string;
    alt: string;
  };
  title: Logo;
  widthTitle: {
    desktop: number;
    mobile: number;
  };
  heightTitle: {
    desktop: number;
    mobile: number;
  };
  location: string;
  backgroundColor: string;
  detail?: string;
  servicesIcon?: Array<Logo>;
}

export interface HotelSection {
  title: string;
  detail: string;
  hotelsInfo: Array<HotelData>;
}

export type Data = {
  bannerDesktop: Array<BannerSlide>;
  bannerMobile: Array<BannerSlide>;
  hotelSection: HotelSection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    bannerDesktop: [
      {
        img: {
          url: "/assets/Home/banner-desktop.png",
          alt: "Co-workers at reception",
        },
        title: "Your tribe<br />waits for you",
        detail: "Concept<br/ >Co-living",
      },
      {
        img: {
          url: "/assets/Home/banner-desktop.png",
          alt: "Co-workers at reception",
        },
        title: "Your tribe<br />waits for you",
        detail: "Unique<br/>experiences",
      },
      {
        img: {
          url: "/assets/Home/banner-desktop.png",
          alt: "Co-workers at reception",
        },
        title: "Your tribe<br />waits for you",
        detail: "Gastronomy<br/ >multi-format",
      },
    ],
    bannerMobile: [
      {
        img: {
          url: "/assets/Home/banner-mobile.png",
          alt: "Co-workers at reception",
        },
        title: "Your tribe<br />waits for you",
      },
      {
        img: {
          url: "/assets/Home/banner-mobile.png",
          alt: "Co-workers at reception",
        },
        title: "Your tribe<br />waits for you",
      },
      {
        img: {
          url: "/assets/Home/banner-mobile.png",
          alt: "Co-workers at reception",
        },
        title: "Your tribe<br />waits for you",
      },
    ],
    hotelSection: {
      title: "Hotels that are homes",
      detail:
        "Feel part of the tribe in an environment designed for you<br />to experience the trip that will change something in you.",
      hotelsInfo: [
        {
          img: {
            url: "/assets/Home/urban-slide.png",
            alt: "Woman cooking and laughing",
          },
          title: {
            url: "/assets/urban-logo.png",
            alt: "Urban hotel logo",
          },
          widthTitle: {
            desktop: 214,
            mobile: 171,
          },
          heightTitle: {
            desktop: 58,
            mobile: 48,
          },
          location: "Arequipa",
          backgroundColor: "primary",
          detail:
            "Hub of explorers, artists and professionals who see the world as their true home.",
          servicesIcon: [
            {
              url: "/assets/Home/Bed.png",
              alt: "Logo of bed",
            },
            {
              url: "/assets/Home/Silverware.png",
              alt: "Logo of cutlery",
            },
            {
              url: "/assets/Home/Horse.png",
              alt: "Logo of carousel horse",
            },
          ],
        },
        {
          img: {
            url: "/assets/Home/tribe-slide.png",
            alt: "Woman cooking and laughing",
          },
          title: {
            url: "/assets/tribe-logo.png",
            alt: "Tribe hotel logo",
          },
          widthTitle: {
            desktop: 111.36,
            mobile: 111.36,
          },
          heightTitle: {
            desktop: 49,
            mobile: 49,
          },
          location: "Arequipa",
          backgroundColor: "#ADC22F",
          detail:
            "Hub of explorers, artists and professionals who see the world as their true home.",
          servicesIcon: [
            {
              url: "/assets/Home/Bed.png",
              alt: "Logo of bed",
            },
            {
              url: "/assets/Home/Silverware.png",
              alt: "Logo of cutlery",
            },
            {
              url: "/assets/Home/Horse.png",
              alt: "Logo of carousel horse",
            },
          ],
        },
        {
          img: {
            url: "/assets/Home/family-slide.png",
            alt: "Family riding a bike",
          },
          title: {
            url: "/assets/family-logo.png",
            alt: "Family hotel logo",
          },
          widthTitle: {
            desktop: 162,
            mobile: 162,
          },
          heightTitle: {
            desktop: 61,
            mobile: 61,
          },
          location: "Arequipa",
          backgroundColor: "#AA2275",
          detail:
            "Hub of explorers, artists and professionals who see the world as their true home.",
          servicesIcon: [
            {
              url: "/assets/Home/Bed.png",
              alt: "Logo of bed",
            },
            {
              url: "/assets/Home/Silverware.png",
              alt: "Logo of cutlery",
            },
            {
              url: "/assets/Home/Horse.png",
              alt: "Logo of carousel horse",
            },
          ],
        },
      ],
    },
  });
}
