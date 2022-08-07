import React from 'react';

const Success = () => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto">
        <div className="flex min-h-full w-1/4 items-end justify-center text-center sm:items-center sm:p-0">
          <form className="relative w-full transform space-y-12 overflow-hidden rounded-lg bg-white p-10 text-left shadow-xl transition-all sm:my-8">
            <div className="bg-white">
              <div className="">
                <div className="space-y-10 text-center sm:mt-0 sm:text-left">
                  <div className="flex justify-between">
                    <div className="space-y-2">
                      <h3
                        className="text-xl font-medium capitalize text-gray-900"
                        id="modal-title"
                      >
                        Transaction complete
                      </h3>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid place-items-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-40 w-40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="0.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="flex items-center space-x-1 text-xs opacity-60 grayscale">
              <div
                className="h-4s w-4 rounded-full border bg-cover bg-center p-2"
                style={{
                  backgroundImage:
                    "url('https://21stcenturychronicle.com/wp-content/uploads/2021/11/e-naira-logo.png')",
                }}
              ></div>
              <div>Powered by eNaira</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Success;
