import { Text, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

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

export function ContinentSwiper() {
  return (
    <Swiper cssMode navigation pagination={{ clickable: true }}>
      <SwiperSlide className="north-america">
        <Heading
          fontSize={48}
          fontWeight={700}
          lineHeight="72px"
          color="#F5F8FA"
        >
          América do Norte
        </Heading>
        <Text
          mt={16}
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          color="#DADADA"
        >
          Um mundo de atrações.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="south-america">
        <Heading
          fontSize={48}
          fontWeight={700}
          lineHeight="72px"
          color="#F5F8FA"
        >
          América do Sul
        </Heading>
        <Text
          mt={16}
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          color="#DADADA"
        >
          Lugares incríveis.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="asia">
        <Heading
          fontSize={48}
          fontWeight={700}
          lineHeight="72px"
          color="#F5F8FA"
        >
          Ásia
        </Heading>
        <Text
          mt={16}
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          color="#DADADA"
        >
          Cuturas diversas.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="africa">
        <Heading
          fontSize={48}
          fontWeight={700}
          lineHeight="72px"
          color="#F5F8FA"
        >
          África
        </Heading>
        <Text
          mt={16}
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          color="#DADADA"
        >
          Natureza exuberante.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="europe">
        <Heading
          fontSize={48}
          fontWeight={700}
          lineHeight="72px"
          color="#F5F8FA"
        >
          Europa
        </Heading>
        <Text
          mt={16}
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          color="#DADADA"
        >
          O continente mais antigo.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="oceania">
        <Heading
          fontSize={48}
          fontWeight={700}
          lineHeight="72px"
          color="#F5F8FA"
        >
          Oceania
        </Heading>
        <Text
          mt={16}
          fontSize={24}
          fontWeight={700}
          lineHeight="36px"
          color="#DADADA"
        >
          O continente mais recente.
        </Text>
      </SwiperSlide>
    </Swiper>
  );
}
