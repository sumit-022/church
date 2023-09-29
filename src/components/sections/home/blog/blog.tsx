import Section from "@/components/atoms/wrappers/section";
import BlogCarousel from "@/components/carousels/blog-carousel";
import React, { useImperativeHandle, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import data from "@/data/blog/blog";

const Blog = () => {
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    nextRef.current?.click();
  };

  const handlePrevClick = () => {
    prevRef.current?.click();
  };

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
            className="w-10 text-white rounded-md h-10 cursor-pointer flex hover:bg-black transition-all duration-200 justify-center items-center bg-primary-yellow rotate-45"
            ref={prevRef}
            onClick={handlePrevClick}
          >
            <AiOutlineLeft className="-rotate-45" />
          </div>
          <div
            className="w-10 text-white cursor-pointer rounded-md h-10 flex justify-center items-center bg-primary-yellow hover:bg-black transition-all duration-200 rotate-45"
            ref={nextRef}
            onClick={handleNextClick}
          >
            <AiOutlineLeft className="rotate-[135deg]" />
          </div>
        </div>
        <BlogCarousel nextRef={nextRef} prevRef={prevRef} data={data} />
      </div>
    </Section>
  );
};

export default Blog;
