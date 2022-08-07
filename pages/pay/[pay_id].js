import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import UsingEmail from '../../components/CompletePayment/UsingEmail';
import UsingPin from '../../components/CompletePayment/UsingPin';

const customStyles = {
  // top: '50%',
  // left: '50%',
  // right: 'auto',
  // bottom: 'auto',
  // marginRight: '-50%',
  // transform: 'translate(-50%, -50%)',
  maxWidth: '500px',
  margin: 'auto',
  //   maxHeight: '100vh',
  borderRadius: '30px',
  overflowY: 'hidden',
  border: '1px solid #000',
  padding: '20px',
};

const PayId = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useEmail, setUseEmail] = useState(false);
  const [usePin, setUsePin] = useState(false);
  const [price, setPrice] = useState();
  const [show, setShow] = useState('');

  const moveToPayment = () => {
    useEmail ? setShow('Email') : usePin ? setShow('Pin') : '';
  };

  const handleShow = (str) => {
    setShow(str);
  };

  useEffect(() => {
    getPaymentData();
  }, []);

  const getPaymentData = async () => {
    const payId = window.location.pathname.split('/')[2];
    const res = await axios.get(
      `https://api.teamdune.pro/v1/pay/get/${payId}`,
      {
        headers: {
          'dune-sec-key': 'live_sk_d2e10c31c3d808557fe522ce',
        },
      }
    );
    console.log('response', res.data);
    setPrice(res.data?.data?.amount);
  };

  console.log('price', price);

  return show === '' ? (
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
            onSubmit={moveToPayment}
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

                  <div className="text-lg">
                    Select a way to pay from your eNaira wallet.
                  </div>

                  <ul className="grid w-full gap-6">
                    <li onClick={() => setUseEmail(true)}>
                      <input
                        type="radio"
                        id="hosting-small"
                        name="hosting"
                        value="hosting-small"
                        className="peer hidden"
                        required
                      />
                      <label
                        for="hosting-small"
                        className="gray-300 d:text-blue-500 peer-checked:border-dune-brown peer-checked:text-dune-brown inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <div className="block">
                          <div className="w-full font-semibold">
                            Email and password
                          </div>
                        </div>
                      </label>
                    </li>
                    <li onClick={() => setUsePin(true)}>
                      <input
                        type="radio"
                        id="hosting-big"
                        name="hosting"
                        value="hosting-big"
                        className="peer hidden"
                      />
                      <label
                        for="hosting-big"
                        className="gray-300 peer-checked:border-dune-brown peer-checked:text-dune-brown inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <div className="block">
                          <div className="w-full font-semibold">
                            Phone number &amp; PIN
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-dune-brown hover:bg-dune-brown btn btn-block flex items-center justify-between rounded-md border-none px-6 capitalize"
              >
                <div>Continue</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-1 text-xs opacity-60 grayscale">
              <div
                className="p-2 rounded-full border bg-center bg-cover w-4 h-4s"
                style={{
                  backgroundImage:
                    "url('https://21stcenturychronicle.com/wp-content/uploads/2021/11/e-naira-logo.png')",
                }}
              ></div>
              <div> Powered by eNaira</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : show === 'Email' ? (
    <UsingEmail price={price} handleShow={handleShow} />
  ) : show === 'Pin' ? (
    <UsingPin price={price} handleShow={handleShow} />
  ) : null;
};

export default PayId;
