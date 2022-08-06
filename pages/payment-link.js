import React from 'react';
import MainLayout from '../components/MainLayout';
import { FiCopy } from 'react-icons/fi';


const Paymentlink = () => {
  return (
    <MainLayout>
      <div>
        <button className="bg-[#D9D9D9] px-4 py-1 capitalize font-light">
          create payment link
        </button>
      </div>

      <div className="max-w-xl mt-16">
        <div className="mb-4">
          <p className="uppercase font-sans text-sm font-light tracking-wider">
            payment links
          </p>
        </div>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              <th className="py-2">Amount</th>
              <th className="py-2">Link</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-white border-b py-1">
              <td>12,000</td>
              <td>https://teamdune.pro/pay/2384520</td>
              <td>
                {' '}
                <a className='flex items-center tracking-wider uppercase font-light font-sans cursor-pointer'>
                  <FiCopy size={20} className='mr-2' /> copy
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Paymentlink;
