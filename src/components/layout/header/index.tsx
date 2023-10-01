import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo1.png";
import navLinks from "../../../data/header/navlinks";
import { AiOutlinePlus } from "react-icons/ai";
import LinkGroup from "@/components/atoms/dropdown/link-group";
import home from "../../../assets/images/home/home-10.jpg";
import clsx from "clsx";
import DropdownHorizontal from "@/components/atoms/dropdown/horizontal";
import MinistryGrid from "@/components/atoms/dropdown/grid";
import { useRouter } from "next/router";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "z-50 transition-all duration-300",
        router.pathname === "/"
          ? scroll
            ? "sticky top-0"
            : "absolute top-10 w-full"
          : "sticky top-0 w-full"
      )}
    >
      <div
        className={clsx(
          "relative py-5 mx-auto bg-white transition-all duration-300",
          router.pathname === "/"
            ? scroll
              ? "w-full shadow-xl"
              : "w-[85%] rounded-md px-4"
            : scroll
            ? "w-full shadow-xl"
            : "w-full"
        )}
      >
        <div
          className={clsx(
            router.pathname === "/"
              ? scroll
                ? "w-[85%] mx-auto"
                : "w-full mx-auto"
              : "w-[90%] mx-auto"
          )}
        >
          <div className="flex uppercase font-bold text-xs items-center">
            <Image src={logo} alt="logo" width={190} height={190} />
            <div className="flex-1">
              <ul className="flex gap-10 justify-end pr-8">
                {navLinks.map((link, index) =>
                  link.type === "mega" ? (
                    <LinkGroup active={false} key={index}>
                      {(handleClick, open) => (
                        <li className="text-black cursor-pointer">
                          <div
                            className="flex gap-1 items-center justify-center"
                            onClick={handleClick}
                          >
                            {link.title}
                            <AiOutlinePlus />
                          </div>
                          {open && (
                            <div className="absolute max-h-[400px] overflow-y-scroll bg-white z-10 left-0 translate-y-8 right-0 w-full p-4 rounded-b-md transition-opacity duration-300">
                              <div className="flex flex-wrap gap-4 justify-center">
                                {link?.children?.map((child, index) => (
                                  <div
                                    className="flex flex-col items-center gap-4"
                                    key={index}
                                  >
                                    <Image
                                      src={home}
                                      alt="logo"
                                      className="rounded-md shadow-xl"
                                      height={250}
                                    />
                                    <div className="text-black">
                                      {child.title}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </li>
                      )}
                    </LinkGroup>
                  ) : link.type == "dropdown" ? (
                    <LinkGroup active={false} key={link.title}>
                      {(handleClick, open) => (
                        <li className="text-black relative cursor-pointer">
                          <div
                            className="flex gap-1 items-center justify-center"
                            onClick={handleClick}
                          >
                            {link.title}
                            <AiOutlinePlus />
                          </div>
                          {open && (
                            <div className="absolute bg-white z-10 left-0 right-0 translate-y-8 min-w-[250px] py-4 rounded-b-md transition-opacity duration-300">
                              <ul className="flex flex-col gap-2 capitalize font-[500]">
                                {link.children?.map((child, index) =>
                                  child?.type === "link" ? (
                                    <li
                                      className={clsx(
                                        "text-black text-sm p-3 cursor-pointer",
                                        index ===
                                          (link?.children?.length ?? 0) - 1
                                          ? ""
                                          : "border-b-[0.5px]"
                                      )}
                                      key={index}
                                      onClick={() =>
                                        router.push(child.slug ?? "")
                                      }
                                    >
                                      {child.title}
                                    </li>
                                  ) : (
                                    <DropdownHorizontal
                                      direction={
                                        link.title === "Blog" ? "left" : "right"
                                      }
                                      icon={<AiOutlinePlus />}
                                      title={child.title}
                                      className={clsx(
                                        index ===
                                          (link.children?.length ?? 0) - 1
                                          ? " px-3 py-2"
                                          : "border-b-[0.5px] p-3"
                                      )}
                                      childrens={(child.children ?? []).map(
                                        (child) => ({
                                          title: child.title,
                                          slug: child.slug ?? "",
                                        })
                                      )}
                                      key={child.title}
                                    />
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </li>
                      )}
                    </LinkGroup>
                  ) : link.type == "grid" ? (
                    <LinkGroup active={false} key={link.title}>
                      {(handleClick, open) => (
                        <li className="text-black relative cursor-pointer">
                          <div
                            className="flex gap-1 items-center justify-center"
                            onClick={handleClick}
                          >
                            {link.title}
                            <AiOutlinePlus />
                          </div>
                          {open && (
                            <div className="absolute cursor-default bg-white z-10 -left-5 right-0 translate-y-8 min-w-[400px] py-4 rounded-b-md">
                              <MinistryGrid
                                gridItems={(link.gridItems ?? []).map(
                                  (child) => ({
                                    title: child.title,
                                    slug: child.slug ?? "",
                                    children: (child.children ?? []) as {
                                      title: string;
                                      slug: string;
                                    }[],
                                  })
                                )}
                              />
                            </div>
                          )}
                        </li>
                      )}
                    </LinkGroup>
                  ) : (
                    <li
                      className="text-black cursor-pointer"
                      key={index}
                      onClick={() => router.push(link.slug ?? "")}
                    >
                      {link.title}
                    </li>
                  )
                )}
              </ul>
            </div>
            <button
              className="bg-primary-yellow uppercase text-white font-bold py-3 px-4 rounded"
              onClick={() => router.push("/donate-now")}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
