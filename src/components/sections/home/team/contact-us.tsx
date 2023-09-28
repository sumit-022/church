import React from "react";
import Image from "next/image";
import shapetop from "@/assets/svg/shape-top.svg";
import bgimage from "@/assets/images/home/bg/bg-3.jpg";
import shapebottom from "@/assets/svg/shape-bottom.svg";
import ContactCard from "@/components/atoms/cards/contact-card";

const ContactUs = () => {
  return (
    <div className="my-10">
      <div className="relative">
        <div className="relative overflow-hidden flex flex-col">
          <Image className="w-full" src={shapetop} alt="shape" />
          <Image
            src={bgimage}
            alt="bg"
            className="w-full absolute top-0 -z-10"
          />
          <div className="w-full h-full bg-[rgba(0,21,47,0.86)] absolute -z-10 top-0"></div>
          <div className="pt-2 pb-8">
            <h3 className="text-xl text-primary-yellow text-center font-semibold uppercase">
              Contact Us
            </h3>
            <h1 className="text-3xl text-center my-4 font-bold text-white">
              Get In Touch
            </h1>
            <span className="border-line block my-7 mx-auto"></span>
          </div>
          <Image className="rotate-180 w-full" src={shapebottom} alt="shape" />
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactUs;
