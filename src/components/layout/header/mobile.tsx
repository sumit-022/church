import React, { useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import logo from "../../../assets/logo1.png";
import { BsSearch } from "react-icons/bs";
import clsx from "clsx";

const MobileHeader = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="sticky bg-white z-10 shadow-md w-full top-0">
      <div className="flex items-center justify-between p-4 relative">
        <RxHamburgerMenu className="text-2xl" onClick={handleOpen} />
        <div
          className={clsx(
            "bg-white absolute top-0 h-screen left-0 shadow-md transition-all duration-300 w-64",
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
        </div>
        <Image src={logo} alt="logo" width={190} height={190} />
        <BsSearch className="text-xl" />
      </div>
    </div>
  );
};

export default MobileHeader;
