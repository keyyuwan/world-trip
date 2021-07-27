import Head from "next/head";
import { Text, Box } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Divider } from "../components/Divider";
import { ContinentSwiper } from "../components/ContinentSwiper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <TravelTypes />

        <Divider />

        <Box textAlign="center" my="52px">
          <Text
            fontWeight={500}
            fontSize="36px"
            lineHeight="54px"
            color="#47585B"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Box>
        <ContinentSwiper />
      </main>
    </div>
  );
}
