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
    <div className="m-auto w-fit my-10">
      <div className="flex flex-col  bg-white p-6">
        <div className="">
          <form className="" onSubmit={(e) => enterButton(e)}>
            <div className="mt-4">
              <label
                className="block font-bold text-[#3A4374] text-sm"
                htmlFor="title"
              >
                Password
              </label>
              <input
                name="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                type="password"
                placeholder="••••"
              />
            </div>
            <div className="mt-8">
              <button
                class="flex items-center justify-center w-full font-bold text-xs text-white rounded-lg px-8 h-11 bg-[#ad20ea]"
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
