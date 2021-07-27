import { Flex } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Flex justify="center" mt="80px">
      <Flex align="center" justify="space-between" w="1220px">
        <TravelType title="vida noturna" image="/assets/cocktail.svg" />
        <TravelType title="praia" image="/assets/surf.svg" />
        <TravelType title="moderno" image="/assets/building.svg" />
        <TravelType title="clássico" image="/assets/museum.svg" />
        <TravelType title="e mais..." image="/assets/earth.svg" />
      </Flex>
    </Flex>
  );
}
