import { NextApiRequest, NextApiResponse } from "next";

import db from "../../../../../db.json";

export default async function continentApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(404).end();
  }

  const { slug } = req.query;

  if (!slug) {
    res.status(400).json({ message: "Missing slug" });
    return;
  }

  const continent = db.continents.find((c) => c.slug === slug);

  if (!continent) {
    res.status(404).json({ message: "Continent not found" });
    return;
  }

  const citiesInContinent = db.cities.filter(
    (c) => c.continentId === continent.id
  );

  res.status(200).json({ ...continent, cities: citiesInContinent });
}
