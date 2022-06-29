import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenSize } from "../../Hooks/useScreenSize";

export default function Sliders(props) {
  const { sliderCards, settings, className } = props;
  const { isSm } = useScreenSize();
  return !isSm ? (
    <Slider {...settings} className={className}>
      {sliderCards.map((card, index) => (
        <div className="container" key={index}>
          <div>
            <div
              className="h-[320px] p-[24px] cursor-pointer bg-[#EFF3F9] dark:cardBg hover:dark:bg-[#0a2036] hover:bg-[#e8ecf3]
                   sm:py-8 sm:pr-8  rounded-xl  mx-4 sm:mx-10 lg:w-[608px] "
            >
              <img src={card.image} alt="maiar" />
              <h1 className="dark:text-white py-5 leading-5 font-semibold text-[20px]">
                {card.title}
              </h1>
              <h6 className="text-black py-5 leading-5  font-semibold text-[16px] dark:text-[#CEE0F1]">
                {card.description}
              </h6>
              <h2 className="mt-auto text-[#3555F7] text-[12px] leading-none font-bold hover:text-[#1d4ed8] cursor-pointer">
                LEARN MORE ->
              </h2>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  ) : (
    <div className="flex flex-col items-center gap-20 z-30 pb-20">
      {sliderCards.map((card, index) => (
        <div className="container z-30" key={index}>
          <div>
            <div
              className=" p-[24px] cursor-pointer bg-[#EFF3F9] dark:cardBg hover:dark:bg-[#0a2036] hover:bg-[#e8ecf3]
                   sm:py-8 sm:pr-8  rounded-xl  mx-4 sm:mx-10  lg:w-[608px] "
            >
              <img src={card.image} alt="maiar" />
              <h1 className="dark:text-white py-5 leading-5 font-semibold text-[20px]">
                {card.title}
              </h1>
              <h6 className="text-black py-5 leading-5  font-semibold text-[16px] dark:text-[#CEE0F1]">
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
  );
}
