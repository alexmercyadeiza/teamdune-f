import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

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

const Store = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [stores, setStores] = useState([]);
  const [name, setName] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const createStore = (e) => {
    e.preventDefault();

    const newStore = {
      name,
    };

    stores.push(newStore);
    closeModal();
    setName('');
  };
  console.log(stores);

  return (
    <MainLayout>
      <div>
        <button
          onClick={openModal}
          className="bg-[#D9D9D9] px-4 py-1 capitalize font-light"
        >
          create a store
        </button>
      </div>

      <div className="mt-16 max-w-3xl">
        <div className="mb-8">
          <p className="uppercase font-sans text-sm font-light tracking-[0.34em]">
            stores
          </p>
        </div>
        {stores.length == 0 ? (
          <p>No store, Create a store!</p>
        ) : (
          stores?.map((s) => (
            <div key={s.name} className="">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="text-xl font-light">{s.name}</div>
                <div>
                  <svg
                    width="58"
                    height="16"
                    viewBox="0 0 58 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.7071 8.70711C58.0976 8.31658 58.0976 7.68342 57.7071 7.29289L51.3431 0.928932C50.9526 0.538408 50.3195 0.538408 49.9289 0.928932C49.5384 1.31946 49.5384 1.95262 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM0 9H57V7H0V9Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-px w-full bg-black my-5"></div>
            </div>
          ))
        )}
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
          <form onSubmit={(e) => createStore(e)} className="relative">
            <label className="block">
              <span className="text-black text-xs uppercase font-light tracking-[0.34em]">
                Name
              </span>
              <input
                type="text"
                value={name}
                className="
                    mt-6
                    block
                    w-full
                    px-0.5
                    border-0 border-b border-black
                    focus:ring-0 focus:border-black
                  "
                onChange={(e) => setName(e.target.value)}
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

export default Store;
