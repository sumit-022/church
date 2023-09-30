import React from "react";
import Header from "./header";
import dynamic from "next/dynamic";
// const MobileHeader = dynamic(() => import("./header/mobile"), { ssr: false });
import MobileHeader from "./header/mobile";
import Footer from "./footer";
import useMediaQuery from "@/hooks/use-media-query";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div className="min-h-screen relative">
      {isTablet ? <MobileHeader /> : <Header />}
      <div className="w-full min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
