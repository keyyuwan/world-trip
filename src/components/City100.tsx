import { Box, Image, Text, Flex, Heading, Avatar } from "@chakra-ui/react";

interface City {
  name: string;
  country: string;
  img: string;
  avatar: string;
}

interface City100Props {
  city: City;
}

export function City100({ city }: City100Props) {
  return (
    <Flex w={256} bgColor="white" borderRadius="4px" direction="column">
      <Image src={city.img} alt={city.name} />
      <Flex
        border="1px solid rgba(255, 186, 8, 0.5);"
        h={106}
        align="center"
        justify="space-between"
        borderRadius="0 0 4px 4px"
        p="16px"
      >
        <Box>
          <Heading
            fontWeight={600}
            fontSize={20}
            fontFamily="Barlow"
            color="#47585B"
          >
            {city.name}
          </Heading>
          <Text
            fontWeight={500}
            fontSize={16}
            fontFamily="Barlow"
            color="#47585B"
            mt="12px"
          >
            {city.country}
          </Text>
        </Box>
        <Avatar src={city.avatar} alt={city.name} h={30} w={30} />
      </Flex>
    </Flex>
  );
}
