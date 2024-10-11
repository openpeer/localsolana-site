import React from "react";
import Image from "next/image";
import lsLogo from "@/public/ls-logo.png";
import lsLogoBlack from "@/public/ls-logo-black.png";
import DocsHeader from "@/components/DocsHeader";
import Footer from "@/components/footer";

const BrandAssets = () => {
  return (
    <>
      <DocsHeader />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Brand Assets</h1>
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <Image src={lsLogo} alt="LocalSolana Logo" width={600} height={600} />
            <p className="mt-4">
              <a
                href="/ls-logo.png"
                download
                className="text-blue-500 hover:underline"
              >
                Download LocalSolana Logo
              </a>
            </p>
          </div>
          <div className="text-center">
            <Image
              src={lsLogoBlack}
              alt="LocalSolana Black Logo"
              width={600}
              height={600}
              className=" bg-white p-4"
            />
            <p className="mt-4">
              <a
                href="/ls-logo-black.png"
                download
                className="text-blue-500 hover:underline"
              >
                Download LocalSolana Black Logo
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandAssets;