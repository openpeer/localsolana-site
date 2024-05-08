"use client";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Faqs from "../components/Faqs";
import Subscribe from "../components/Subscribe";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full flex mt-8 items-center justify-center">
        <Image
          src={Logo}
          alt="LocalSolana"
          className="absolute top-12 md:top-18 lg:top-24"
        />
      </div>

      <div className="w-full flex flex-col items-center mt-12 md:mt-18 lg:mt-24 mb-12 md:mb-18 lg:mb-24">
        <div className="text-center mb-6">
          <h1 className="mt-36 text-5xl font-medium text-white">LocalSolana</h1>
        </div>

        <p className="text-center space-x-4 text-xl mb-6 text-white">
          Trade between fiat and crypto peer-to-peer on{" "}
          <br className="hidden md:block" /> the best chain for payment.
        </p>

        <div className="rounded-md bg-gradient-to-b from-[#610DEA] via-[#56DEDE] to-[#82FFBC] p-0.5">
          <button className="flex w-full items-center justify-center rounded p-0.5 px-4 py-2 bg-[#0d1117]">
            <p className="text-xs font-light text-white">COMING SOON</p>
          </button>
        </div>
      </div>
      <div className="items-center justify-center">
	<Faqs />
	<Subscribe />
	<Footer />
      </div>
    </>
  );
}
