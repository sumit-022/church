import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard from "../atoms/cards/blog-card";

interface Props {
  nextRef: React.RefObject<HTMLDivElement>;
  prevRef: React.RefObject<HTMLDivElement>;
  data: BlogCardProps[];
}

const BlogCarousel = ({ nextRef, prevRef, data }: Props) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Navigation]}
        navigation={{
          nextEl: nextRef?.current,
          prevEl: prevRef?.current,
        }}
        slidesPerView={3}
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
