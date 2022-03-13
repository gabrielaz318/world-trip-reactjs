import { Flex } from "@chakra-ui/react";

import { Characteristic } from "./Characteristic";

export function Characteristics() {
  return (
    <Flex
      w="100%"
      maxW="1160px"
      minW="275px"
      justify="space-between"
      flexWrap="wrap"
      gridColumnGap="8"
      gridRowGap="7"
      px="12"
      mx="auto"
      mt={[5, 5, 28]}
    >
      <Characteristic
        title="vida noturna"
        image="cocktail"
        description="Imagem de um drink"
        minWidth="158px"
      />
      <Characteristic
        title="praia"
        image="surf"
        description="Imagem de uma praia"
        minWidth="85px"
      />
      <Characteristic
        title="moderno"
        image="tower"
        description="Imagem de um prédio"
        minWidth="113px"
      />
      <Characteristic
        title="clássico"
        image="museum"
        description="Imagem de um museu"
        minWidth="100px"
      />
      <Characteristic
        title="e mais..."
        image="earth"
        description="Imagem do planeta Terra"
        minWidth="101px"
      />
    </Flex>
  );
}
