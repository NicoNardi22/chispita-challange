import type { NextApiRequest, NextApiResponse } from "next";

interface Images {
  url: string;
  alt: string;
}
export interface HotelData {
  img: Images;
  logo: Images;
  wording: string;
  details: Array<string>;
  price: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<HotelData>>
) {
  res.status(200).json([
    {
      img: {
        url: "/assets/Hotels/urban-picture.png",
        alt: "Espacio recreativo de hotel Urban",
      },
      logo: {
        url: "/assets/urban-logo-dark.png",
        alt: "Logo de hotel Urban",
      },
      wording:
        "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
      details: [
        "Habitaciones VIP",
        "Piscina Climatizada",
        "Salón de eventos",
        "Espacio Coworking",
        "Wifi gratís",
      ],
      price: 4560,
    },
    {
      img: {
        url: "/assets/Hotels/tribe-picture.png",
        alt: "Mujer contemplando el atardecer en la montaña",
      },
      logo: {
        url: "/assets/tribe-logo-dark.png",
        alt: "Logo de hotel Tribe",
      },
      wording:
        "Exploradores, artistas y emprendedores juntos en un lugar único.",
      details: [
        "Habitaciones VIP",
        "Piscina",
        "Gastronomía Vegana",
        "Wifi gratís",
      ],
      price: 3190,
    },
    {
      img: {
        url: "/assets/Hotels/family-picture.png",
        alt: "Familia paseando en bicicletas",
      },
      logo: {
        url: "/assets/family-logo-dark.png",
        alt: "Logo de hotel Family",
      },
      wording:
        "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
      details: [
        "Habitaciones VIP",
        "Piscina Climatizada",
        "Actividades",
        "Spa",
        "Cancha de golf",
        "Wifi gratís",
      ],
      price: 4560,
    },
  ]);
}
