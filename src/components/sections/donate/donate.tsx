import DonationCard from "@/components/atoms/cards/donation-card";
import Link from "next/link";
import React from "react";

const Donate = () => {
  return (
    <div className="lg:w-[70%] w-full">
      <h3 className="text-lg text-primary-yellow font-semibold uppercase">
        Donate Here!
      </h3>
      <h1 className="text-3xl my-2 font-bold">Save the Humanity, Save Life</h1>
      <span className="border-line block my-5 !bg-primary-yellow"></span>
      <div className="flex flex-col mt-7 gap-6">
        <p className="text-[#8d9297]">
          Lorem ipsum dolor sit amet, consectetur adipisi cing elit dolo rem
          consequ untur natus laudantium commodie adipis.
        </p>
        <Link
          href="/donate-now"
          className="text-[16px] transition-all duration-300 hover:text-primary-yellow"
        >
          Registered before? Log in to use your saved details.
        </Link>
        <DonationCard />
      </div>
    </div>
  );
};

export default Donate;
