import React, { useState } from "react";
interface LinkGroupProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  active: boolean;
}
const LinkGroup = ({ children, active }: LinkGroupProps) => {
  const [open, setOpen] = useState(active);
  const handleClick = () => {
    setOpen(!open);
  };
  return <>{children(handleClick, open)}</>;
};
export default LinkGroup;
