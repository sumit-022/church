import BreadCrump from "@/components/atoms/breadcrump";
import Section from "@/components/atoms/wrappers/section";
import Layout from "@/components/layout";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import bgimage from "@/assets/images/home/bg/bg-1.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsEnvelope } from "react-icons/bs";
import Image from "next/image";
import ContactCard from "@/components/atoms/cards/contact-card";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: string | string[];
  bgimage: StaticImport | string;
}

const ContactUsPage = () => {
  const fields: CardProps[] = [
    {
      icon: <HiOutlineLocationMarker className="" />,
      title: "Our Location",
      value: "684 West College St. Sun City, United States America.",
      bgimage: bgimage,
    },
    {
      icon: <TfiHeadphoneAlt className="" />,
      title: "Phone Number",
      value: "(+55) 654 - 545 - 5418",
      bgimage: bgimage,
    },
    {
      icon: <BsEnvelope className="" />,
      title: "Email Address",
      value: "info@example.com",
      bgimage: bgimage,
    },
  ];
  return (
    <Layout>
      <BreadCrump />
      <Section>
        <div className="gap-6 grid md:grid-cols-3 grid-cols-1">
          {fields.map((field, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center overflow-hidden text-white py-6 px-2 rounded-md relative"
            >
              {field.title === "Our Location" && (
                <div className="absolute w-full bg-primary-yellow/70 -z-10 h-full"></div>
              )}
              <div className="absolute w-full -z-20 h-full">
                <Image src={field.bgimage} className="h-full" alt="image" />
              </div>
              <div className="text-5xl">{field.icon}</div>
              <p className="text-center text-2xl font-bold mt-4">
                {field.title}
              </p>
              <p className="text-center mt-2">{field.value}</p>
            </div>
          ))}
        </div>
        <div className="my-10">
          <ContactCard />
        </div>
      </Section>
    </Layout>
  );
};

export default ContactUsPage;
