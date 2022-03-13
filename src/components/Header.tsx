import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Flex
      bg="white"
      align="center"
      justify="center"
      h={["50px", "50px", "100px"]}
      position="relative"
    >
      {showBackButton && (
        <Box position="absolute" left={[5, 5, 40]}>
          <Link href="/">
            <a title="Voltar para a Home">
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[16, 16, 32]}
                color="gray.600"
              />
            </a>
          </Link>
        </Box>
      )}
      <Image
        src="/images/logo.svg"
        h={["20px", "20px", "46px"]}
        alt="Logo da Worldtrip"
      />
    </Flex>
  );
}
