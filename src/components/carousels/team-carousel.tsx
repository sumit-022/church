import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TeamCard from "../atoms/cards/team-card";
import "swiper/swiper-bundle.css";
import { useRouter } from "next/router";

const TeamCarousel = ({ data }: { data: TeamCardProps[] }) => {
  const isHome = useRouter().pathname === "/";
  return (
    <Swiper
      spaceBetween={25}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={isHome ? 4 : 3}
      slidesPerGroup={isHome ? 4 : 3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
