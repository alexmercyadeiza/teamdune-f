import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
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

const Store1 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const createProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
    };

    setProducts([...products, newProduct]);
    closeModal();
    setName('');
    setPrice('');

    console.log(products);
    // alert(`${name} - ${price}`);
  };
  return (
    <MainLayout>
      <div className="flex items-center justify-between max-w-xl">
        <div>Lido shoes</div>
        <div>https://teamdune.pro/store/2384520</div>
        <button
          onClick={openModal}
          className="bg-[#D9D9D9] px-4 py-1 capitalize font-light"
        >
          create product
        </button>
      </div>
      <div className="max-w-lg mt-10">
        <div className="mb-4">
          <p className="uppercase font-sans text-sm font-normal tracking-wider">
            products
          </p>
        </div>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              {/* <th className="py-2">Ref</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th> */}
            </tr>
          </thead>
          <tbody className="">
            {products?.length == 0 ? (
              <p>No product available</p>
            ) : (
              products.map((p) => (
                <tr key={p.name} className="bg-white border-b py-1">
                  <td>{p.name}</td>
                  <td>{p.price}</td>
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
          style={{ height: 'calc(100% - 200px)' }}
        >
          <form onSubmit={(e) => createProduct(e)} className="relative">
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
            <label className="block mt-10">
              <span className="text-black text-xs uppercase font-light tracking-[0.34em]">
                Price
              </span>
              <input
                type="text"
                value={price}
                className="
                    mt-6
                    block
                    w-full
                    px-0.5
                    border-0 border-b border-black
                    focus:ring-0 focus:border-black
                  "
                onChange={(e) => setPrice(e.target.value)}
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

export default Store1;
