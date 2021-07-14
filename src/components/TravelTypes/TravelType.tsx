import { Box, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  title: string;
  image: string;
}

export function TravelType({ title, image }: TravelTypeProps) {
  return (
    <Box textAlign="center">
      <Image src={image} alt="title" />
      <Text fontSize={24} fontWeight={600}>
        {title}
      </Text>
    </Box>
  );
}
