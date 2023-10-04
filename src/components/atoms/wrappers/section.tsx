import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className={clsx("mx-auto", isHome ? "w-[85%] py-10" : "w-[90%]")}>
      {children}
    </div>
  );
};

export default Section;
