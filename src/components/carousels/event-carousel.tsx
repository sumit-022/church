import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "../atoms/cards/event-card";
import { Pagination } from "swiper/modules";
import useMediaQuery from "@/hooks/use-media-query";

const EventCarousel = ({ data }: { data: EventCardProps[] }) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        slidesPerGroup={isMobile ? 1 : isTablet ? 2 : 3}
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
