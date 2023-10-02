import React from "react";
import image from "@/assets/images/pages/about-us/bg/page-title.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import capitalizeString from "@/utils/capitalize";
import { IoMdWater } from "react-icons/io";
import { CgCross } from "react-icons/cg";

const BreadCrump = () => {
  const router = useRouter();
  const path = router.pathname.split("/");
  const breadPath = path.map((item) =>
    capitalizeString(item).replace("-", " ")
  );

  return (
    <>
      <div className="p-4 relative overflow-hidden h-[250px]">
        <Image
          src={image}
          alt="about-us"
          className="absolute -translate-y-72 top-0 left-0 -z-20"
        />
        <div className="w-full h-full bg-[rgba(0,21,47,0.86)] absolute -z-10 top-0 left-0"></div>
        <div className="flex flex-col justify-center items-center gap-4 h-full">
          <div className="flex justify-center gap-3">
            {breadPath.map((item, index) => (
              <React.Fragment key={index}>
                {item === "" ? (
                  <span className="text-primary-yellow">Home</span>
                ) : (
                  <span className="text-white">{item}</span>
                )}
                {index < breadPath.length - 1 && (
                  <span className="text-white">-</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-white text-center text-4xl font-bold">
            {breadPath[breadPath.length - 1]}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <IoMdWater className="text-primary-yellow text-8xl -translate-y-1/3 stroke-[40px] stroke-[#f9f9f9]" />
          <CgCross className=" absolute top-0 left-[24%] text-5xl flex items-center justify-center text-white" />
        </div>
      </div>
    </>
  );
};

export default BreadCrump;
