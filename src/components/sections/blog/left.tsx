import React from "react";
import Image from "next/image";
import { BsFolder2 } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { TfiQuoteLeft } from "react-icons/tfi";
import image1 from "@/assets/images/sermons/pictures/sermon-single2.jpg";
import image2 from "@/assets/images/sermons/pictures/sermon-single3.jpg";
import { tags } from "@/data/sermons/types";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoPinterest,
  BiLogoGooglePlus,
  BiLogoLinkedin,
} from "react-icons/bi";
import BlogReply from "@/components/forms/blog-reply";

const LeftContent = ({
  author,
  category,
  date,
  authoricon,
  comments,
  image,
  description1,
  description2,
}: BlogCardProps) => {
  const bloginfo = [
    {
      icon: (
        <Image
          src={authoricon}
          alt="author"
          width={30}
          height={30}
          className="rounded-full"
        />
      ),
      value: author,
    },
    {
      icon: <BsFolder2 className="text-primary-yellow" />,
      value: category.join(", "),
    },
    {
      icon: <LuClock3 className="text-primary-yellow" />,
      value: date,
    },
  ];
  return (
    <div className="w-[70%]">
      <div className="relative">
        <Image src={image} alt="blog" width={400} className="rounded-md" />
        <div className="bg-white p-3 flex items-center justify-center gap-4 rounded-md shadow-md absolute -bottom-8 w-[85%] left-10 z-10">
          {bloginfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-500">
              {item.icon}
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <p className="text-primary-grey">{description1}</p>
        <div className="my-8 w-[90%] mx-auto relative flex flex-col gap-4">
          <p className="text-primary-grey text-[22px] italic font-bold relative">
            <span className="text-black">D</span>on’t quit, and don’t give up.
            The reward is just around the corner. And in times of doubt or times
            of joy, listen for that still.
          </p>
          <div className="absolute opacity-20 top-2 -left-14">
            <TfiQuoteLeft size={80} />
          </div>
          <p className="text-primary-grey text-[22px] italic font-bold relative">
            <span className="text-black">M</span>ark Johnson
          </p>
        </div>
        <p className="my-7 text-primary-grey">{description2}</p>
      </div>
      <div className="flex gap-6">
        <Image src={image1} alt="blog" width={400} className="rounded-md" />
        <Image src={image2} alt="blog" width={400} className="rounded-md" />
      </div>
      <div className="flex my-7 justify-between">
        <div className="flex gap-3 items-center">
          {tags?.map((item, index) => (
            <span key={index} className="text-primary-grey text-sm">
              #{item}
            </span>
          ))}
          <Link
            href="/#"
            className="text-primary-grey hover:text-primary-yellow duration-300 transition-all text-sm font-bold"
          >
            Comments({comments})
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full p-1 border text-sm">
            <BiLogoFacebook className="text-primary-yellow" />
          </div>
          <div className="rounded-full p-1 border text-sm">
            <BiLogoTwitter className="text-primary-yellow" />
          </div>
          <div className="rounded-full p-1 border text-sm">
            <BiLogoFacebook className="text-primary-yellow" />
          </div>
          <div className="rounded-full p-1 border text-sm">
            <BiLogoPinterest className="text-primary-yellow" />
          </div>
          <div className="rounded-full p-1 border text-sm">
            <BiLogoGooglePlus className="text-primary-yellow" />
          </div>
          <div className="rounded-full p-1 border text-sm">
            <BiLogoLinkedin className="text-primary-yellow" />
          </div>
        </div>
      </div>
      <BlogReply />
    </div>
  );
};

export default LeftContent;
