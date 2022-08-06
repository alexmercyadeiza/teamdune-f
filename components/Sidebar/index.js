import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter()
  return (
    <nav className="bg-white h-screen border-r border-black w-60 fixed pt-5  ">
      <div className="p-7 h-full">
        <div className="flex flex-col h-fit justify-start pb-16">
          <p className="text-xs uppercase font-light">team dune</p>
        </div>

        <div className="flex flex-col justify-center h-fit space-y-8">
          <Link href="/">
            <a className={`text-xl ${router.pathname == '/' ? 'font-bold' : 'font-normal'} `}>Insight</a>
          </Link>
          <Link href="/payment-link">
            <a className={`text-xl ${router.pathname == '/payment-link' ? 'font-bold' : 'font-normal'} `}>Payment links</a>
          </Link>
          <Link href="/store">
            <a className={`text-xl ${router.pathname == '/store' ? 'font-bold' : 'font-normal'} `}>Store</a>
          </Link>
          <Link href="/">
            <a className="text-xl">M2M Transfer</a>
          </Link>
          <Link href="/">
            <a className="text-xl">Virtaul cards</a>
          </Link>
        </div>

        <div className="flex flex-col h-1/2 justify-end">
          <Link href="/">
            <a className="text-xl">API Integration</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
