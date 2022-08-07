import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    maxWidth: "500px",
    margin: "auto",
    maxHeight: "600px",
    borderRadius: "30px",
    overflowY: "hidden",
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
    setName("");
  };
  console.log(stores);

  return (
    <MainLayout>
      <div className="space-y-16">
        <div className="flex items-center justify-between">
          <div className="text-4xl tracking-tight text-dune-brown">Store</div>
          <div>
            <button
              onClick={openModal}
              className="btn btn-sm bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize"
            >
              create a store
            </button>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8">
            <p className="text-dune-brown font-sans text-sm font-normal tracking-widest uppercase">
              <Link href="/store/1">
                <div className="">
                  <div className="flex items-center justify-between cursor-pointer">
                    <div className="text-2xl font-semibold font-light">
                      Lido
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="">view</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transform -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-px w-full bg-black my-5"></div>
                </div>
              </Link>
            </p>
          </div>
          {/* {stores.length == 0 ? (
            <p className="text-gray-400">
              No stores, create a store to get started!
            </p>
          ) : (
            stores?.map((s) => (
              <Link key={s.name} href="/store/1">
                <div key={s.name} className="">
                  <div className="flex items-center justify-between cursor-pointer">
                    <div className="text-2xl font-semibold font-light">{s.name}</div>
                    <div className="flex items-center space-x-4">
                      <div className="">visit store</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transform -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-px w-full bg-black my-5"></div>
                </div>
              </Link>
            ))
          )} */}
        </div>
      </div>

      {modalIsOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto grid place-items-center">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 w-1/4">
              <form
                onSubmit={(e) => createStore(e)}
                className="relative p-6 space-y-10 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-2/6 sm:w-full"
              >
                <div className="bg-white">
                  <div className="">
                    <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex items-center justify-between">
                        <h3
                          className="text-xl leading-6 font-medium text-gray-900 mt-2"
                          id="modal-title"
                        >
                          Create a store
                        </h3>
                        <svg
                          onClick={closeModal}
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 hover:opacity-70 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <div className="mt-2">
                        <input
                          type="text"
                          class="mt-0 w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                          placeholder=""
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-4">
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
            <div className="flex justify-between absolute -bottom-[220px]">
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
    </MainLayout>
  );
};

export default Store;
