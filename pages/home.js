import MainLayout from "../components/MainLayout";
import axios from "axios";
import Cookies from "js-cookie";

export default function Home() {
  const createSecretKey = async () => {
    const res = await axios.post("https://api.teamdune.pro/v1/create/app/key");

    console.log("res", res.data);
  };

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
              <h1 className="text-7xl">₦0.00</h1>
            </div>
          </div>

          <div>
            <p className="text-dune-brown font-sans text-sm font-normal tracking-widest uppercase">
              total volume
            </p>
             <div className="mt-4">
              <h1 className="text-7xl text-gray-500">0</h1>
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
              <button disabled className="btn btn-sm bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize">view all</button>
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

          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="py-3">
                    reference
                  </th>
                  <th scope="col" class="py-3">
                    customer
                  </th>
                  <th scope="col" class="py-3">
                    amount
                  </th>
                  <th scope="col" class="py-3">
                    date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="py-4">davidcarson@gmail.com</td>
                  <td class="py-4">₦2,999.00</td>
                  <td class="py-4">Aug 12th, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
