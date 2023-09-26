import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "../atoms/cards/event-card";
import { Pagination, Navigation } from "swiper/modules";

const EventCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        slidesPerGroup={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EventCarousel;
