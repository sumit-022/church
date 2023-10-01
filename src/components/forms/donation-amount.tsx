import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import clsx from "clsx";
import Input from "../atoms/input";

const DonationAmount = () => {
  const [amount, setAmount] = useState(0);

  const handleClick = (e: any) => {
    const id = e.target.id;
    if (id === "two") {
      setAmount(2000);
    } else if (id === "four") {
      setAmount(4000);
    } else setAmount(0);
  };

  return (
    <div className="border p-3 flex flex-col gap-6">
      <p className="text-xl font-semibold">Your Donation</p>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div
          className={clsx(
            "border cursor-pointer p-2 flex justify-between items-center",
            amount === 2000 && "bg-primary-yellow text-white"
          )}
          id="two"
          onClick={handleClick}
        >
          $2,000.00
          {amount === 2000 && <RxCross1 />}
        </div>
        <div
          className={clsx(
            "border p-2 cursor-pointer flex justify-between items-center",
            amount === 4000 && "bg-primary-yellow text-white"
          )}
          id="four"
          onClick={handleClick}
        >
          $4,000.00
          {amount === 4000 && <RxCross1 />}
        </div>
      </div>
      <div className="border p-3">
        <p className="text-[#8d9297] text-sm">Custom Donation</p>
        <Input
          type="text"
          name="custom"
          className="w-full py-1 px-3 rounded-[5px] mt-2 bg-transparent"
          onFocus={() => setAmount(0)}
        />
      </div>
    </div>
  );
};

export default DonationAmount;
