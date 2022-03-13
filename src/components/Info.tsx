import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type InfoProps = {
  children?: ReactNode;
  title: string;
  value: number;
};

export function Info({ children, title, value }: InfoProps) {
  return (
    <Flex
      direction="column"
      alignItems={["flex-start", "flex-start", "center"]}
    >
      <Text
        fontSize={["2xl", "2xl", "5xl"]}
        fontWeight="semibold"
        color="yellow.800"
      >
        {value}
      </Text>
      <Box
        fontSize={["lg", "lg", "2xl"]}
        fontWeight={{ lg: "semibold" }}
        color="gray.600"
      >
        {title}
        {children}
      </Box>
    </Flex>
  );
}
