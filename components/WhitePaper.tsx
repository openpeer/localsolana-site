import React from "react";

const WhitePaper = () => {
  return (
    <div className="max-w-[60rem] mx-auto space-y-4 mt-10 text-white mb-12 md:mb-20 lg:mb-24">
      <h3 className="text-4xl text-center mb-8">White Paper</h3>
      <div className="text-center">
        <a
          href="/LocalSolana-Litepaper-v01.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-xl"
        >
          Download the LocalSolana White Paper version 0.1
        </a>
      </div>
    </div>
  );
};

export default WhitePaper;