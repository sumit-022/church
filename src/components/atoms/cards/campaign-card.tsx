import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  image: StaticImport | string;
  days: number;
  title: string;
}

const CampaignCard = ({ image, days, title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Image src={image} alt="campaign" />
      <p className="text-lg font-bold">{title}</p>
      <p className="">
        <span className="text-primary-yellow">{days}</span> Days Left
      </p>
    </div>
  );
};

export default CampaignCard;
