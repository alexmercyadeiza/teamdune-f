import MainLayout from '../components/MainLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [pin, setPin] = useState();

  const enterButton = (e) => {
    e.preventDefault();
    pin !== "1234" ? alert('Wrong pin') : router.push('/home');
  };

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="bg-white w-1/4 p-6">
        <div className="">
          <form className="" onSubmit={(e) => enterButton(e)}>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-dune-brown w-10 mb-10 fill-current"
                  viewBox="0 0 76 115.27"
                >
                  <path d="M22.92,57.59H21.29v23h1.63A11.48,11.48,0,0,0,34.41,69.07h0A11.48,11.48,0,0,0,22.92,57.59Z" />
                  <path d="M72.9,31.5c-1.12-6.36-3.21-15.92-4.26-19.81A8.22,8.22,0,0,0,68.07,10c-.2-.21-.72-.05-1.34.33a10.87,10.87,0,0,0-3,2.84c-1,1.41-1.09,1.94-1.08,4.86,0,1.8.4,6.2.88,9.76s1,8.49,1.09,11l.22,4.46-1.34-4.69C59.29,23.74,54.09,10.21,49.69,2.53l-.24-.41C48-.35,47.39-.45,45.58,1.1l-.07.06c-2.62,2.26-2.9,4.89-1.09,9.86,2.68,7.32,7.89,28,7.52,29.8-.06.33-.65-.66-1.3-2.18-4.9-11.5-11-23.54-15.26-30.13C33.08,5,29.93,1.12,28.62.21A.9.9,0,0,0,28.17,0a1.39,1.39,0,0,0-.62.31,6.43,6.43,0,0,0-.93.8,8.94,8.94,0,0,0-2.3,6.11c0,1.63.44,2.84,2.58,7,3.39,6.61,9.86,22.8,9.33,23.34a21.16,21.16,0,0,1-3.72-1c-13.94-4.6-24.18-1.23-27.9,9.19C2.69,51.1,3.56,58.88,6.48,62.38a5.08,5.08,0,0,1,1,1.47,9.49,9.49,0,0,1-1.58,2C.72,71.52-1.47,84.37,1,94.26c1.39,5.46,3.71,9.17,9,13.26a37.68,37.68,0,0,0,22,7.72c.6,0,1.2,0,1.81,0a57.83,57.83,0,0,0,13.71-1.64A33.13,33.13,0,0,0,70.72,92.38l.54-1.52C77,74.59,77.49,57.52,72.9,31.5ZM25.58,90c-3.19.84-10.93,1.18-12.86.56l-1-.31L12,83.58c.15-3.68.26-13.32.26-21.41V47.59a.15.15,0,0,1,.13-.14l2.18-.15a39.3,39.3,0,0,1,11.2,1c7,1.8,13.23,6.56,16.16,12.43C47.84,72.51,40.24,86.16,25.58,90Z" />
                </svg>

                <div className="text-xs uppercase text-gray-400">
                  (61) team dune , &copy; 2022
                </div>
              </div>

              <input
                type="password"
                name="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="py-4 px-4 text-lg block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Pin"
              />
            </div>
            <div className="mt-8">
              <button
                className="btn btn-block bg-dune-brown border-none hover:bg-dune-brown"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
