import {
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Popover100Cities() {
  return (
    <Popover id="cities">
      <PopoverTrigger>
        <span title="Abrir informações sobre as cidades +100">
          <Icon
            cursor="pointer"
            as={RiInformationLine}
            ml="1"
            color="gray.400"
            fontSize={[10, 10, 16]}
          />
        </span>
      </PopoverTrigger>
      <PopoverContent borderColor="yellow.800">
        <PopoverArrow />
        <PopoverCloseButton color="yellow.800" />
        <PopoverBody py="5" fontSize="sm" fontWeight="normal">
          Cidades +100 é uma reportagem do site{" "}
          <strong>Visual Capitalism</strong>, que mostra as 100 cidades mais
          visitadas entre 2013 e 2018. Para acessar a matéria,{" "}
          <strong>
            <a
              href="https://www.visualcapitalist.com/the-100-most-popular-city-destinations"
              target="_blank"
              rel="noreferrer"
              title="Acessar matéria dos 100 destinos mais procurados."
            >
              clique aqui.
            </a>
          </strong>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
