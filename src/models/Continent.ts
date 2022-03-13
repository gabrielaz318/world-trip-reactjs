import { City } from "./City";

export type Continent = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  countries: number;
  languages: number;
  cities: City[];
};
