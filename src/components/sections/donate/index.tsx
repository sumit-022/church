import React from "react";
import CampaignBar from "./left-bar";
import Donate from "./donate";

const DonateNow = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-20">
      <CampaignBar />
      <Donate />
    </div>
  );
};

export default DonateNow;
