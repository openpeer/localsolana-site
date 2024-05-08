import React from "react";
import Image from "next/image";
import discord from "../public/discord.svg";
import twitter from "../public/twitter.svg";
import Logo from "../public/logo.svg";

const FooterSite = () => {
  return (
    <div className="mt-12 lg:mt-24">
    <div className="flex flex-row items-center justify-between gap-x-7 mx-auto">
      <div className="flex flex-row md:mb-0 lg:ml-8">
        <Image src={Logo} alt="LocalSolana" width={36} height={36} />
        <h3 className="text-white items-center justify-center pl-2 pt-2">
          LocalSolana
        </h3>
      </div>

      <div className="flex flex-row items-center justify-center text-white">
        <a
          href="https://twitter.com/openpeer_xyz"
          target="_blank"
          rel="noreferrer"
          className="px-2 text-base relative group"
        >
          <Image src={twitter} alt="Twitter" width={18} height={18} />
        </a>

        <a
          href="https://discord.gg/Wrf9BT8sZN"
          target="_blank"
          rel="noreferrer"
          className="px-2 md:m-auto"
        >
          <Image src={discord} alt="Discord" width={18} height={18} />
        </a>
      </div>
    </div>
      <p className="flex flex-row text-sm text-[#B7B7B7] items-center justify-center">© 2024 LocalSolana</p>
    </div>
  );
};

export default FooterSite;
