import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-full flex-grow h-full">
        {/* <Navbar /> */}
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-grow pl-72 pr-6 pt-20 mb-10 h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
