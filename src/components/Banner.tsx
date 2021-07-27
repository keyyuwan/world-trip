import { Box, Text, Image, Flex, useMediaQuery } from "@chakra-ui/react";

export function Banner() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      bgImage="/assets/sky.png"
      bgRepeat="no-repeat"
      h={{ base: "163px", lg: "368px" }}
      w="100vw"
    >
      <Flex
        justify={{ base: "flex-start", lg: "space-around" }}
        align="center"
        h="100%"
        p={{ base: "16px" }}
      >
        <Box>
          <Text
            color="#F5F8FA"
            fontSize={{ base: "20px", lg: "36px" }}
            fontWeight={500}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            color="#DADADA"
            fontSize={{ base: "14px", lg: "20px" }}
            mt="20px"
          >
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.{" "}
          </Text>
        </Box>
        {!isMobile[0] ? (
          <Image src="/assets/airplane.svg" alt="Avião" alignSelf="flex-end" />
        ) : null}
      </Flex>
    </Box>
  );
}
