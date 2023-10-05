import React, { Ref } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard from "../atoms/cards/blog-card";
import useMediaQuery from "@/hooks/use-media-query";

interface Props {
  data: BlogCardProps[];
  sliderRef: Ref<SwiperRef>;
}

const BlogCarousel = ({ data, sliderRef }: Props) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <>
      <Swiper
        ref={sliderRef}
        spaceBetween={50}
        modules={[Navigation]}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        slidesPerGroup={1}
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
