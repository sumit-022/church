import React from "react";
import Layout from ".";
import quickLinks from "@/data/footer/quick-links";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";

const QuickLinks = () => {
  return (
    <Layout title="Quick Links">
      <div className="flex flex-col gap-4">
        {quickLinks.map((link, i) => (
          <Link href={link.slug} key={i} className="flex gap-2 items-center">
            <AiOutlineStar className="text-yellow-500" />
            {link.title}
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default QuickLinks;
