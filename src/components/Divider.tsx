import { Flex, Box } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex justify="center">
      <Box
        w="90px"
        mt={{ base: "36px", lg: "80px" }}
        mb={{ base: "24px", lg: "52px" }}
        border="2px solid #47585B"
      />
    </Flex>
  );
}
