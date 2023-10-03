import React from "react";
import Layout from ".";

import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { TfiInstagram, TfiYoutube } from "react-icons/tfi";

const About = () => {
  return (
    <Layout title="About">
      <p className="text-white">
        Zegen Church WordPress Theme is professionaly designed for non-profit
        church, modern church, prayer group, Christian, charity, non-profit
        organization. Grab it soon!
      </p>
      <div className="flex gap-2">
        <div className="p-2 bg-[#3b5999] rounded-sm">
          <BiLogoFacebook className="text-white" />
        </div>
        <div className="p-2 bg-[#55acee] rounded-sm">
          <FiTwitter className="text-white text-sm" />
        </div>
        <div className="p-2 bg-[#e4405f] rounded-sm">
          <TfiInstagram className="text-white text-sm" />
        </div>
        <div className="p-2 bg-[#bd081c] rounded-sm">
          <BiLogoPinterestAlt className="text-white" />
        </div>
        <div className="p-2 bg-[#cd201f] rounded-sm">
          <TfiYoutube className="text-white" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
