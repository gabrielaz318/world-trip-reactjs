import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      h={["163px", "163px", "335px"]}
      bgImage="/images/banner2.jpg"
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      p={["1.75rem 1rem", "1.75rem 1rem", "5rem 8.75rem 0"]}
      w="100%"
    >
      <Flex direction="column">
        <Heading
          fontWeight="medium"
          lineHeight={[8, 8, "tall"]}
          fontSize={["xl", "xl", "4xl"]}
          color="gray.50"
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text
          maxW={["333px", "333px", "524px"]}
          fontSize={["sm", "sm", "xl"]}
          lineHeight={[5, 5, 8]}
          mt={[2, 2, 5]}
          color="gray.100"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideVersion && (
        <Image
          src="/images/airplane.svg"
          h={{ md: "160px", lg: "293px" }}
          ml="auto"
          alt="Imagem de um avião"
        />
      )}
    </Flex>
  );
}
