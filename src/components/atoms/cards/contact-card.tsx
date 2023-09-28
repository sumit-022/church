import React, { Ref } from "react";
import image from "@/assets/images/home/bg/contact_bg4.jpg";
import Image from "next/image";
import Input from "../input";

const ContactCard = () => {
  return (
    <div className="w-full -mt-36 relative z-10 pb-8">
      <div className="w-[85%] bg-white mx-auto rounded-md overflow-hidden shadow-md grid grid-cols-[2fr,1fr]">
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
        <Image src={image} alt="contact" />
      </div>
    </div>
  );
};

export default ContactCard;
