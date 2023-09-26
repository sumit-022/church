import React from "react";
import clsx from "clsx";

interface MinistryGridProps {
  gridItems: {
    title: string;
    slug: string;
    children: {
      title: string;
      slug: string;
    }[];
  }[];
}

const MinistryGrid: React.FC<MinistryGridProps> = ({ gridItems }) => {
  return (
    <div className="grid grid-cols-2">
      {gridItems.map((gridItem, index) => (
        <div key={index}>
          <h3 className="cursor-pointer p-4 border-b-[0.5px] text-[18px] text-primary-yellow font-[500]">
            {gridItem.title}
          </h3>
          <ul className="flex flex-col capitalize text-[20px] font-[500]">
            {gridItem.children.map((child, index) => (
              <li
                className={clsx(
                  "text-black p-4 cursor-pointer",
                  index === gridItem.children.length - 1
                    ? ""
                    : "border-b-[0.5px]"
                )}
                key={index}
              >
                {child.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MinistryGrid;
