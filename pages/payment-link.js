import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { FiCopy } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    margin: 'auto',
    maxHeight: '600px',
    borderRadius: '30px',
    overflowY: 'hidden',
  },
};

const Paymentlink = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [paymentLinks, setPaymentLinks] = useState([]);
  const [amount, setAmount] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getPaymentLinks = async () => {
    const res = await axios.get('https://api.teamdune.pro/v1/pay/links/1', {
      headers: {
        'dune-sec-key': 'live_sk_d2e10c31c3d808557fe522ce',
      },
    });
    setPaymentLinks(res.data.data);
    console.log('response', res.data);
  };

  const createPaymentLink = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'https://api.teamdune.pro/v1/pay/create',
      { merchant_id: 1, amount: amount * 100 },
      {
        headers: {
          'dune-sec-key': 'live_sk_d2e10c31c3d808557fe522ce',
        },
      }
    );

    const newLinks = res.data;
    console.log('res', res.data);
    paymentLinks.push(newLinks);
    closeModal();
    setAmount('');
    getPaymentLinks();
  };

  console.log('data', paymentLinks);

  useEffect(() => {
    getPaymentLinks();
  }, []);
  return (
    <MainLayout>
      {/* <div>
        <button className="bg-[#D9D9D9] px-4 py-1 capitalize font-light">
          create payment link
        </button>
      </div> */}

      <div className="flex items-center justify-between">
        <div className="text-4xl tracking-tight text-dune-brown">
          Payment Links
        </div>
        <div>
          <button
            onClick={openModal}
            className="btn btn-sm bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize"
          >
            create payment link
          </button>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-4">
          <p className="uppercase text-dune-brown font-sans text-sm font-normal tracking-widest">
            all payment links
          </p>
        </div>
        {/* <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              <th className="tracking-wider pb-4">Amount</th>
              <th className="tracking-wider pb-4">Link</th>
              <th className="tracking-wider pb-4"></th>
            </tr>
          </thead>
          <tbody className="">
            {paymentLinks.length == 0 ? (
              <p>No payment link, generate one!</p>
            ) : (
              paymentLinks?.map((link) => {
                const paymentUrl = `http://localhost:3000/pay/${link.pay_id}`;
                console.log("paymentUrl", paymentUrl);

                const copyToClipboard = () => {
                  navigator.clipboard.writeText(paymentUrl);
                  console.log("copied", paymentUrl);
                };
                console.log("link", link);
                return (
                  <tr key={link.link} className="bg-white border-b py-4">
                    <td>{link.amount}</td>
                    <Link href={`/pay/${link.pay_id}`}>
                      <td className="cursor-pointer hover:text-blue-500">
                        {paymentUrl}{" "}
                      </td>
                    </Link>
                    <td>
                      {" "}
                      <a
                        onClick={copyToClipboard}
                        className="flex items-center tracking-wider uppercase font-light font-sans cursor-pointer"
                      >
                        <FiCopy size={20} className="mr-2" /> copy
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table> */}

        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3">
                  amount
                </th>
                <th scope="col" className="py-3">
                  link
                </th>
                <th scope="col" className="py-3"></th>
              </tr>
            </thead>
            {/* <tbody>
              <tr className="border-b">
                <th
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap"
                ></th>
                <td className="py-4"></td>
                <td className="py-4"></td>
              </tr>
            </tbody> */}

            <tbody className="">
              {paymentLinks.length == 0 ? (
                <p>No payment link, generate one!</p>
              ) : (
                paymentLinks?.map((link) => {
                  const paymentUrl = `https://www.teamdune.pro/${link.pay_id}`;

                  console.log('paymentUrl', paymentUrl);

                  const copyToClipboard = () => {
                    navigator.clipboard.writeText(paymentUrl);
                    console.log('copied', paymentUrl);
                    toast.success('Copied!');
                  };
                  console.log('link', link);
                  return (
                    <tr key={link.link} className="border-b">
                      <td className="py-4">₦{link.amount}</td>
                      <Link href={`/pay/${link.pay_id}`}>
                        <td className="cursor-pointer py-4 hover:text-blue-500">
                          {paymentUrl}{' '}
                        </td>
                      </Link>
                      <td>
                        <a
                          onClick={copyToClipboard}
                          className="flex items-center tracking-tight font-medium font-sans cursor-pointer hover:opacity-80"
                        >
                          <FiCopy size={20} className="mr-2" /> Click to copy
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end pr-4 pt-2">
          <button onClick={closeModal}>
            <AiOutlineClose size={25} />
          </button>
        </div>

        <div
          className="flex flex-col justify-center"
          style={{ height: "calc(100% - 100px)" }}
        >
          <form onSubmit={(e) => createPaymentLink(e)} className="relative">
            <label className="block">
              <span className="text-black text-xs uppercase font-light tracking-[0.34em]">
                Amount
              </span>
              <input
                type="text"
                value={amount}
                className="
                    mt-6
                    block
                    w-full
                    px-0.5
                    border-0 border-b border-black
                    focus:ring-0 focus:border-black
                  "
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </label>
            <div className="flex justify-between w-full absolute -bottom-[220px]">
              <button
                type="submit"
                className="uppercase font-semibold text-base tracking-[0.34em]"
              >
                Create
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
      </Modal> */}

      {modalIsOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto grid place-items-center">
            <div className="flex items-end sm:items-center justify-center min-h-full text-center sm:p-0 w-1/4">
              <form
                onSubmit={(e) => createPaymentLink(e)}
                className="relative p-10 space-y-12 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-2/6 sm:w-full"
              >
                <div className="bg-white">
                  <div className="">
                    <div className="text-center sm:mt-0 space-y-10 sm:text-left">
                      <div className="flex justify-between">
                        <div className="space-y-2">
                          <h3
                            className="text-xl leading-6 font-medium text-gray-900"
                            id="modal-title"
                          >
                            Create a payment link
                          </h3>
                          <div className="text-xs w-2/3">
                            Payment links are the easiest way to get paid.
                          </div>
                        </div>
                        <svg
                          onClick={closeModal}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 hover:opacity-70 cursor-pointer"
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

                      <div className="mt-2">
                        <input
                          type="text"
                          className="mt-0 w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                          placeholder="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="btn bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize"
                  >
                    create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Paymentlink;
