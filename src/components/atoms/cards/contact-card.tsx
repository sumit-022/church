import React, { Ref } from "react";
import image from "@/assets/images/home/bg/contact_bg4.jpg";
import Image from "next/image";
import Input from "../input";

const ContactCard = () => {
  return (
    <div className="w-[85%] mx-auto flex md:flex-row flex-col rounded-md md:gap-0 gap-6 md:-mt-36 -mt-20 relative z-10 pb-8">
      <div className="bg-white mx-auto overflow-hidden md:rounded-l-md rounded-md shadow-md w-full">
        <div className="px-4 py-6 flex flex-col justify-center gap-4">
          <Input name="name" placeholder="Name" type="text" />
          <Input name="email" placeholder="Email" type="email" />
          <Input name="phone" placeholder="Phone" type="text" />
          <Input type="textarea" name="message" placeholder="Your Message" />
          <div>
            <button className="bg-primary-yellow text-white font-semibold p-3 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Image src={image} alt="contact" className="md:rounded-r-md rounded-md md:w-auto w-full md:h-full h-[500px]" />
    </div>
  );
};

export default ContactCard;
