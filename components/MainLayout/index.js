import React, { useEffect } from "react";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="min-h-screen w-full bg-gray-50 p-10">{children}</div>
    </div>
  );
};

export default MainLayout;
