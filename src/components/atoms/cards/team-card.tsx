import React from "react";
import teamimage from "@/assets/images/home/team/team-2.jpg";
import Image from "next/image";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { TfiInstagram } from "react-icons/tfi";
import { IoMdWater } from "react-icons/io";
import { BsBook } from "react-icons/bs";

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position }) => {
  return (
    <div className="flex flex-col shadow-md">
      <div className="relative">
        <Image src={image} alt="team" />
        <div className="absolute -bottom-6 w-full flex justify-center">
          <div className="relative">
            <IoMdWater className="text-7xl text-primary-yellow" />
            <div className="absolute w-full top-[40%] z-10 flex items-center justify-center">
              <BsBook className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center pt-8 pb-6 bg-white">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <h2 className="text-lg text-primary-grey">{position}</h2>
        </div>
        <div className="flex w-[85%] justify-evenly">
          <BiLogoFacebook />
          <FiTwitter />
          <TfiInstagram />
          <BiLogoLinkedin />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
