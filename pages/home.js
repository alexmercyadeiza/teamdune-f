import MainLayout from "../components/MainLayout";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';

export default function Home() {
  const createSecretKey = async () => {
    const res = await axios.post("https://api.teamdune.pro/v1/create/app/key");
    console.log("res", res.data);
  };

  const [transactions, setTransactions] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    getTxns();
  }, []);

  const getTxns = async () => {
    const res = await axios.get(
      'https://api.teamdune.pro/v1/transactions',
      {
        headers: {
          'dune-sec-key': 'live_sk_d2e10c31c3d808557fe522ce',
        },
      }
    );

    setTransactions(res.data.data);
    setTotalValue(res.data.total_val);
  }

  return (
    <MainLayout>
      <div className="space-y-16">
        {/* <div>
          <div className="text-2xl">Welcome Alex,</div>
          <div>It&rsquo;s nice to see you!</div>
        </div> */}

        <div className="grid grid-cols-2">
          <div>
            <p className="text-dune-brown font-sans text-sm font-normal tracking-widest uppercase">
              total value
            </p>
            <div className="mt-4">
              <h1 className="text-7xl">₦{totalValue}</h1>
            </div>
          </div>

          <div>
            <p className="text-dune-brown font-sans text-sm font-normal tracking-widest uppercase">
              total volume
            </p>
            <div className="mt-4">
              <h1 className="text-7xl text-gray-500">{transactions.length}</h1>
            </div>
          </div>
        </div>

        <div className="border-b"></div>
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <p className="uppercase text-dune-brown font-sans text-sm font-normal tracking-widest">
              recent transactions
            </p>

            <div>
              <button
                disabled
                className="btn btn-sm bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize"
              >
                view all
              </button>
            </div>
          </div>
          {/* <table className="w-full text-sm text-left text-black">
            <thead className="">
              <tr>
                <th className="py-2">Ref</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b py-1">
                <td>RF25464564456</td>
                <td>100,000</td>
                <td>6/08/2022</td>
              </tr>
              <tr className="border-b py-1">
                <td>RF25464564456</td>
                <td>100,000</td>
                <td>6/08/2022</td>
              </tr>
            </tbody>
          </table> */}

          {transactions.length !== 0 ? (
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3">
                      reference
                    </th>
                    <th scope="col" className="py-3">
                      customer
                    </th>
                    <th scope="col" className="py-3">
                      amount
                    </th>
                    <th scope="col" className="py-3">
                      date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr key={t?.reference} className="border-b">
                      <th
                        scope="row"
                        className="py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {t?.reference}
                      </th>
                      <td className="py-4">{t?.customer}</td>
                      <td className="py-4">₦{t?.amount}</td>
                      <td className="py-4">{t?.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-gray-400 text-center">No transactions.</div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
