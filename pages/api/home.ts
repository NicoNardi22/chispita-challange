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

interface HotelData {
  img: {
    url: string;
    alt: string;
  };
  title: Logo;
  location: string;
  detail?: string;
  servicesIcon?: Array<Logo>;
}

interface HotelSection {
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
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu<br />te espera",
        detail: "Concepto<br/ >Co-living",
      },
      {
        img: {
          url: "/assets/Home/banner-desktop.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu<br />te espera",
        detail: "Experiencias<br/ >únicas",
      },
      {
        img: {
          url: "/assets/Home/banner-desktop.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu<br />te espera",
        detail: "Gastronomía<br/ >multi-formato",
      },
    ],
    bannerMobile: [
      {
        img: {
          url: "/assets/Home/banner-mobile.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu<br />te espera",
      },
      {
        img: {
          url: "/assets/Home/banner-mobile.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu<br />te espera",
      },
      {
        img: {
          url: "/assets/Home/banner-mobile.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu<br />te espera",
      },
    ],
    hotelSection: {
      title: "Hoteles que son hogares",
      detail:
        "Siéntete parte de la tribu en un ambiente diseñado para que experimentes el viaje que va a cambiar algo en ti.",
      hotelsInfo: [
        {
          img: {
            url: "/assets/Home/urban-slide.png",
            alt: "Mujer cocinando y riendo",
          },
          title: {
            url: "/assets/urban-logo.png",
            alt: "logo de hotel Urban",
          },
          location: "Arequipa",
        },
        {
          img: {
            url: "/assets/Home/tribe-slide.png",
            alt: "Mujer cocinando y riendo",
          },
          title: {
            url: "/assets/tribe-logo.png",
            alt: "logo de hotel Tribe",
          },
          location: "Arequipa",
          detail:
            "Hub de exploradores, artistas y profecionales que ven al mundo su verdadero hogar.",
          servicesIcon: [
            {
              url: "/assets/Home/Bed.png",
              alt: "Logo de cama",
            },
            {
              url: "/assets/Home/Silverware.png",
              alt: "Logo de cubiertos",
            },
            {
              url: "/assets/Home/Horse.png",
              alt: "Logo de caballo de carrusel",
            },
          ],
        },
        {
          img: {
            url: "/assets/Home/family-slide.png",
            alt: "Familia paseando en bicicleta",
          },
          title: {
            url: "/assets/family-logo.png",
            alt: "Logo de hotel Family",
          },
          location: "Arequipa",
        },
      ],
    },
  });
}
