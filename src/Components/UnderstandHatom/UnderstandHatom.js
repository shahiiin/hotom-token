import React from "react";
import {
  GetHatom,
  Benefit,
  WhitePaper,
  Maiar,
  SliderBg,
} from "../../Assets/Images";

import Sliders from "../Slider/Sliders";
import { BgSvg } from "./BgSvg";

const cards = [
  {
    image: GetHatom,
    title: "Get Hatom",
    description: "Buy Hatom tokens and take part of a growing ecosystem.",
  },
  {
    image: Benefit,
    title: "Benefits of Hatom token",
    description:
      "Take part in the development of the ecosystem and have access to a tremendous staking yield.",
  },
  {
    image: WhitePaper,
    title: "White Paper",
    description:
      "Go through our whitepaper to have a better grasp of our protocol.",
  },
];
const sliderCards = [
  {
    image: Maiar,
    title: "elrond",
    description:
      "Elrond Network is a highly scalable, fast and secure blockchain platform for distributed apps," +
        " enterprise use cases and the new internet economy.",
  },
  {
    image: Maiar,
    title: "Rather Labs",
    description:
      "Rather Labs are blockchain technical partners who provide the blockchain expertise along with the partner intensity founders need.",
  },
  {
    image: Maiar,
    title: "Maiar",
    description:
      "Maiar is powered by the amazing technology of the Elrond blockchain, and is going to radically change the way we interact with money.",
  },
];
export default function UnderstandHatom() {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    speed: 15000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    ltr: true,
  };
  return (
    <section className="py-10">
      <div className="sectionBg">
        <h1 className="text-white text-[40px] leading-5 font-semibold py-[50px] px-5">
          Understanding Hatom
        </h1>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 p-5">
          {cards.map((card, index) => (
            <div className="w-2/3 md:container" key={index}>
              <div>
                <div>
                  <img
                    src={card.image}
                    alt="Get Hatom"
                    className="max-w-full h-auto"
                  />
                  <h1 className="text-white py-5 leading-5 font-semibold text-[20px]">
                    {card.title}
                  </h1>
                  <h6 className="text-white py-5 leading-5 font-semibold text-[16px] text-[#CEE0F1]">
                    {card.description}
                  </h6>
                  <h2 className="text-[#3555F7] text-[12px] leading-none font-bold hover:text-[#1d4ed8] cursor-pointer">
                    LEARN MORE ->
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:partnerBg relative">
        <img
          src={SliderBg}
          alt="slider"
          className="absolute -bottom-50 right-0"
        />
        <h1 className="text-white text-[40px] py-[50px] px-4">Partners</h1>
        <Sliders
          settings={settings}
          sliderCards={sliderCards}
          className="flex flex-row gap-20 z-30 pb-20"
        />
        <div className="lg:ml-20">
          <div
            className="relative overflow-hidden mt-16 md:mt-20 px-8 md:px-16 py-[52px]
           rounded-xl [background-image:linear-gradient(89.89deg,_#EFF3F9_-0.12%,_rgba(239,_243,_249,_0)_105.76%)]
           dark:[background-image:linear-gradient(89.89deg,_#0b2037_-0.12%,transparent_95.76%)] inline-block"
          >
            <BgSvg />
            <div className="space-y-4">
              <blockquote className="text-lg dark:text-white md:text-[25px] opacity-80 md:leading-[38px] lg:max-w-[870px]">
                Hatom is the key financial instrument that will open the
                floodgates to DeFi investment in the Elrond ecosystem and we are
                proud to be a part of it.
              </blockquote>
              <div className="text-[#173068] dark:text-blue font-semibold text-xl md:text-2xl md:leading-[38px]">
                Federico Caccia, <br className="md:hidden" /> CEO Rather Labs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
