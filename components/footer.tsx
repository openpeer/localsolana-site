import React from "react";
import Image from "next/image";
import discord from "../public/discord.svg";
import twitter from "../public/twitter.svg";
import telegram from "../public/telegram.svg";
import Logo from "../public/logo.svg";

const FooterSite = () => {
  return (
    <div className="mt-12 mb-6 lg:mt-24">
      <div className="flex flex-row items-center justify-between gap-x-7 mx-auto">
        <div className="
	flex flex-col justify-items-center
	md:flex-row md:mb-0 md:items-center md:align-middle
	lg:ml-8">
          <Image src={Logo} alt="LocalSolana" width={36} height={36} className="self-center"/>
          <h3 className="text-white items-center md:pt-0 md:pl-2 pt-2">
            LocalSolana
          </h3>
	  <div className="flex flex-row md:hidden pt-2 self-center gap-x-4">
	  <a
            href="https://twitter.com/LocalSolana"
            target="_blank"
            rel="noreferrer"
            className="sm:pb-2 pr-2 md:pb-0 md:m-auto"
          >
            <Image src={twitter} alt="Twitter" width={18} height={18} />
          </a>

          <a
            href="https://discord.gg/bwU2uFUH6J"
            target="_blank"
            rel="noreferrer"
            className="pt-0.5 pr-2 md:pb-0 md:m-auto"
          >
            <Image src={discord} alt="Discord" width={18} height={18} />
          </a>

          <a
          href="https://t.me/localsolana"
            target="_blank"
            rel="noreferrer"
            className="sm:pb-2 pr-2 md:pb-0 md:m-auto"
          >
            <Image src={telegram} alt="Telegram" width={18} height={18} />
          </a>

          
	  
</div>
        </div>

        <div className="flex flex-col sm:items-start md:items-center md:justify-center  md:flex-row  text-white">
        <a
            href="/LocalSolana-Litepaper-v01.pdf"
            target="_blank"
            rel="noreferrer"
            className="sm:py-2 md:py-0 md:pr-2 text-base relative group"
          >
            LitePaper
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82FFBC] transition-all group-hover:w-2/3"></span>
          </a> 
          <a
            href="https://docs.localsolana.com/"
            target="_blank"
            rel="noreferrer"
            className="sm:py-2 md:py-0 md:pr-2 text-base relative group"
          >
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82FFBC] transition-all group-hover:w-2/3"></span>
          </a> 
          <a href="/disclaimer" className="sm:pb-2 md:pb-0 md:pr-2 text-base relative group">
            Disclaimer
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82FFBC] transition-all group-hover:w-2/3"></span>
          </a>
          <a href="/terms" className="sm:pb-2 md:pb-0 md:pr-2 text-base relative group">
            Terms
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82FFBC] transition-all group-hover:w-2/3"></span>
          </a>
          <a
            href="/privacy-policy"
            className="sm:pb-2 md:pb-0 md:pr-2 text-base relative group"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82FFBC] transition-all group-hover:w-2/3"></span>
          </a>
          <a
            href="https://twitter.com/localsolana"
            target="_blank"
            rel="noreferrer"
            className="sm:pb-2 pr-2 md:pb-0 md:m-auto max-md:hidden"
          >
            <Image src={twitter} alt="Twitter" width={18} height={18} />
          </a>

          <a
            href="https://discord.gg/bwU2uFUH6J"
            target="_blank"
            rel="noreferrer"
            className="sm:pb-2 pr-2 md:pb-0 md:m-auto max-md:hidden"
          >
            <Image src={discord} alt="Discord" width={18} height={18} />
          </a>

	  <a
      href="https://t.me/localsolana"
            target="_blank"
            rel="noreferrer"
            className="sm:pb-2 pr-2 md:pb-0 md:m-auto max-md:hidden"
          >
            <Image src={telegram} alt="Telegram" width={18} height={18} />
          </a>
	  
        </div>
      </div>
      <p className="flex flex-row text-sm pt-4 text-[#B7B7B7] items-center justify-center">
        © 2024 LocalSolana
      </p>
    </div>
  );
};

export default FooterSite;
