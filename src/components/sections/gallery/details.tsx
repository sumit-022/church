import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { SlUser } from "react-icons/sl";
import { ImAlarm } from "react-icons/im";
import { BsFolder2 } from "react-icons/bs";
import { BiPurchaseTag, BiShareAlt } from "react-icons/bi";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";

interface Props {
  date: string;
  client: string;
  duration: string;
  category: string[];
  tags: string[];
  share: {
    facebook: string;
    twitter: string;
    linkedin: string;
    pinterest: string;
  };
}

const Details: React.FC<Props> = ({
  date,
  client,
  duration,
  category,
  tags,
  share,
}) => {
  const fields = [
    {
      icon: <AiOutlineCalendar className="text-white text-lg" />,
      title: "Date",
      value: date,
    },
    {
      icon: <SlUser className="text-white" />,
      title: "Client",
      value: client,
    },
    {
      icon: <ImAlarm className="text-white" />,
      title: "Duration",
      value: duration,
    },
    {
      icon: <BsFolder2 className="text-white" />,
      title: "Category",
      value: category.join(", "),
    },
    {
      icon: <BiPurchaseTag className="text-white" />,
      title: "Tags",
      value: tags.join(", "),
    },
  ];
  return (
    <div className="w-[35%]">
      <div className="w-full py-8 flex justify-center items-center h-max bg-primary-yellow rounded-md">
        <div className="flex flex-col gap-4 text-white">
          {fields.map((field, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex gap-2 items-center">
                {field.icon}
                <p className="decoration-dashed underline text-sm">
                  {field.title}:
                </p>
              </div>
              <p className="font-bold">{field.value}</p>
            </div>
          ))}
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <BiShareAlt />
              <p className="decoration-dashed underline text-sm">Share:</p>
            </div>
            <div className="flex gap-2">
              <Link href={"#"} className="bg-white p-2 rounded-md text-sm">
                <BiLogoFacebook className="text-black" />
              </Link>
              <Link href={"#"} className="bg-white p-2 rounded-md text-sm">
                <FiTwitter className="text-black" />
              </Link>
              <Link href={"#"} className="bg-white p-2 rounded-md text-sm">
                <BiLogoPinterestAlt className="text-black" />
              </Link>
              <Link href={"#"} className="bg-white p-2 rounded-md text-sm">
                <TfiLinkedin className="text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
