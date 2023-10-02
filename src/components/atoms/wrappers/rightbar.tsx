import React from "react";
import { LiaGripLinesSolid } from "react-icons/lia";

interface Props {
  children: React.ReactNode;
  title: string;
}

const RightLayout = ({ children, title }: Props) => {
  return (
    <div className="border p-6">
      <div className="flex gap-2 items-center mb-4">
        <LiaGripLinesSolid className="text-primary-yellow" />
        <p className="text-xl font-bold">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default RightLayout;
