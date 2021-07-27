import { useEffect, useState } from "react";
import Link from "next/link";
import { Text, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "../services/api";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
interface Continent {
  id: number;
  slug: string;
  name: string;
  img: string;
  shortDescription: string;
  description: string;
  banner: string;
}

export function ContinentSwiper() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    let montado = true;

    async function getContinents() {
      try {
        const res = await api.get("/continents");

        if (montado) {
          setContinents(res.data);
        }
      } catch (e) {
        console.log("Erro: ", e);
      }
    }

    getContinents();

    return () => {
      montado = false;
    };
  }, []);
  return (
    <Swiper cssMode navigation pagination={{ clickable: true }}>
      {continents.map((continent) => (
        <SwiperSlide className={continent.slug} key={continent.name}>
          <Link href={`/continentes/${continent.id}`}>
            <Heading
              fontSize="48px"
              fontWeight={700}
              lineHeight="72px"
              color="#F5F8FA"
              transition="200ms"
              _hover={{ cursor: "pointer", filter: "brightness(0.9)" }}
            >
              {continent.name}
            </Heading>
          </Link>
          <Text
            mt="16px"
            fontSize="24px"
            fontWeight={700}
            lineHeight="36px"
            color="#DADADA"
          >
            {continent.shortDescription}
          </Text>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
