import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export function Header() {
  const { asPath } = useRouter();
  return (
    <Flex
      as="header"
      h={100}
      align="center"
      justify="center"
      position="relative"
    >
      {asPath.startsWith("/continentes") && (
        <Link href="/">
          <Image
            src="/assets/back.svg"
            alt="Voltar"
            position="absolute"
            left={140}
            _hover={{ cursor: "pointer" }}
          />
        </Link>
      )}
      <Image src="/assets/logo.svg" alt="worldtrip" />
    </Flex>
  );
}
