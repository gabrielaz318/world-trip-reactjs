import { NextApiRequest, NextApiResponse } from "next";

import db from "../../../../db.json";

export default async function continentsApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json(db.continents);
  } else {
    res.status(404).end();
  }
}
