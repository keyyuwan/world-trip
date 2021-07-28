import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface StatisticsProps {
  number: string;
  text: string;
  isCity100?: boolean;
}

export function Statistics({ number, text, isCity100 }: StatisticsProps) {
  return (
    <Flex direction="column" align={{ lg: "center" }} ml="42px">
      <Text
        color="#FFBA08"
        fontSize={{ base: "24px", lg: "48px" }}
        fontWeight={600}
      >
        {number}
      </Text>
      {!isCity100 ? (
        <Text fontWeight={600} color="#47585B">
          {text}
        </Text>
      ) : (
        <Flex align="center">
          <Text fontWeight={600} color="#47585B">
            {text}
          </Text>
          <Tooltip
            label="Cidades deste continente que estão entre as 100 mais visitadas do mundo."
            bgColor="#47585B"
            color="white"
            p="16px"
            borderRadius={4}
          >
            <InfoOutlineIcon ml="8px" />
          </Tooltip>
        </Flex>
      )}
    </Flex>
  );
}
