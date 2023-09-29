import React from "react";
import { CgCross } from "react-icons/cg";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 items-center">
        <CgCross className="text-primary-yellow text-3xl -rotate-90" />
        <p className="text-white font-bold text-lg">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
