import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "What is LocalSolana?",
      answer:
        "LocalSolana is a peer-to-peer crypto exchange inspired by LocalBitcoins. You can connect with another person in your country and trade between fiat and Solana or SPL tokens like USDC",
    },
    {
      question: "When is it launching?",
      answer:
        "LocalSolana is in development and on track to launch early Q3 2024",
    },
    {
      question: "How does it work?",
      answer:
        "Traders can post ads with crypto they want to buy or sell along with the fiat pair and price. Other traders can respond to ads to fulfil a trade. Every trade happens through smart accounts which can be controlled through self-custody wallets like Backpack or Phantom",
    },
    {
      question: "What tokens can I trade?",
      answer:
        "The LocalSolana team will list a select few markets. At launch markets will be live for SOL, USDC and USDT. If you’d like to launch a P2P market for your coin please get in touch :)",
    },
  ];

  return (
    <div className="max-w-[60rem] mx-auto space-y-4 md:space-y-0 mt-10 md:justify-start text-white mb-12 md:mb-20 lg:mb-24">
      <h3 className="text-4xl text-center mb-8">FAQs</h3>
      <div className="space-y-4 w-full">
        {faqData.map(
          (
            faq: FAQItem,
            index: number, // Define types for faq and index parameters
          ) => (
            <div className="w-full" key={index}>
              <button
                onClick={() => handleToggleAccordion(index)}
                className="w-full text-left py-4 flex justify-between items-center bg-transparent focus:outline-none"
              >
                <h3 className="font-semibold text-xl">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform transform ${openIndex === index ? "rotate-45" : ""}`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      openIndex === index
                        ? "M6 18L18 6M6 6l12 12"
                        : "M12 5v14M5 12h14"
                    }
                  />
                </svg>
              </button>
              {index !== faqData.length - 1 && ( // Check if it's not the last FAQ item
                <hr className="border-white border-t my-4" />
              )}
              {openIndex === index && (
                <div className="">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default FAQ;
