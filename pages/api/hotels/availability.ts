import type { NextApiRequest, NextApiResponse } from "next";

interface Images {
  url: string;
  alt: string;
}
interface HotelData {
  img: Images;
  wording: string;
  details: Array<string>;
  price: number;
}

type Hotels = {
  urban: HotelData;
  tribe: HotelData;
  family: HotelData;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hotels>
) {
  res.status(200).json({
    urban: {
      img: {
        url: "/public/assets/Hotels/urban-picture.png",
        alt: "Espacio recreativo de hotel Urban",
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
    tribe: {
      img: {
        url: "/public/assets/Hotels/tribe-picture.png",
        alt: "Mujer contemplando el atardecer en la montaña",
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
    family: {
      img: {
        url: "/public/assets/Hotels/family-picture.png",
        alt: "Familia paseando en bicicletas",
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
  });
}
