import React, { useState } from "react";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  const openInNewTab = () => {
    if (isValid) {
      const url = `https://paragraph.xyz/@localsolana/subscribe?email=${encodeURIComponent(email)}&source_embed=true`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-x-7">
      <div className="flex flex-row mb-4 md:mb-0 lg:ml-8">
        <h3 className="text-center text-xl md:text-left text-white">
          Stay updated. Drop your email.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center lg:mr-8">
        <div className="rounded-2xl bg-gradient-to-b from-[#610DEA] via-[#56DEDE] to-[#82FFBC] p-0.5 mb-4 md:mb-0 md:mr-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="h-1/2 rounded-2xl px-4 py-2 bg-[#0d1117] text-white"
            onChange={handleInputChange}
          />
        </div>

        <div className="h-1/2 md:w-full rounded-md bg-gradient-to-b from-[#610DEA] via-[#56DEDE] to-[#82FFBC] p-0.5">
          <button className="items-center justify-center rounded px-4 py-2 bg-[#0d1117] hover:bg-[#2A3033]"
                  onClick={openInNewTab}
                  disabled={!isValid}>
            <p className="text-xs font-light text-white">GET UPDATES</p>
          </button>
	  
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
