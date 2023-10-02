import Section from "@/components/atoms/wrappers/section";
import BlogCarousel from "@/components/carousels/blog-carousel";
import React, { useCallback, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import data from "@/data/blog/blog";
import { clsx } from "clsx";
import { SwiperRef } from "swiper/react";

const Blog = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <Section>
      <h3 className="text-xl text-primary-yellow text-center font-semibold uppercase">
        Our Blog
      </h3>
      <h1 className="text-3xl text-center my-7 font-bold">Latest Posts</h1>
      <span className="border-line block my-7 mx-auto"></span>
      <div className="relative">
        <div className="absolute flex gap-4 top-0 -mt-16 right-0">
          <div
            className={clsx(
              "w-10 text-white rounded-md h-10 cursor-pointer flex hover:bg-black transition-all duration-200 justify-center items-center bg-primary-yellow rotate-45"
            )}
            onClick={handlePrev}
          >
            <AiOutlineLeft className="-rotate-45" />
          </div>
          <div
            className={clsx(
              "w-10 text-white cursor-pointer rounded-md h-10 flex justify-center items-center bg-primary-yellow hover:bg-black transition-all duration-200 rotate-45"
            )}
            onClick={handleNext}
          >
            <AiOutlineLeft className="rotate-[135deg]" />
          </div>
        </div>
        <BlogCarousel data={data} sliderRef={sliderRef} />
      </div>
    </Section>
  );
};

export default Blog;
