import React from "react";
import data from "@/data/campaigns/capaigns";
import CampaignCard from "@/components/atoms/cards/campaign-card";

const CampaignBar = () => {
  return (
    <div className="flex flex-col gap-4 border lg:w-[30%] w-full h-full p-5">
      {data.map((c, i) => {
        return (
          <>
            <CampaignCard key={i} {...c} />
            {i !== data.length - 1 && (
              <div className="w-[90%] mx-auto h-[1.5px] bg-[#e6e6e6]"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default CampaignBar;
