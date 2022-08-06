import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';

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
  };

  return (
    <div className=' h-screen flex justify-center '>
      <div style={customStyles}>
        {' '}
        <div className="flex justify-end pr-4 pt-2">
          <button onClick={''}>
            <AiOutlineClose size={25} />
          </button>
        </div>
        <div className="py-8 px-10">
          <p className="text-5xl">N 120000</p>
        </div>
        <div
          className="flex flex-col justify-center"
          style={{ height: 'calc(100% - 100px)' }}
        >
          <form onSubmit={(e) => createPaymentLink(e)} className="px-10">
            <label className="block">
              <span className="text-black text-xs uppercase font-light tracking-[0.34em]">
                Email
              </span>
              <input
                type="email"
                value={email}
                className="
            mt-6
            block
            w-full
            px-0.5
            border-0 border-b border-black
            focus:ring-0 focus:border-black
          "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="block mt-12">
              <span className="text-black text-xs uppercase font-light tracking-[0.34em]">
                Password
              </span>
              <input
                type="password"
                value={password}
                className="
            mt-6
            block
            w-full
            px-0.5
            border-0 border-b border-black
            focus:ring-0 focus:border-black
          "
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <div className="flex justify-between w-full my-8">
              <button
                type="submit"
                className="uppercase font-semibold text-base tracking-[0.34em]"
              >
                authorize & pay
              </button>
              <svg
                width="87"
                height="24"
                viewBox="0 0 87 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.0607 13.0607C86.6464 12.4749 86.6464 11.5251 86.0607 10.9393L76.5147 1.3934C75.9289 0.807611 74.9792 0.807611 74.3934 1.3934C73.8076 1.97919 73.8076 2.92893 74.3934 3.51472L82.8787 12L74.3934 20.4853C73.8076 21.0711 73.8076 22.0208 74.3934 22.6066C74.9792 23.1924 75.9289 23.1924 76.5147 22.6066L86.0607 13.0607ZM0 13.5H85V10.5H0V13.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayId;
