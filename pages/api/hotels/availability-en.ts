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
        alt: "Urban hotel recreational space",
      },
      logo: {
        url: "/assets/urban-logo-dark.png",
        alt: "Logo of Urban hotel",
      },
      wording:
        "High experience social hub, for millennials and executive zetas.",
      details: [
        "VIP rooms",
        "Climatized pool",
        "Event room",
        "Co-working space",
        "Free WIFI",
      ],
      price: 4560,
    },
    {
      img: {
        url: "/assets/Hotels/tribe-picture.png",
        alt: "Woman contemplating the sunset in the mountains",
      },
      logo: {
        url: "/assets/tribe-logo-dark.png",
        alt: "Logo of Tribe hotel",
      },
      wording:
        "Explorers, artists and entrepreneurs together in a unique place.",
      details: ["VIP rooms", "Pool", "Vegan Gastronomy", "Free WIFI"],
      price: 3190,
    },
    {
      img: {
        url: "/assets/Hotels/family-picture.png",
        alt: "Family riding bikes",
      },
      logo: {
        url: "/assets/family-logo-dark.png",
        alt: "Logo of Family hotel",
      },
      wording: "Live with your whole family the best experience of your lives.",
      details: [
        "VIP rooms",
        "Climatized pool",
        "Activities",
        "Spa",
        "Golf field",
        "Free WIFI",
      ],
      price: 4560,
    },
  ]);
}
