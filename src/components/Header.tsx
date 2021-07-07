import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h={100} align="center" justify="center">
      <Image src="/assets/logo.svg" alt="worldtrip" />
    </Flex>
  );
}
