import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import Image from "next/image";
import churchimage from "@/assets/images/pages/commitee/church.jpg";
import React from "react";
import RightBar from "@/components/sections/sermons/rightbar";
import CommiteeTable from "@/components/atoms/tables/commitee";

const CommiteePage = () => {
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <div className="flex lg:flex-row flex-col gap-14">
          <div className="lg:w-[70%] w-full">
            <Image
              src={churchimage}
              alt="church"
              className="w-[90%] mx-auto mb-7 rounded-md"
            />
            <CommiteeTable />
          </div>
          <RightBar />
        </div>
      </Section>
    </Layout>
  );
};

export default CommiteePage;
