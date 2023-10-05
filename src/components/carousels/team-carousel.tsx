import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TeamCard from "../atoms/cards/team-card";
import "swiper/swiper-bundle.css";
import { useRouter } from "next/router";
import useMediaQuery from "@/hooks/use-media-query";

const TeamCarousel = ({ data }: { data: TeamCardProps[] }) => {
  const isHome = useRouter().pathname === "/";
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <Swiper
      spaceBetween={25}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
      slidesPerGroup={isMobile ? 1 : isTablet ? 2 : 3}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <TeamCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamCarousel;
