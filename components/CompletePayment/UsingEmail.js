import React from 'react';

const UsingEmail = ({
  price,
  handleShow,
  email,
  password,
  handleChange,
  emailOptionPayment,
}) => {
  console.log(price);
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
          <form
            onSubmit={emailOptionPayment}
            className="relative w-full transform space-y-12 overflow-hidden rounded-lg bg-white p-10 text-left shadow-xl transition-all sm:my-8"
          >
            <div className="bg-white">
              <div className="">
                <div className="space-y-10 text-center sm:mt-0 sm:text-left">
                  <div className="flex justify-between">
                    <div className="space-y-2">
                      <h3
                        className="text-4xl font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        ₦ {price}
                      </h3>
                    </div>
                    <svg
                      onClick={() => handleShow('')}
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

                  <div className="text-lg capitalize font-semibold">
                    Complete your payment
                  </div>

                  <ul className="grid w-full gap-6">
                    <input
                      name="email"
                      value={email}
                      onChange={handleChange}
                      type="text"
                      className="mt-0 w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0"
                      placeholder="Your eNaira Email"
                      required
                    />
                    <input
                      name="password"
                      value={password}
                      onChange={handleChange}
                      type="text"
                      className="mt-0 w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0"
                      placeholder="Your eNaira Password"
                      required
                    />
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-dune-brown hover:bg-dune-brown btn btn-block flex items-center justify-between rounded-md border-none px-6 capitalize"
              >
                <div>Complete Payment</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
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

export default UsingEmail;
