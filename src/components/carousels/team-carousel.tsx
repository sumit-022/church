import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TeamCard from "../atoms/cards/team-card";

const EventCarousel = ({ data }: { data: TeamCardProps[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={25}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={4}
        slidesPerGroup={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <TeamCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EventCarousel;
