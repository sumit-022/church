import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import image1 from "@/assets/images/carousels/home/1.jpg";
import image2 from "@/assets/images/carousels/home/2.jpg";
import image3 from "@/assets/images/carousels/home/3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMediaQuery from "@/hooks/use-media-query";

const Carousel = () => {
  const isTablet = useMediaQuery("(min-width: 700px)");
  return (
    <div className="w-full min-h-[400px]">
      <Swiper
        className="mySwiper md:h-full h-[400px]"
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="w-full relative">
            <Image src={image1} alt="image" className="w-full min-h-[400px]" />
            <div className="absolute w-full top-0 bottom-0">
              <div className="flex flex-col items-center gap-3 h-full justify-center p-3">
                <p className="text-[#dcb170] md:text-2xl text-lg font-bold">
                  We&apos;re Building them a Home
                </p>
                <p className="text-white sm:text-2xl md:text-3xl text-xl text-center font-bold">
                  We call Price, the Lord
                </p>
                <p className="text- text-center text-white">
                  Jesus is holy, loving, and worthy of all our worship and
                  devotion. You will feel the heaven in our CSI Abu Dhabi
                  Church. Join with us and praise the Lord Jesus
                </p>
                <button className="bg-black text-white px-3 py-2 text rounded-md mt-2">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="image" className="w-full min-h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image3}
            alt="image"
            className="w-full md: min-h-[400px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
