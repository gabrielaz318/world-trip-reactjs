import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Continent } from "../../models/Continent";
import { api } from "../../services/api";

import { Popover100Cities } from "../../components/Popover100Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Cities } from "../../components/Cities";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

type ContinentPageProps = {
  continent: Continent;
};

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <Flex direction="column" mb={[6, 6, 10]}>
        <Header showBackButton />
        <ContinentBanner continent={continent} />
        <Flex
          width="100%"
          maxW="1160px"
          mt={[6, 6, 20]}
          mx="auto"
          px="4"
          direction="column"
        >
          <SimpleGrid
            flex="1"
            columnGap="20"
            rowGap="4"
            minChildWidth={["300px", "300px", "490px"]}
          >
            <Text
              width="100%"
              maxW="600px"
              fontSize={["sm", "sm", "2xl"]}
              lineHeight={[5, 5, 9]}
              align="justify"
            >
              {continent.description}
            </Text>
            <Flex justify="space-between" alignItems="center">
              <Info title="países" value={continent.countries} />
              <Info title="línguas" value={continent.languages} />
              <Info title="cidades +100" value={continent.cities.length}>
                <Popover100Cities />
              </Info>
            </Flex>
          </SimpleGrid>
          <Cities cities={continent.cities} />
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: continents } = await api.get<Continent[]>("/continents");

  return {
    fallback: "blocking",
    paths: continents.map((continent) => ({
      params: {
        slug: continent.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<ContinentPageProps> = async ({
  params,
}) => {
  const { slug } = params;
  try {
    const { data: continent } = await api.get<Continent>(`/continents/${slug}`);

    return {
      props: {
        continent,
      },
      revalidate: 1 * 60 * 60 * 24, //1 day
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
