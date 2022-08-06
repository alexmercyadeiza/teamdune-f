import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { FiCopy } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import axios from 'axios';

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

  const createPaymentLink = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'https://api.teamdune.pro/v1/pay/create',
      { merchant_id: 1, amount },
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
  };

  console.log('data', paymentLinks);
  return (
    <MainLayout>
      <div>
        <button
          onClick={openModal}
          className="bg-[#D9D9D9] px-4 py-1 capitalize font-light"
        >
          create payment link
        </button>
      </div>

      <div className="max-w-xl mt-16">
        <div className="mb-4">
          <p className="uppercase font-sans text-sm font-light tracking-[0.34em]">
            payment links
          </p>
        </div>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              <th className="tracking-wider pb-4">Link</th>
              <th className="tracking-wider pb-4"></th>
            </tr>
          </thead>
          <tbody className="">
            {paymentLinks.length == 0 ? (
              <p>No payment link, generate one!</p>
            ) : (
              paymentLinks?.map((link) => (
                <tr key={link.link} className="bg-white border-b py-4">
                  <td>{link.link}</td>
                  <td>
                    {' '}
                    <a className="flex items-center tracking-wider uppercase font-light font-sans cursor-pointer">
                      <FiCopy size={20} className="mr-2" /> copy
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Modal
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
          style={{ height: 'calc(100% - 100px)' }}
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
      </Modal>
    </MainLayout>
  );
};

export default Paymentlink;
