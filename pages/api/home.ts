import type { NextApiRequest, NextApiResponse } from "next";

interface Logo {
  url: string;
  alt: string;
}

interface BannerSlide {
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

type Data = {
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
          url: "/public/assets/Home/banner-desktop.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu te espera",
        detail: "Concepto<br/ >Co-living",
      },
      {
        img: {
          url: "/public/assets/Home/banner-desktop.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu te espera",
        detail: "Experiencias<br/ >únicas",
      },
      {
        img: {
          url: "/public/assets/Home/banner-desktop.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu te espera",
        detail: "Gastronomía<br/ >multi-formato",
      },
    ],
    bannerMobile: [
      {
        img: {
          url: "/public/assets/Home/banner-mobile.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu te espera",
        detail: "Concepto<br/ >Co-living",
      },
      {
        img: {
          url: "/public/assets/Home/banner-mobile.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu te espera",
        detail: "Experiencias<br/ >únicas",
      },
      {
        img: {
          url: "/public/assets/Home/banner-mobile.png",
          alt: "Co-workers en recepción",
        },
        title: "Tu tribu te espera",
        detail: "Gastronomía<br/ >multi-formato",
      },
    ],
    hotelSection: {
      title: "Hoteles que son hogares",
      detail:
        "Siéntete parte de la tribu en un ambiente diseñado para que experimentes el viaje que va a cambiar algo en ti.",
      hotelsInfo: [
        {
          img: {
            url: "/public/assets/Home/urban-slide.png",
            alt: "Mujer cocinando y riendo",
          },
          title: {
            url: "/public/assets/urban-logo.png",
            alt: "logo de hotel Urban",
          },
          location: "Arequipa",
        },
        {
          img: {
            url: "/public/assets/Home/tribe-slide.png",
            alt: "Mujer cocinando y riendo",
          },
          title: {
            url: "/public/assets/tribe-logo.png",
            alt: "logo de hotel Tribe",
          },
          location: "Arequipa",
          detail:
            "Hub de exploradores, artistas y profecionales que ven al mundo su verdadero hogar.",
          servicesIcon: [
            {
              url: "/public/assets/Home/Bed.png",
              alt: "Logo de cama",
            },
            {
              url: "/public/assets/Home/Silverware.png",
              alt: "Logo de cubiertos",
            },
            {
              url: "/public/assets/Home/Horse.png",
              alt: "Logo de caballo de carrusel",
            },
          ],
        },
        {
          img: {
            url: "/public/assets/Home/family-slide.png",
            alt: "Familia paseando en bicicleta",
          },
          title: {
            url: "/public/assets/family-logo.png",
            alt: "Logo de hotel Family",
          },
          location: "Arequipa",
        },
      ],
    },
  });
}
