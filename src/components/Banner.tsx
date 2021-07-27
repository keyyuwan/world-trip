import { Box, Text, Image, Flex, useMediaQuery } from "@chakra-ui/react";

export function Banner() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box bgImage="/assets/sky.png" bgRepeat="no-repeat" h="368px" w="100vw">
      <Flex justify="space-around" align="center" h="100%">
        <Box>
          <Text color="#F5F8FA" fontSize="36px" fontWeight={500}>
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text color="#DADADA" fontSize="20px" mt="20px">
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
