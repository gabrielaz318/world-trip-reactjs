import { Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

type CharacteristicProps = {
  title: string;
  description: string;
  image: string;
  minWidth: string;
};

export function Characteristic({
  title,
  description,
  image,
  minWidth,
}: CharacteristicProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <Flex
      direction={["row", "row", "column"]}
      alignItems="center"
      justify="center"
      flex="1"
      minWidth={minWidth}
    >
      {isWideVersion && (
        <Image src={`/images/${image}.svg`} h="85px" alt={description} />
      )}
      {!isWideVersion && (
        <Image
          src="/images/ellipse.svg"
          h="8px"
          mr="2"
          alt="Marcador de item da lista"
        />
      )}
      <Heading
        fontSize={["lg", "lg", "2xl"]}
        mt={[0, 0, 6]}
        fontWeight="semibold"
      >
        {title}
      </Heading>
    </Flex>
  );
}
