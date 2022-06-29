import React from "react";
import { Indicator } from "../../Assets/Images";

function Features() {
  return (
    <section className="container px-5 flex flex-col lg:block bg-white text-black dark:bg-indigo-1000 dark:text-white lg:h-[848px] pt-[56vw] sm:pt-[35vw] lg:py-0 pb-36 overflow-hidden">
      <div className="order-3">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mx-auto pt-10 lg:w-[822px] mt-28 lg:mt-0">
          <div className="font-semibold text-center lg:text-left">
            <h4 className="text-2xl lg:text-[34px] leading-none mb-2 lg:mb-0">
              $9,449,627.26
              <span className="text-[#179C64] capitalize">Dividends</span>
            </h4>
            <small className="text-[#5C5C5C] text-base lg:text-lg leading-none inline-block w-[262px] lg:w-auto">
              Paid out to Hatom Token Holders over 3 years
            </small>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className="relative cursor-pointer hover:scale-105 transition-transform"
          >
            <button className="py-4 !px-4 !w-auto !max-w-[auto] text-base sm:text-lg text-white cursor-pointer rounded-lg  p-4 px-9 leading-[1.25] font-medium [background:linear-gradient(270deg,_#1B4347_-1.39%,_#3D906A_99.46%)]">
              Buy Hatom Tokens
            </button>
          </a>
        </div>
      </div>
      <div className="lg:mt-[100px]">
        <div className="container">
          <h2 className="font-semibold text-3xl text-center lg:text-left lg:text-[40px] leading-[1.25] block lg:inline-block w-72 mx-auto lg:w-auto">
            <span className="text-blue-800">Features</span> of Hatom Token
          </h2>
          <div className="mt-12">
            <div className="relative ">
              <div className="hidden xl:block absolute left-1/2 top-3 -right-52 -translate-x-1/2">
                <svg
                  width="721"
                  height="275"
                  viewBox="0 0 721 275"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="270" r="5" fill="#C4C4C4"></circle>
                  <rect
                    x="19"
                    y="269"
                    width="250"
                    height="2"
                    fill="#C4C4C4"
                  ></rect>
                  <circle cx="715.195" cy="5" r="5" fill="#C4C4C4"></circle>
                  <rect
                    x="629"
                    y="4"
                    width="85.0966"
                    height="2"
                    fill="#C4C4C4"
                  ></rect>
                  <circle cx="5" cy="5" r="5" fill="#C4C4C4"></circle>
                  <path d="M9 4H280.5L279 6H9V4Z" fill="#C4C4C4"></path>
                  <path
                    d="M280.5 4L352.266 72.2397L350.889 73.6903L279.001 5.99976L280.5 4Z"
                    fill="#C4C4C4"
                  ></path>
                  <rect
                    x="541.801"
                    y="86.7871"
                    width="120.246"
                    height="2"
                    transform="rotate(-43.51 541.801 86.7871)"
                    fill="#C4C4C4"
                  ></rect>
                  <path
                    d="M267.772 269.354L344.045 196.949L345.422 198.399L269 271.001L267.772 269.354Z"
                    fill="#C4C4C4"
                  ></path>
                </svg>
              </div>
              <div className="hidden lg:block xl:hidden absolute left-1/2 top-3 -translate-x-1/2">
                <SvgIndicator />
              </div>
              <div
                className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-[248px]"
                style={{ width: "381px" }}
              >
                <img src={Indicator} alt="Guides" />
              </div>
              <div className="flex flex-col items-center text-center lg:text-left gap-14 justify-between w-[295px] mx-auto">
                <div className="lg:absolute left-0 top-0">
                  <div className="space-y-6 leading-tight lg:h-[163.95px] lg:text-sm xl:text-base">
                    <h2 className="text-[32px] font-semibold leading-[1.25]">
                      Earn
                    </h2>
                    <p className="opacity-80 tracking-wider dark:opacity-40 max-w-[295px], lg:max-w-[340px]">
                      Stake your Hatom tokens to earn a share of the protocol's
                      revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and
                      RIDE.
                    </p>
                  </div>
                </div>
                <div className="lg:absolute left-0 -bottom-[400px]">
                  <div className="space-y-6 lg:mt-[100px] lg:text-sm xl:text-base">
                    <h2 className="text-[32px] font-semibold leading-[1.25]">
                      Vote
                    </h2>
                    <p className="opacity-80 tracking-wider dark:opacity-40 lg:max-w-[300px]">
                      Decide which token should be listed next, and what upgrade
                      or feature should be integrated into the protocol.
                    </p>
                  </div>
                </div>
                <div className="lg:absolute right-0 top-0 block3">
                  <div className="space-y-6 leading-tight xl:pr-10 lg:w-[250px] xl:w-[330.3px] lg:text-sm xl:text-base block3">
                    <h2 className="text-[32px] font-semibold leading-[1.25]">
                      Supply &amp; Borrow
                    </h2>
                    <p className="opacity-80 tracking-wider dark:opacity-40 ">
                      Hatom token holders can use the HTM Money Market to :
                    </p>
                    <ul className="opacity-80 space-y-6 pl-8 -ml-0.5 tracking-wider text-left">
                      <li className="relative before:absolute before:-left-[30px] before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-[#179C64] dark:opacity-40">
                        Supply HTM and earn interest on their deposit.
                      </li>
                      <li className="relative before:absolute before:-left-[30px] before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-[#179C64] dark:opacity-40">
                        Use HTM as collateral and take a loan of any available
                        crypto asset.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

function SvgIndicator() {
  return (
    <svg
      width="577"
      height="275"
      viewBox="0 0 577 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="270" r="5" fill="#C4C4C4"></circle>
      <rect x="10" y="269" width="131" height="2" fill="#C4C4C4"></rect>
      <circle cx="571.195" cy="5" r="5" fill="#C4C4C4"></circle>
      <rect x="545" y="4" width="25" height="2" fill="#C4C4C4"></rect>
      <circle cx="5" cy="5" r="5" fill="#C4C4C4"></circle>
      <path d="M9 4H147L146.238 6H9V4Z" fill="#C4C4C4"></path>
      <path
        d="M146.5 4L218.266 72.2397L216.889 73.6903L145.001 5.99976L146.5 4Z"
        fill="#C4C4C4"
      ></path>
      <rect
        x="473"
        y="72.8477"
        width="100"
        height="2"
        transform="rotate(-43.51 473 72.8477)"
        fill="#C4C4C4"
      ></rect>
      <path
        d="M139.77 269.354L216.043 196.949L217.42 198.399L140.998 271.001L139.77 269.354Z"
        fill="#C4C4C4"
      ></path>
    </svg>
  );
}
