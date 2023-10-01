import Detail from "@/components/forms/detail";
import DonationAmount from "@/components/forms/donation-amount";
import Payment from "@/components/forms/payment";
import React from "react";

const DonationCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DonationAmount />
      <Detail />
      <Payment />
      <button className="w-max bg-primary-yellow text-white py-2 px-8 rounded-[4px] text-lg">
        Donate
      </button>
    </div>
  );
};

export default DonationCard;
