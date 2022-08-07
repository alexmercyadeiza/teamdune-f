import MainLayout from '../../components/MainLayout';
import { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
const products = [
  {
    id: 1,
    name: 'Adidas Women&rsquo;s Bag',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*',
    price: '15999',
  },
  {
    id: 2,
    name: 'Versace Women&rsquo;s Bag',
    image:
      'https://cdn-images.farfetch-contents.com/16/35/97/17/16359717_31604176_600.jpg',
    price: '40999',
  },
  {
    id: 3,
    name: 'Mountain Bracelet',
    image:
      'https://cdn.shopify.com/s/files/1/0137/7432/3812/products/IMG_20220416_153918_1024x1024@2x.jpg?v=1650118316',
    price: '7999',
  },
];

export default function ExternalStore() {
  const router = useRouter();
  return (
    <>
      <div className="grid px-20 space-y-20 pt-20">
        <div className="justify-self-center">
          <div className="flex items-center space-x-2 text-dune-brown">
            <div className="text-5xl font-medium">Lido</div>
            <div className="text-sm uppercase tracking-widest">(store)</div>
          </div>
        </div>

        <div className="grid self-start grid-cols-3 gap-20">
          {products.map((product) => {
            // get product details onClick
            const { id, name, image, price } = product;
            const getDetails = () => {
              console.log(id, name, image, price);
            };

            const createPaymentLink = async () => {
              const res = await axios.post(
                'https://api.teamdune.pro/v1/pay/create',
                { merchant_id: 1, amount: price },
                {
                  headers: {
                    'dune-sec-key': 'live_sk_d2e10c31c3d808557fe522ce',
                  },
                }
              );

              const redirectLink = res.data.link;
              router.push(redirectLink);
              console.log('res', res.data);

              console.log('link', redirectLink);

            };
            return (
              <>
                <div
                  key={product.id}
                  className="border rounded-2xl overflow-hidden"
                >
                  <div
                    className="bg-center bg-cover h-60 bg-black"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  ></div>
                  <div className="p-10 space-y-6">
                    <div>
                      <div className="text-lg">{product.name}</div>
                      <div className="text-2xl">{product.price}</div>
                    </div>
                    <div
                      onClick={createPaymentLink}
                      className="uppercase text-white hover:opacity-60 items-center cursor-pointer tracking-widest flex justify-between bg-dune-brown rounded-md p-4"
                    >
                      <div>Buy</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
