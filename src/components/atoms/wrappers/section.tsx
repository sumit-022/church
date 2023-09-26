import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className="w-[85%] mx-auto py-10">{children}</div>;
};

export default Section;
