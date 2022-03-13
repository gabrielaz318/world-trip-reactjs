import { Box, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Characteristics } from "../components/Characteristics";
import { Carousel } from "../components/Carousel";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

import { Continent } from "../models/Continent";
import { api } from "../services/api";

type HomeProps = {
  continents: Continent[];
};

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column" mb={[6, 6, 10]}>
      <Header />
      <Banner />
      <Characteristics />
      <Box height="2px" w="90px" bg="gray.600" mx="auto" mt={[9, 9, 20]} />
      <Text
        m="0 auto"
        fontSize={["2xl", "2xl", "4xl"]}
        textAlign="center"
        fontWeight="medium"
        mt={[6, 6, 14]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Carousel continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: continents } = await api.get<Continent[]>("/continents");

  return {
    props: {
      continents,
    },
  };
};
