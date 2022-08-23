import type { NextApiRequest, NextApiResponse } from "next";

type NavUrls = {
  urls: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NavUrls>
) {
  res.status(200).json({
    urls: [
      "/alojate",
      "/co-work",
      "/experimenta/city-host",
      "/experimenta/actividades",
      "/experimenta/gastronomia",
      "/experimenta/eventos",
      "/unete",
    ],
  });
}
