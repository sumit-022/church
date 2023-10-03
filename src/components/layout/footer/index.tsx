import React from "react";
import footerbg from "@/assets/images/home/bg/footer-bg.jpg";
import Image from "next/image";
import About from "./grid/about";
import QuickLinks from "./grid/quick-links";
import LatestNews from "./grid/latest-news";
import Newsletter from "./grid/newsletter";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full">
        <Image
          src={footerbg}
          className="relative -z-20 h-full"
          alt="footer background"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="w-full h-full bg-[rgba(0,21,47,0.86)] absolute -z-10 top-0"></div>
      </div>
      <div className="lg:grid-cols-4 lg:grid flex flex-col p-10 pb-20 lg:gap-4 gap-10 text-white">
        <About />
        <QuickLinks />
        <LatestNews />
        <Newsletter />
      </div>
      <div className="bg-[#000f21] text-sm px-10 py-4">
        <div className="flex justify-between">
          <p className="text-white">Copyrights © 2023 CSI Parish Abu Dhabi</p>
          <div className="flex gap-2 items-center text-xs text-white">
            <Link href="/">Privacy</Link>
            <Link href="/">Sermons</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
