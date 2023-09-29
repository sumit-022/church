import Layout from "@/components/layout";
import React from "react";
import BreadCrumb from "@/components/atoms/breadcrump";
import AboutUs from "@/components/sections/home/sermons/about-us";
import Section from "@/components/atoms/wrappers/section";
import Audio from "@/components/sections/home/sermons/audio";
import TeamCarousel from "@/components/carousels/team-carousel";
import data from "@/data/team/team";
import Team from "@/components/sections/home/team/team";

const AboutUsPage = () => {
  return (
    <Layout>
      <BreadCrumb />
      <Section>
        <AboutUs />
        <Audio />
      </Section>
      <Section>
        <h3 className="text-xl text-primary-yellow text-center font-semibold uppercase">
          Our Team
        </h3>
        <h1 className="text-3xl text-center my-7 font-bold">Church Pastors</h1>
        <span className="border-line block my-7 mx-auto"></span>
        <TeamCarousel data={data} />
      </Section>
    </Layout>
  );
};

export default AboutUsPage;
