import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="w-full min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
