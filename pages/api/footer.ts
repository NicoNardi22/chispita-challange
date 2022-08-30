import type { NextApiRequest, NextApiResponse } from "next";

interface Logo {
  url: string;
  alt: string;
}

export type FooterData = {
  logo: Logo;
  wording: string;
  networkIcons: {
    youtube: Logo;
    facebook: Logo;
    twitter: Logo;
    instagram: Logo;
  };
  us: {
    telephone: string;
    email: string;
  };
  urls: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FooterData>
) {
  res.status(200).json({
    logo: {
      url: "/assets/Logo.png",
      alt: "Nomad logo",
    },
    wording:
      "Here we should have a few words about what and who the company is. This should serve well for SEO purposes.",
    networkIcons: {
      youtube: {
        url: "/assets/youtube-icon.png",
        alt: "Youtube logo",
      },
      facebook: {
        url: "/assets/facebook-icon.png",
        alt: "Facebook logo",
      },
      twitter: {
        url: "/assets/twitter-icon.png",
        alt: "Twitter logo",
      },
      instagram: {
        url: "/assets/instagram.icon.png",
        alt: "Instagram logo",
      },
    },
    us: {
      telephone: "(054) 1234567",
      email: "info@nomadperu.com.pe",
    },
    urls: [
      "/alojate",
      "/co-work",
      "/experimenta",
      "/unete",
      "/inversores",
    ],
  });
}
