import { Box, Text, Image, Flex } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box bgImage="/assets/sky.png" bgRepeat="no-repeat" h={368} w="100%">
      <Flex justify="space-around" align="center" h="100%">
        <Box>
          <Text color="#F5F8FA" fontSize={36} fontWeight={500}>
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text color="#DADADA" fontSize={20} mt={20}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.{" "}
          </Text>
        </Box>
        <Image src="/assets/airplane.svg" alt="Avião" alignSelf="flex-end" />
      </Flex>
    </Box>
  );
}
