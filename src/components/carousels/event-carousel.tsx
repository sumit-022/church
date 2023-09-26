import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "../atoms/cards/event-card";
import { Pagination } from "swiper/modules";

const EventCarousel = ({ data }: { data: EventCardProps[] }) => {
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
        {data.map((event) => (
          <SwiperSlide key={event.title}>
            <EventCard {...event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EventCarousel;
