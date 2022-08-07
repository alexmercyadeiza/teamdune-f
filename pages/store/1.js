import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/router';

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

const Store1 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const copyText = (val) => {
    copy(val);
    toast.success("Copied!");
  };

  const goToLiveStore = () => {
    router.push("/store/ext");
  };

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
    setName("");
    setPrice("");

    console.log(products);
    // alert(`${name} - ${price}`);
  };
  return (
    <MainLayout>
      <div className="space-y-16">
        {/* <div>Lido shoes</div>
        <div>https://teamdune.pro/store/2384520</div>
        <button
          onClick={openModal}
          className="bg-[#D9D9D9] px-4 py-1 capitalize font-light"
        >
          create product
        </button> */}

        <div className="flex items-center justify-between">
          <div className="text-4xl tracking-tight text-dune-brown">Lido</div>
          {/* <div
            onClick={() => copyText(`https://teamdune.pro/store/ext/1`)}
            className="flex items-center space-x-1 cursor-pointer hover:opacity-80"
          >
            <div>https://teamdune.pro/store/ext/1</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div> */}

          <div
            onClick={() => goToLiveStore()}
            className="flex cursor-pointer items-center space-x-2 hover:opacity-80"
          >
            <div className="uppercase tracking-widest font-medium">
              go to live store
            </div>
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

          <div>
            <button
              onClick={openModal}
              className="btn btn-sm bg-dune-brown border-none hover:bg-dune-brown rounded-md px-6 capitalize"
            >
              add a new product
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-4">
          <p className="uppercase text-dune-brown font-sans text-sm font-normal tracking-widest">
            products
          </p>
        </div>

        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3"></th>

                <th scope="col" className="py-3">
                  name
                </th>
                <th scope="col" className="py-3">
                  price
                </th>
                <th scope="col" className="py-3">
                  in stock
                </th>
                <th scope="col" className="py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-lg">
                <td>
                  <div
                    className="w-16 bg-cover bg-center h-16 rounded-full bg-gray-500 overflow-hidden"
                    style={{
                      backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*")`,
                    }}
                  ></div>
                </td>
                <th
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Women&rsquo;s Sneakers
                </th>
                <td className="py-4">₦15,999</td>
                <td className="py-4">12</td>

                {/* <td className="py-4 text-right">
                  <button className="btn btn-xs btn-outline">Manage product</button> 
                </td> */}
              </tr>
              <tr className="border-b text-lg">
                <td>
                  <div
                    className="w-16 bg-cover bg-center h-16 rounded-full bg-gray-500 overflow-hidden"
                    style={{
                      backgroundImage: `url("https://cdn-images.farfetch-contents.com/16/35/97/17/16359717_31604176_600.jpg")`,
                    }}
                  ></div>
                </td>
                <th
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Women&rsquo;s Versace Bag
                </th>
                <td className="py-4">₦40,999</td>
                <td className="py-4">9</td>

                {/* <td className="py-4 text-right">
                  <button className="btn btn-xs btn-outline">Manage product</button> 
                </td> */}
              </tr>
              <tr className="border-b text-lg">
                <td>
                  <div
                    className="w-16 bg-cover bg-center h-16 rounded-full bg-gray-500 overflow-hidden"
                    style={{
                      backgroundImage: `url("https://cdn.shopify.com/s/files/1/0137/7432/3812/products/IMG_20220416_153918_1024x1024@2x.jpg?v=1650118316")`,
                    }}
                  ></div>
                </td>
                <th
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Mountain Bracelet
                </th>
                <td className="py-4">₦7,999</td>
                <td className="py-4">11</td>

                {/* <td className="py-4 text-right">
                  <button className="btn btn-xs btn-outline">Manage product</button> 
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
        {/* <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              
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
        </table> */}
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
          style={{ height: "calc(100% - 200px)" }}
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
