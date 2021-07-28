import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Image,
  Box,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Header } from "../../components/Header";
import { City100 } from "../../components/City100";
import { api } from "../../services/api";

interface Continent {
  id: number;
  slug: string;
  name: string;
  img: string;
  shortDescription: string;
  description: string;
  banner: string;
}

interface City {
  name: string;
  country: string;
  img: string;
  avatar: string;
}

export default function Continent() {
  const [continent, setContinent] = useState({} as Continent);

  const { query } = useRouter(); // {id: "1"}
  const { id } = query;
  useEffect(() => {
    let montado = true;

    async function getContinent() {
      try {
        const res = await api.get(`/continents/${id}`);

        if (montado) {
          setContinent(res.data);
        }
      } catch (e) {
        console.log("Erro: ", e);
      }
    }

    getContinent();

    return () => {
      montado = false;
    };
  }, [id]);

  const [cities100, setCities100] = useState<City[]>([]);

  useEffect(() => {
    let montado = true;

    async function getCities100() {
      try {
        const res = await api.get("/cities");
        if (montado) {
          setCities100(res.data);
        }
      } catch (e) {
        console.log("Erro: ", e);
      }
    }

    getCities100();

    return () => {
      montado = false;
    };
  }, []);
  return (
    <>
      <Head>
        <title>Worldtrip Continentes</title>
      </Head>
      <Header />
      <main>
        <Box>
          <Image
            src={continent.banner}
            alt={continent.name}
            h={{ base: "150px", lg: "500px" }}
            w="100%"
            position="relative"
          />
          {/* Na imagem exportada da Europa, já vem o nome */}
          {id !== "5" && (
            <Text
              fontWeight={600}
              fontSize={{ base: "28px", lg: "48px" }}
              color="#F5F8FA"
              position="absolute"
              left={{ base: "136px", lg: "140px" }}
              top={{ base: "106px", lg: "469px" }}
            >
              {continent.name}
            </Text>
          )}
        </Box>
        <Box maxWidth={{ base: "350px", lg: "1120px" }} mx="auto">
          <Flex
            mt={{ base: "24px", lg: "80px" }}
            align="center"
            direction={{ base: "column", lg: "row" }}
          >
            <Text
              fontWeight={400}
              fontSize={{ base: "14px", lg: "24px" }}
              lineHeight={{ base: "21px", lg: "36px" }}
              color="#47585B"
              maxWidth={600}
            >
              {continent.description}
            </Text>
            <Flex ml={{ lg: "70px" }} mt={{ base: "16px" }}>
              <Flex direction="column" align={{ lg: "center" }} ml="42px">
                <Text
                  color="#FFBA08"
                  fontSize={{ base: "24px", lg: "48px" }}
                  fontWeight={600}
                >
                  50
                </Text>
                <Text fontWeight={600} color="#47585B">
                  países
                </Text>
              </Flex>
              <Flex direction="column" align={{ lg: "center" }} ml="42px">
                <Text
                  color="#FFBA08"
                  fontSize={{ base: "24px", lg: "48px" }}
                  fontWeight={600}
                >
                  60
                </Text>
                <Text fontWeight={600} color="#47585B">
                  línguas
                </Text>
              </Flex>
              <Flex direction="column" align={{ lg: "center" }} ml="42px">
                <Text
                  color="#FFBA08"
                  fontSize={{ base: "24px", lg: "48px" }}
                  fontWeight={600}
                >
                  27
                </Text>
                <Flex align="center">
                  <Text fontWeight={600} color="#47585B">
                    cidades + 100
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
              </Flex>
            </Flex>
          </Flex>

          <Box
            mt={{ base: "32px", lg: "80px" }}
            mb={{ base: "16px", lg: "35px" }}
          >
            <Heading
              fontWeight={500}
              fontSize={{ base: "24px", lg: "36px" }}
              color="#47585B"
            >
              Cidades + 100
            </Heading>
            <SimpleGrid
              columns={{ base: 1, lg: 4 }}
              mt={{ base: "20px", lg: "40px" }}
              spacing={{ base: "20px", lg: "45px" }}
              mx={{ base: "60px", lg: "0px" }}
            >
              {cities100.map((city) => (
                <City100 city={city} key={city.name} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </main>
    </>
  );
}
