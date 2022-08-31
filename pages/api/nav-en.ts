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
      "/stay",
      "/co-work",
      "/experience/city-host",
      "/experience/activities",
      "/experience/gastronomy",
      "/experience/events",
      "/join-up",
    ],
  });
}
