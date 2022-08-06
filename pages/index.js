import Head from 'next/head';
import MainLayout from '../components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div>
        <p className="font-sans text-sm font-normal uppercase">total revenue</p>
        <div className="mt-4">
          <h1 className="text-4xl">N 2,230,021.00</h1>
        </div>
      </div>

      <div className="max-w-xl mt-10">
        <div className='mb-4'>
          <p className="uppercase font-sans text-sm font-normal tracking-wider">recent transactions</p>
        </div>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              <th className='py-2'>Ref</th>
              <th className='py-2'>Amount</th>
              <th className='py-2'>Date</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className="bg-white border-b py-1">
              <td>RF25464564456</td>
              <td>100,000</td>
              <td>6/08/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
