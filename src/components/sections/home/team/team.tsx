import React from "react";
import Section from "@/components/atoms/wrappers/section";
import TeamCarousel from "@/components/carousels/team-carousel";
import data from "@/data/team/team";
import ContactUs from "./contact-us";

const Team = () => {
  return (
    <div>
      <Section>
        <h3 className="text-xl text-primary-yellow text-center font-semibold uppercase">
          Our Team
        </h3>
        <h1 className="text-3xl text-center my-7 font-bold">Church Pastors</h1>
        <span className="border-line block my-7 mx-auto"></span>
        <TeamCarousel data={data} />
      </Section>
      <ContactUs />
    </div>
  );
};

export default Team;
