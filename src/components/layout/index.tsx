import React from "react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="absolute top-0 w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
