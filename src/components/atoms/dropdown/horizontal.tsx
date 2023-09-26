import React from "react";
import LinkGroup from "./link-group";
import clsx from "clsx";

interface DropdownHorizontalProps {
  icon: React.ReactNode;
  className?: string;
  title: string;
  direction: "left" | "right";
  childrens?: {
    title: string;
    slug: string;
  }[];
}

const DropdownHorizontal: React.FC<DropdownHorizontalProps> = ({
  title,
  direction,
  childrens,
  icon,
  className,
}) => {
  return (
    <LinkGroup active={false}>
      {(handleClick, open) => (
        <li className="text-black relative cursor-pointer">
          <div
            className={clsx("flex items-center justify-between", className)}
            onClick={handleClick}
          >
            {title}
            {icon}
          </div>
          {open && (
            <div
              className={clsx(
                "absolute bg-white z-10 -top-[10px] min-w-[300px]",
                direction === "left"
                  ? "right-full rounded-l-md"
                  : "left-full rounded-r-md"
              )}
            >
              <ul className="flex flex-col capitalize text font-[500]">
                {childrens?.map((child, index) => (
                  <li
                    className={clsx(
                      "text-black p-4 cursor-pointer",
                      index === childrens.length - 1 ? "" : "border-b-[0.5px]"
                    )}
                    key={child.title}
                  >
                    {child.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      )}
    </LinkGroup>
  );
};

export default DropdownHorizontal;
