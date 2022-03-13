import { Flex, Heading } from "@chakra-ui/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Continent } from "../models/Continent";

SwiperCore.use([Autoplay, Navigation, Pagination]);

type CarouselProps = {
  continents: Continent[];
};

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex
      maxW="1240px"
      width="100%"
      h={["250px", "250px", "450px"]}
      mx="auto"
      mt={[5, 5, 14]}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      >
        {continents.map((continent) => (
          <SwiperSlide
            style={{ width: "100%", height: "100%" }}
            key={continent.id}
          >
            <Flex
              justify="center"
              alignItems="center"
              h="100%"
              w="100%"
              bgImage={`/images/continents/${continent.image}`}
              bgSize="cover"
              bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
              direction="column"
            >
              <Flex
                h="100%"
                w="100%"
                bg="rgba(0, 0, 0, 0.4)"
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Link href={`/continents/${continent.slug}`}>
                  <a
                    title={`Acessar ${continent.name}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Heading
                      fontWeight="bold"
                      fontSize={["2xl", "2xl", "5xl"]}
                      color="gray.50"
                    >
                      {continent.name}
                    </Heading>
                    <Heading
                      mt={[3, 3, 4]}
                      fontWeight="bold"
                      fontSize={["sm", "sm", "2xl"]}
                      color="gray.100"
                    >
                      {continent.title}
                    </Heading>
                  </a>
                </Link>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
