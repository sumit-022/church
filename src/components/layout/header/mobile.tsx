import React, { useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import logo from "../../../assets/logo1.png";
import { BsSearch } from "react-icons/bs";
import clsx from "clsx";
import navLinks from "@/data/header/navlinks";
import LinkGroup from "@/components/atoms/dropdown/link-group";
import { AiOutlinePlus } from "react-icons/ai";
import Search from "@/components/forms/search";
import { useRouter } from "next/router";

const MobileHeader = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const router = useRouter();

  return (
    <div className="sticky bg-white z-20 shadow-md w-full top-0">
      <div className="flex items-center justify-between p-4 relative">
        <RxHamburgerMenu className="text-2xl" onClick={handleOpen} />
        <div
          className={clsx(
            "bg-white absolute top-0 h-screen left-0 shadow-md transition-all duration-300 w-80",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-end p-7 pb-4">
            <RxCross1
              className="text-xl text-primary-yellow"
              onClick={handleOpen}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" width={190} height={190} />
          </div>
          <div className="flex flex-col gap-4 py-8 px-4">
            {navLinks.map((link, index) => (
              <>
                {link.type === "link" ? (
                  <li
                    className="list-none font-semibold"
                    key={index}
                    onClick={() => router.push(link?.slug ?? "")}
                  >
                    {link.title}
                  </li>
                ) : (
                  <LinkGroup active={false} key={index}>
                    {(handleClick, open) => (
                      <li className="text-black font-semibold list-none">
                        <div
                          className="flex gap-1 cursor-pointer items-center justify-between"
                          onClick={handleClick}
                        >
                          {link.title}
                          <AiOutlinePlus />
                        </div>
                        <div
                          className={clsx(
                            "flex flex-col  pl-5 gap-4 overflow-hidden transition-all duration-300",
                            open ? "mt-5 max-h-[150px]" : "max-h-0"
                          )}
                        >
                          {(link?.children ?? []).map((subLink, index) => (
                            <li
                              className="text-black cursor-pointer font-semibold list-none"
                              key={index}
                              onClick={() => router.push(subLink?.slug ?? "")}
                            >
                              {subLink.title}
                            </li>
                          ))}
                        </div>
                      </li>
                    )}
                  </LinkGroup>
                )}
                {navLinks.length - 1 !== index && (
                  <div className="border-b border-gray-200"></div>
                )}
              </>
            ))}
          </div>
        </div>
        <Image src={logo} alt="logo" width={190} height={190} />
        <BsSearch className="text-xl" />
      </div>
    </div>
  );
};

export default MobileHeader;
