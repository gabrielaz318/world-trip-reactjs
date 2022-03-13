import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { City } from "../models/City";

type CitiesProps = {
  cities: City[];
};

export function Cities({ cities }: CitiesProps) {
  return (
    <>
      <Heading mt="20" fontSize="4xl" fontWeight="medium" lineHeight="tall">
        Cidades +100
      </Heading>
      <Flex
        mt="10"
        //columns={[1, null, 4]}
        gridColumnGap="8"
        gridRowGap="8"
        //spacing="30px"
        mx={["auto", "auto", 0]}
        justify={["center", "center", "flex-start"]}
        flexWrap="wrap"
      >
        {cities.map((city) => (
          <Box borderRadius="4px" w="256px" overflow="hidden" key={city.id}>
            <Image
              src={`${city.image}`}
              alt={`${city.name}, ${city.country}`}
              h="173px"
              w="100%"
              fit="cover"
            />
            <Flex
              justify="space-between"
              alignItems="center"
              p="4"
              border="1px"
              borderColor="yellow.300"
              borderTop="0"
              borderBottomRadius="4px"
            >
              <Box>
                <Heading fontSize="xl" fontWeight="semibold">
                  {city.name}{" "}
                  <Text as="span" fontSize="xs">
                    {city.id}º
                  </Text>
                </Heading>
                <Text
                  fontSize="md"
                  mt="3"
                  color="gray.700"
                  isTruncated
                  maxW="180px"
                >
                  {city.country}
                </Text>
              </Box>

              <Image
                src={`https://flagcdn.com/${city.countryCode}.svg`}
                alt="sdadsa"
                h="30px"
                w="30px"
                fit="cover"
                borderRadius="100%"
              />
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
}
