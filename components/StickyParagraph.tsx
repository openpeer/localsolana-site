import { useState, useEffect } from "react";

const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

const content = {
  firstSection:
    "Peer-to-peer payments. Decentralized. Self-custodial. Directly from your wallet. Trade between crypto and fiat. Trade SOL. Trade memecoins. Trade stablecoins. Trade it all. Are you ready to experience the best P2P experience in crypto?",
};

export default function StickyParagraph() {
  const [scrollPerc, setScrollPerc] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

const sm = window.innerWidth >= 640
      const START = sm ? 200 : 0
      const END = sm ? 1200 : 750

      const scrollPosition = clamp((window.scrollY - START) / (END - START), 0, 1);
      setScrollPerc(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstSectionArray = content.firstSection.split(' ');
  const textIndex = Math.floor(scrollPerc * firstSectionArray.length);
  const textA = firstSectionArray.slice(0, textIndex).join(' ') + ' ';
  const textB = firstSectionArray.slice(textIndex).join(' ');

  return (
    <div className="w-full sm:h-[1000px] md:h-[1200px] text-[32px] md:text-[64px] leading-[50px] md:leading-[80px]">
      <p className="sticky mx-4 top-[20px] sm:top-[50px] text-white poppins-font text-center">
        <span className="opacity-100">{textA}</span>
        <span className="opacity-20">{textB}</span>
      </p>
    </div>
  );
}
