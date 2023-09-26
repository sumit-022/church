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

const Carousel = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-full relative">
            <Image src={image1} alt="image" className="w-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <p className="text-[#dcb170] text-[45px] font-bold">
                  We&apos;re Building them a Home
                </p>
                <p className="text-white text-[72px] font-bold">
                  We call Price, the Lord
                </p>
                <p className="text-[25px] text-center text-white">
                  Jesus is holy, loving, and worthy of all our worship and
                  devotion. You will feel the heaven in our CSI Abu Dhabi
                  Church. Join with us and praise the Lord Jesus
                </p>
                <button className="bg-black text-white px-5 py-3 text-2xl rounded-md mt-2">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="image" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="image" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
