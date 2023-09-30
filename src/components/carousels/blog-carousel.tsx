import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard from "../atoms/cards/blog-card";
import useMediaQuery from "@/hooks/use-media-query";

interface Props {
  nextRef: React.RefObject<HTMLDivElement>;
  prevRef: React.RefObject<HTMLDivElement>;
  data: BlogCardProps[];
}

const BlogCarousel = ({ nextRef, prevRef, data }: Props) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Navigation]}
        navigation={{
          nextEl: nextRef?.current,
          prevEl: prevRef?.current,
        }}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        slidesPerGroup={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogCarousel;
