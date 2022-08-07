import MainLayout from "../components/MainLayout/index";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";

export default function ApiDoc() {
  const [showKey, setShowKey] = useState(false);

  const copyKey = (val) => {
    copy(val);
    toast.success("Copied!");
  };

  // const showKey = () => {

  // }

  return (
    <MainLayout>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-16">
          <div className="text-4xl tracking-tight text-dune-brown">
            API Documentation
          </div>
          <div>
            {/* <button
              onClick={openModal}
              className="btn btn-sm bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize"
            >
              create payment link
            </button> */}
          </div>

          <div className="flex items-center justify-between">
            <p className="uppercase text-dune-brown font-sans text-sm font-normal tracking-widest">
              endpoints
            </p>

            <div className="flex items-center space-x-2">
              {showKey ? (
                <div className="flex items-center space-x-3">
                  <div>live_sk_d2e10c31c3d808557fe522ce</div>

                  <div
                    onClick={() => copyKey(`live_sk_d2e10c31c3d808557fe522ce`)}
                    className="flex items-center space-x-1 hover:opacity-60 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="uppercase text-xs font-bold">
                      click to copy
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  Secret key &bull; &bull; &bull; &bull; &bull; &bull; &bull;
                  &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;
                </div>
              )}
            </div>

            <div
              onClick={() => setShowKey(!showKey)}
              className="btn btn-outline capitalize items-center flex space-x-2"
            >
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg> */}
              <p>{showKey ? `Hide` : `Show`} app secret key</p>
            </div>
          </div>

          <div>
            <div class="overflow-x-auto relative">
              <table class="w-full text-sm text-left">
                <tbody>
                  <tr class="border-b">
                    <th scope="row" class="py-4 font-medium whitespace-nowrap">
                      Generate a payment link
                    </th>
                    <td class="py-4 space-y-2">
                      <div className="text-orange-500">POST</div>
                      <div>https://api.teamdune.pro/v1/pay/create</div>
                    </td>
                    <td class="py-4 space-y-2">
                      <div className="text-blue-500">Headers</div>
                      <div className="flex items-center space-x-1">
                        <div className="font-medium">dune-sec-key</div>
                        <div className="text-2xs">(App secret key)</div>
                      </div>
                    </td>
                    <td class="py-4 space-y-2">
                      <div className="text-red-500">Body</div>
                      {/* <div className="font-medium">merchant_id</div> */}
                      <div className="font-medium">amount</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid place-items-end ">
          <a
            href="https://documenter.getpostman.com/view/18990196/VUjHP8fh"
            target="_blank"
            rel="noreferrer"
            className="text-right cursor-pointer hover:opacity-70 flex space-x-3 items-center"
          >
            <div
              className="p-3 w-4 h-4 bg-center bg-cover rounded-full"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/et8vxrzxxdj/postman-icon-svgrepo-com_rhTs948HY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659886788563")`,
              }}
            ></div>
            <div className="text-sm capitalize">View postman collection</div>
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
