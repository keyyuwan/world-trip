import {
  Flex,
  useMediaQuery,
  Box,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Flex justify="center" mt={{ base: "36px", lg: "80px" }}>
      {!isMobile[0] ? (
        <Flex align="center" justify="space-between" w="1220px">
          <TravelType title="vida noturna" image="/assets/cocktail.svg" />
          <TravelType title="praia" image="/assets/surf.svg" />
          <TravelType title="moderno" image="/assets/building.svg" />
          <TravelType title="clássico" image="/assets/museum.svg" />
          <TravelType title="e mais..." image="/assets/earth.svg" />
        </Flex>
      ) : (
        <Box maxWidth={275} mx="auto">
          <HStack spacing="70px">
            <Flex align="center">
              <Image src="/assets/yellow_circle.png" alt="ponto" />
              <Text ml="8px" fontSize="18px" fontWeight={500}>
                vida noturna
              </Text>
            </Flex>
            <Flex align="center">
              <Image src="/assets/yellow_circle.png" alt="ponto" />
              <Text ml="8px" fontSize="18px" fontWeight={500}>
                praia
              </Text>
            </Flex>
          </HStack>
          <HStack spacing="70px" mt="25px">
            <Flex align="center">
              <Image src="/assets/yellow_circle.png" alt="ponto" />
              <Text ml="8px" fontSize="18px" fontWeight={500}>
                moderno
              </Text>
            </Flex>
            <Flex align="center">
              <Image src="/assets/yellow_circle.png" alt="ponto" />
              <Text ml="8px" fontSize="18px" fontWeight={500}>
                clássico
              </Text>
            </Flex>
          </HStack>
          <Flex align="center" mt="25px" justify="center">
            <Image src="/assets/yellow_circle.png" alt="ponto" />
            <Text ml="8px" fontSize="18px" fontWeight={500}>
              e mais...
            </Text>
          </Flex>
        </Box>
      )}
    </Flex>
  );
}
