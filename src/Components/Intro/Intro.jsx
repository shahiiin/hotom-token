import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import {
  Bubble,
  OverDark,
  OverLight,
  PeopleDark,
  PeopleLight,
  BgDark,
  BgLight,
  BgDark1024,
  BgLight1024,
  BgMobileDark,
  BgMobileLight,
  BubbleMobileDark,
  BubbleMobileLight,
  Coin,
  OverMobileDark,
  OverMobileLight,
} from "../../Assets/Images";
import { isDark } from "../../Utils/isDark";
import { useScreenSize } from "../../Hooks/useScreenSize";

function Intro() {
  const { theme } = useTheme();
  const { isXl, isSm } = useScreenSize();

  const bgImageSrc = useMemo(
    () =>
      isDark(theme)
        ? isXl
          ? BgDark
          : !isSm
          ? BgDark1024
          : BgMobileDark
        : isXl
        ? BgLight
        : !isSm
        ? BgLight1024
        : BgMobileLight,
    [isXl, theme]
  );

  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="z-30 flex flex-col justify-center items-center relative text-white pt-12 md:pt-24">
          <IntroTitle />
          <h2 className="text-sm md:text-lg text-emerald-600 tracking-wide">
            Deep dive into the heart of Hatom Protocol
          </h2>
        </div>
        <div className="aspect-[0.9200] lg:aspect-[1.7100]"></div>
        <img className="w-full absolute top-0 z-0" src={bgImageSrc} />
        {!isSm ? (
          <img
            className="absolute w-full top-0 z-20"
            src={isDark(theme) ? PeopleDark : PeopleLight}
          />
        ) : null}
        <img
          className="w-full absolute top-0 z-20"
          src={
            isDark(theme)
              ? isSm
                ? OverMobileDark
                : OverDark
              : isSm
              ? OverMobileLight
              : OverLight
          }
        />
        <img
          className="w-full absolute top-0 z-10"
          src={
            isDark(theme)
              ? isSm
                ? BubbleMobileDark
                : Bubble
              : isSm
              ? BubbleMobileLight
              : Bubble
          }
        />
        {/* <div className="flex justify-center z-10 top-0 bottom-0 absolute w-full">
          <div
            style={{ backgroundSize: "100%" }}
            className="w-[31vw] h-[31vw] -mr-[6.61376vw] -translate-x-1 sm:translate-x-0 sm:w-[18.51vw] sm:h-[18.51vw] aspect-square max-h-[270px] max-w-[270px] bg-bgCoin"
          ></div>
        </div> */}
      </section>
    </>
  );
}

export default Intro;

function IntroTitle() {
  return (
    <svg
      className="w-1/2 -mb-8 sm:-mb-4 lg:mb-0 lg:w-[591px]"
      xmlns="http://www.w3.org/2000/svg"
      height="92"
      fill="none"
      viewBox="0 0 591 92"
    >
      <g filter="url(#filter0_d_1670_19607)">
        <path
          fill="url(#paint0_linear_1670_19607)"
          d="M22.672 70c-.58 0-1.053-.184-1.422-.553-.369-.369-.553-.843-.553-1.422v-51.35c0-.58.184-1.053.553-1.422.369-.369.843-.553 1.422-.553h10.191c.58 0 1.053.184 1.422.553.369.369.553.843.553 1.422v19.039h19.513V16.675c0-.58.184-1.053.553-1.422.369-.369.843-.553 1.422-.553h10.191c.58 0 1.053.184 1.422.553.369.369.553.843.553 1.422v51.35c0 .58-.184 1.053-.553 1.422-.368.369-.842.553-1.422.553h-10.19c-.58 0-1.054-.184-1.423-.553-.369-.369-.553-.843-.553-1.422V48.354H34.838v19.671c0 .58-.184 1.053-.553 1.422-.368.369-.842.553-1.422.553h-10.19zm73.084.79c-2.844 0-5.398-.527-7.663-1.58-2.212-1.106-3.976-2.58-5.293-4.424-1.316-1.843-1.975-3.924-1.975-6.241 0-3.74 1.528-6.689 4.582-8.848 3.055-2.212 7.11-3.713 12.166-4.503l9.875-1.501v-1.106c0-1.896-.395-3.344-1.185-4.345-.79-1-2.238-1.501-4.345-1.501-1.474 0-2.686.29-3.634.869-.895.58-1.606 1.37-2.133 2.37-.474.685-1.132 1.027-1.975 1.027h-8.848c-.579 0-1.027-.158-1.343-.474a1.597 1.597 0 01-.395-1.264c0-.948.343-2.028 1.027-3.239.738-1.264 1.844-2.502 3.318-3.713 1.475-1.211 3.371-2.212 5.688-3.002 2.318-.79 5.11-1.185 8.374-1.185 3.424 0 6.347.395 8.769 1.185 2.423.79 4.372 1.896 5.846 3.318a13.193 13.193 0 013.397 5.056c.738 1.896 1.106 4.003 1.106 6.32v24.016c0 .58-.21 1.053-.632 1.422a1.827 1.827 0 01-1.343.553h-9.164c-.579 0-1.053-.184-1.422-.553-.368-.369-.553-.843-.553-1.422V65.26c-.684 1-1.606 1.922-2.765 2.765-1.158.843-2.528 1.501-4.108 1.975-1.527.527-3.318.79-5.372.79zm3.713-9.006c1.528 0 2.897-.316 4.108-.948 1.264-.685 2.239-1.712 2.923-3.081.738-1.422 1.106-3.186 1.106-5.293v-1.106l-6.715 1.185c-2.475.421-4.292 1.08-5.45 1.975-1.107.843-1.66 1.843-1.66 3.002 0 .895.264 1.659.79 2.291.527.632 1.212 1.132 2.054 1.501.843.316 1.791.474 2.844.474zM155.475 70c-3.37 0-6.293-.527-8.769-1.58-2.422-1.106-4.292-2.791-5.609-5.056-1.316-2.317-1.975-5.293-1.975-8.927V39.269h-6.162a2.206 2.206 0 01-1.501-.553c-.368-.369-.553-.843-.553-1.422v-6.399c0-.58.185-1.053.553-1.422a2.206 2.206 0 011.501-.553h6.162V15.885c0-.58.185-1.053.553-1.422.422-.369.896-.553 1.422-.553h9.164c.58 0 1.054.184 1.422.553.369.369.553.843.553 1.422V28.92h9.875c.58 0 1.054.184 1.422.553.369.369.553.843.553 1.422v6.399c0 .58-.184 1.053-.553 1.422-.368.369-.842.553-1.422.553h-9.875v14.062c0 1.79.343 3.213 1.027 4.266.685 1.053 1.844 1.58 3.476 1.58h6.083c.58 0 1.054.184 1.422.553.369.369.553.843.553 1.422v6.873c0 .58-.184 1.053-.553 1.422-.368.369-.842.553-1.422.553h-7.347zm40.037.79c-4.424 0-8.163-.711-11.218-2.133-3.002-1.422-5.319-3.45-6.952-6.083-1.58-2.686-2.475-5.872-2.686-9.559a72.658 72.658 0 01-.079-3.555c0-1.37.027-2.554.079-3.555.211-3.74 1.159-6.926 2.844-9.559 1.686-2.633 4.029-4.661 7.031-6.083 3.055-1.422 6.715-2.133 10.981-2.133 4.319 0 7.979.711 10.981 2.133 3.055 1.422 5.425 3.45 7.11 6.083 1.686 2.633 2.634 5.82 2.844 9.559.053 1 .079 2.186.079 3.555 0 1.317-.026 2.502-.079 3.555-.21 3.687-1.132 6.873-2.765 9.559-1.58 2.633-3.897 4.661-6.952 6.083-3.002 1.422-6.741 2.133-11.218 2.133zm0-9.638c2.37 0 4.082-.711 5.135-2.133 1.106-1.422 1.738-3.555 1.896-6.399.053-.79.079-1.843.079-3.16 0-1.317-.026-2.37-.079-3.16-.158-2.791-.79-4.898-1.896-6.32-1.053-1.475-2.765-2.212-5.135-2.212-2.317 0-4.029.737-5.135 2.212-1.106 1.422-1.711 3.529-1.817 6.32-.052.79-.079 1.843-.079 3.16 0 1.317.027 2.37.079 3.16.106 2.844.711 4.977 1.817 6.399 1.106 1.422 2.818 2.133 5.135 2.133zM231.011 70c-.579 0-1.053-.184-1.422-.553-.368-.369-.553-.843-.553-1.422v-37.13c0-.58.185-1.053.553-1.422.369-.369.843-.553 1.422-.553h8.611c.58 0 1.054.184 1.422.553.369.369.553.843.553 1.422v2.686c1.054-1.422 2.528-2.66 4.424-3.713 1.896-1.106 4.135-1.685 6.715-1.738 6.057-.105 10.218 2.186 12.482 6.873 1.212-2.001 2.95-3.634 5.214-4.898 2.265-1.317 4.74-1.975 7.426-1.975 2.739 0 5.188.632 7.347 1.896 2.212 1.211 3.977 3.107 5.293 5.688 1.317 2.528 1.975 5.82 1.975 9.875v22.436c0 .58-.21 1.053-.632 1.422a1.827 1.827 0 01-1.343.553h-9.164a2.206 2.206 0 01-1.501-.553c-.368-.369-.553-.843-.553-1.422V46.142c0-1.843-.263-3.292-.79-4.345-.526-1.106-1.237-1.896-2.133-2.37-.895-.474-1.922-.711-3.081-.711-.948 0-1.896.237-2.844.711-.895.474-1.632 1.264-2.212 2.37-.526 1.053-.79 2.502-.79 4.345v21.883c0 .58-.184 1.053-.553 1.422-.368.369-.842.553-1.422.553h-9.164c-.579 0-1.053-.184-1.422-.553-.368-.369-.553-.843-.553-1.422V46.142c0-1.843-.289-3.292-.869-4.345-.579-1.106-1.316-1.896-2.212-2.37-.895-.474-1.896-.711-3.002-.711-.948 0-1.896.237-2.844.711-.895.474-1.632 1.264-2.212 2.37-.526 1.053-.79 2.475-.79 4.266v21.962c0 .58-.21 1.053-.632 1.422-.368.369-.842.553-1.422.553h-9.322zm111.622 0c-.58 0-1.054-.184-1.422-.553-.369-.369-.553-.843-.553-1.422V27.103h-14.062c-.58 0-1.054-.184-1.422-.553-.369-.421-.553-.895-.553-1.422v-8.453c0-.58.184-1.053.553-1.422.368-.369.842-.553 1.422-.553h42.502c.579 0 1.053.184 1.422.553.368.369.553.843.553 1.422v8.453c0 .527-.185 1-.553 1.422-.369.369-.843.553-1.422.553h-14.062v40.922c0 .58-.185 1.053-.553 1.422-.369.369-.843.553-1.422.553h-10.428zm51.981.79c-4.424 0-8.163-.711-11.218-2.133-3.002-1.422-5.319-3.45-6.952-6.083-1.58-2.686-2.475-5.872-2.686-9.559a71.424 71.424 0 01-.079-3.555c0-1.37.026-2.554.079-3.555.211-3.74 1.159-6.926 2.844-9.559 1.685-2.633 4.029-4.661 7.031-6.083 3.055-1.422 6.715-2.133 10.981-2.133 4.319 0 7.979.711 10.981 2.133 3.055 1.422 5.425 3.45 7.11 6.083 1.685 2.633 2.633 5.82 2.844 9.559.053 1 .079 2.186.079 3.555 0 1.317-.026 2.502-.079 3.555-.211 3.687-1.132 6.873-2.765 9.559-1.58 2.633-3.897 4.661-6.952 6.083-3.002 1.422-6.741 2.133-11.218 2.133zm0-9.638c2.37 0 4.082-.711 5.135-2.133 1.106-1.422 1.738-3.555 1.896-6.399.053-.79.079-1.843.079-3.16 0-1.317-.026-2.37-.079-3.16-.158-2.791-.79-4.898-1.896-6.32-1.053-1.475-2.765-2.212-5.135-2.212-2.317 0-4.029.737-5.135 2.212-1.106 1.422-1.712 3.529-1.817 6.32-.053.79-.079 1.843-.079 3.16 0 1.317.026 2.37.079 3.16.105 2.844.711 4.977 1.817 6.399 1.106 1.422 2.818 2.133 5.135 2.133zM430.113 70c-.58 0-1.054-.184-1.422-.553-.369-.369-.553-.843-.553-1.422v-52.14c0-.58.184-1.053.553-1.422.368-.369.842-.553 1.422-.553h9.164c.526 0 .974.184 1.343.553.421.369.632.843.632 1.422V42.35l10.981-12.087a5.762 5.762 0 011.027-.948c.368-.263.895-.395 1.58-.395h10.586c.474 0 .869.184 1.185.553.368.316.553.711.553 1.185 0 .21-.053.448-.158.711a1.448 1.448 0 01-.474.632l-14.22 15.326 16.195 19.671c.421.421.632.843.632 1.264 0 .474-.185.895-.553 1.264-.316.316-.738.474-1.264.474h-10.823c-.79 0-1.37-.132-1.738-.395a18.112 18.112 0 01-1.027-.948l-12.482-15.01v14.378c0 .58-.211 1.053-.632 1.422a1.83 1.83 0 01-1.343.553h-9.164zm66.008.79c-6.215 0-11.165-1.685-14.852-5.056-3.687-3.37-5.609-8.374-5.767-15.01v-1.422-1.343c.158-4.16 1.08-7.716 2.765-10.665 1.738-3.002 4.108-5.267 7.11-6.794 3.055-1.58 6.61-2.37 10.665-2.37 4.635 0 8.453.922 11.455 2.765 3.055 1.843 5.346 4.345 6.873 7.505 1.527 3.16 2.291 6.768 2.291 10.823v1.896c0 .58-.211 1.053-.632 1.422a1.828 1.828 0 01-1.343.553h-25.28V53.647c.053 1.527.316 2.923.79 4.187.474 1.264 1.211 2.265 2.212 3.002 1.001.737 2.212 1.106 3.634 1.106 1.053 0 1.922-.158 2.607-.474.737-.369 1.343-.764 1.817-1.185.474-.474.843-.869 1.106-1.185.474-.527.843-.843 1.106-.948.316-.158.79-.237 1.422-.237h9.796c.527 0 .948.158 1.264.474.369.263.527.658.474 1.185-.053.895-.5 1.975-1.343 3.239-.843 1.264-2.08 2.528-3.713 3.792-1.58 1.211-3.581 2.212-6.004 3.002-2.423.79-5.24 1.185-8.453 1.185zm-6.715-25.517h13.351v-.158c0-1.685-.263-3.16-.79-4.424-.474-1.264-1.238-2.238-2.291-2.923-1.001-.685-2.212-1.027-3.634-1.027-1.422 0-2.633.342-3.634 1.027-.948.685-1.685 1.659-2.212 2.923-.527 1.264-.79 2.739-.79 4.424v.158zM530.782 70c-.579 0-1.053-.184-1.422-.553-.368-.369-.553-.843-.553-1.422v-37.13c0-.58.185-1.053.553-1.422.369-.369.843-.553 1.422-.553h9.085c.58 0 1.054.184 1.422.553.369.369.553.843.553 1.422v3.002c1.37-1.633 3.16-3.002 5.372-4.108 2.212-1.106 4.819-1.659 7.821-1.659 3.055 0 5.741.685 8.058 2.054 2.37 1.37 4.214 3.397 5.53 6.083 1.37 2.633 2.054 5.872 2.054 9.717v22.041c0 .58-.21 1.053-.632 1.422a1.827 1.827 0 01-1.343.553h-9.954c-.526 0-1-.184-1.422-.553-.368-.369-.553-.843-.553-1.422V46.458c0-2.475-.605-4.371-1.817-5.688-1.158-1.37-2.896-2.054-5.214-2.054-2.159 0-3.897.685-5.214 2.054-1.264 1.317-1.896 3.213-1.896 5.688v21.567c0 .58-.21 1.053-.632 1.422a1.827 1.827 0 01-1.343.553h-9.875z"
        ></path>
      </g>
      <g filter="url(#filter1_d_1670_19607)">
        <path
          fill="#fff"
          d="M16.663 70c-.587 0-1.067-.187-1.44-.56-.374-.373-.56-.853-.56-1.44V16c0-.587.186-1.067.56-1.44.373-.373.853-.56 1.44-.56h10.32c.586 0 1.066.187 1.44.56.373.373.56.853.56 1.44v19.28h19.76V16c0-.587.186-1.067.56-1.44.373-.373.853-.56 1.44-.56h10.32c.586 0 1.066.187 1.44.56.373.373.56.853.56 1.44v52c0 .587-.187 1.067-.56 1.44-.374.373-.854.56-1.44.56h-10.32c-.587 0-1.067-.187-1.44-.56-.374-.373-.56-.853-.56-1.44V48.08h-19.76V68c0 .587-.187 1.067-.56 1.44-.374.373-.854.56-1.44.56h-10.32zm74.009.8c-2.88 0-5.467-.533-7.76-1.6-2.24-1.12-4.027-2.613-5.36-4.48-1.334-1.867-2-3.973-2-6.32 0-3.787 1.546-6.773 4.64-8.96 3.093-2.24 7.2-3.76 12.32-4.56l10-1.52v-1.12c0-1.92-.4-3.387-1.2-4.4-.8-1.013-2.267-1.52-4.4-1.52-1.494 0-2.72.293-3.68.88-.907.587-1.627 1.387-2.16 2.4-.48.693-1.147 1.04-2 1.04h-8.96c-.587 0-1.04-.16-1.36-.48-.32-.373-.453-.8-.4-1.28 0-.96.346-2.053 1.04-3.28.746-1.28 1.867-2.533 3.36-3.76 1.493-1.227 3.413-2.24 5.76-3.04 2.347-.8 5.173-1.2 8.48-1.2 3.467 0 6.427.4 8.88 1.2 2.453.8 4.427 1.92 5.92 3.36a13.371 13.371 0 013.44 5.12c.747 1.92 1.12 4.053 1.12 6.4V68c0 .587-.213 1.067-.64 1.44-.373.373-.827.56-1.36.56h-9.28c-.587 0-1.067-.187-1.44-.56-.373-.373-.56-.853-.56-1.44v-2.8c-.693 1.013-1.627 1.947-2.8 2.8-1.174.853-2.56 1.52-4.16 2-1.547.533-3.36.8-5.44.8zm3.76-9.12c1.546 0 2.933-.32 4.16-.96 1.28-.693 2.267-1.733 2.96-3.12.747-1.44 1.12-3.227 1.12-5.36v-1.12l-6.8 1.2c-2.507.427-4.347 1.093-5.52 2-1.12.853-1.68 1.867-1.68 3.04 0 .907.267 1.68.8 2.32.533.64 1.227 1.147 2.08 1.52.853.32 1.813.48 2.88.48zM151.147 70c-3.413 0-6.373-.533-8.88-1.6-2.453-1.12-4.347-2.827-5.68-5.12-1.333-2.347-2-5.36-2-9.04V38.88h-6.24a2.232 2.232 0 01-1.52-.56c-.373-.373-.56-.853-.56-1.44V30.4c0-.587.187-1.067.56-1.44.427-.373.933-.56 1.52-.56h6.24V15.2c0-.587.187-1.067.56-1.44.427-.373.907-.56 1.44-.56h9.28c.587 0 1.067.187 1.44.56.373.373.56.853.56 1.44v13.2h10c.587 0 1.067.187 1.44.56.373.373.56.853.56 1.44v6.48c0 .587-.187 1.067-.56 1.44-.373.373-.853.56-1.44.56h-10v14.24c0 1.813.347 3.253 1.04 4.32.693 1.067 1.867 1.6 3.52 1.6h6.16c.587 0 1.067.187 1.44.56.373.373.56.853.56 1.44V68c0 .587-.187 1.067-.56 1.44-.373.373-.853.56-1.44.56h-7.44zm40.544.8c-4.48 0-8.267-.72-11.36-2.16-3.04-1.44-5.387-3.493-7.04-6.16-1.6-2.72-2.507-5.947-2.72-9.68a71.935 71.935 0 01-.08-3.6c0-1.387.026-2.587.08-3.6.213-3.787 1.173-7.013 2.88-9.68 1.706-2.667 4.08-4.72 7.12-6.16 3.093-1.44 6.8-2.16 11.12-2.16 4.373 0 8.08.72 11.12 2.16 3.093 1.44 5.493 3.493 7.2 6.16 1.706 2.667 2.666 5.893 2.88 9.68.053 1.013.08 2.213.08 3.6 0 1.333-.027 2.533-.08 3.6-.214 3.733-1.147 6.96-2.8 9.68-1.6 2.667-3.947 4.72-7.04 6.16-3.04 1.44-6.827 2.16-11.36 2.16zm0-9.76c2.4 0 4.133-.72 5.2-2.16 1.12-1.44 1.76-3.6 1.92-6.48.053-.8.08-1.867.08-3.2 0-1.333-.027-2.4-.08-3.2-.16-2.827-.8-4.96-1.92-6.4-1.067-1.493-2.8-2.24-5.2-2.24-2.347 0-4.08.747-5.2 2.24-1.12 1.44-1.734 3.573-1.84 6.4-.054.8-.08 1.867-.08 3.2 0 1.333.026 2.4.08 3.2.106 2.88.72 5.04 1.84 6.48 1.12 1.44 2.853 2.16 5.2 2.16zM227.639 70c-.587 0-1.067-.187-1.44-.56-.374-.373-.56-.853-.56-1.44V30.4c0-.587.186-1.067.56-1.44.373-.373.853-.56 1.44-.56h8.72c.586 0 1.066.187 1.44.56.373.373.56.853.56 1.44v2.72c1.066-1.44 2.56-2.693 4.48-3.76 1.92-1.12 4.186-1.707 6.8-1.76 6.133-.107 10.346 2.213 12.64 6.96 1.226-2.027 2.986-3.68 5.28-4.96 2.293-1.333 4.8-2 7.52-2 2.773 0 5.253.64 7.44 1.92 2.24 1.227 4.026 3.147 5.36 5.76 1.333 2.56 2 5.893 2 10V68c0 .587-.214 1.067-.64 1.44-.374.373-.827.56-1.36.56h-9.28a2.23 2.23 0 01-1.52-.56c-.374-.373-.56-.853-.56-1.44V45.84c0-1.867-.267-3.333-.8-4.4-.534-1.12-1.254-1.92-2.16-2.4-.907-.48-1.947-.72-3.12-.72-.96 0-1.92.24-2.88.72-.907.48-1.654 1.28-2.24 2.4-.534 1.067-.8 2.533-.8 4.4V68c0 .587-.187 1.067-.56 1.44-.374.373-.854.56-1.44.56h-9.28c-.587 0-1.067-.187-1.44-.56-.374-.373-.56-.853-.56-1.44V45.84c0-1.867-.294-3.333-.88-4.4-.587-1.12-1.334-1.92-2.24-2.4-.907-.48-1.92-.72-3.04-.72-.96 0-1.92.24-2.88.72-.907.48-1.654 1.28-2.24 2.4-.534 1.067-.8 2.507-.8 4.32V68c0 .587-.214 1.067-.64 1.44-.374.373-.854.56-1.44.56h-9.44zm111.159 0c-.587 0-1.067-.187-1.44-.56-.373-.373-.56-.853-.56-1.44V26.56h-14.24c-.587 0-1.067-.187-1.44-.56-.373-.427-.56-.907-.56-1.44V16c0-.587.187-1.067.56-1.44.373-.373.853-.56 1.44-.56h43.04c.587 0 1.067.187 1.44.56.373.373.56.853.56 1.44v8.56c0 .533-.187 1.013-.56 1.44-.373.373-.853.56-1.44.56h-14.24V68c0 .587-.187 1.067-.56 1.44-.373.373-.853.56-1.44.56h-10.56zm52.64.8c-4.48 0-8.267-.72-11.36-2.16-3.04-1.44-5.387-3.493-7.04-6.16-1.6-2.72-2.507-5.947-2.72-9.68a71.935 71.935 0 01-.08-3.6c0-1.387.026-2.587.08-3.6.213-3.787 1.173-7.013 2.88-9.68 1.706-2.667 4.08-4.72 7.12-6.16 3.093-1.44 6.8-2.16 11.12-2.16 4.373 0 8.08.72 11.12 2.16 3.093 1.44 5.493 3.493 7.2 6.16 1.706 2.667 2.666 5.893 2.88 9.68.053 1.013.08 2.213.08 3.6 0 1.333-.027 2.533-.08 3.6-.214 3.733-1.147 6.96-2.8 9.68-1.6 2.667-3.947 4.72-7.04 6.16-3.04 1.44-6.827 2.16-11.36 2.16zm0-9.76c2.4 0 4.133-.72 5.2-2.16 1.12-1.44 1.76-3.6 1.92-6.48.053-.8.08-1.867.08-3.2 0-1.333-.027-2.4-.08-3.2-.16-2.827-.8-4.96-1.92-6.4-1.067-1.493-2.8-2.24-5.2-2.24-2.347 0-4.08.747-5.2 2.24-1.12 1.44-1.734 3.573-1.84 6.4-.054.8-.08 1.867-.08 3.2 0 1.333.026 2.4.08 3.2.106 2.88.72 5.04 1.84 6.48 1.12 1.44 2.853 2.16 5.2 2.16zM427.386 70c-.587 0-1.067-.187-1.44-.56-.374-.373-.56-.853-.56-1.44V15.2c0-.587.186-1.067.56-1.44.373-.373.853-.56 1.44-.56h9.28c.533 0 .986.187 1.36.56.426.373.64.853.64 1.44V42l11.12-12.24c.32-.373.666-.693 1.04-.96.373-.267.906-.4 1.6-.4h10.72c.48 0 .88.187 1.2.56.373.32.56.72.56 1.2 0 .213-.054.453-.16.72a1.46 1.46 0 01-.48.64l-14.4 15.52 16.4 19.92c.426.427.64.853.64 1.28 0 .48-.187.907-.56 1.28-.32.32-.747.48-1.28.48h-10.96c-.8 0-1.387-.133-1.76-.4-.374-.32-.72-.64-1.04-.96l-12.64-15.2V68c0 .587-.214 1.067-.64 1.44-.374.373-.827.56-1.36.56h-9.28zm66.843.8c-6.293 0-11.306-1.707-15.04-5.12-3.733-3.413-5.68-8.48-5.84-15.2v-1.44-1.36c.16-4.213 1.094-7.813 2.8-10.8 1.76-3.04 4.16-5.333 7.2-6.88 3.094-1.6 6.694-2.4 10.8-2.4 4.694 0 8.56.933 11.6 2.8 3.094 1.867 5.414 4.4 6.96 7.6 1.547 3.2 2.32 6.853 2.32 10.96v1.92c0 .587-.213 1.067-.64 1.44a1.85 1.85 0 01-1.36.56h-25.6v.56c.054 1.547.32 2.96.8 4.24.48 1.28 1.227 2.293 2.24 3.04 1.014.747 2.24 1.12 3.68 1.12 1.067 0 1.947-.16 2.64-.48.747-.373 1.36-.773 1.84-1.2.48-.48.854-.88 1.12-1.2.48-.533.854-.853 1.12-.96.32-.16.8-.24 1.44-.24h9.92c.534 0 .96.16 1.28.48.374.267.534.667.48 1.2-.053.907-.506 2-1.36 3.28-.853 1.28-2.106 2.56-3.76 3.84-1.6 1.227-3.626 2.24-6.08 3.04-2.453.8-5.306 1.2-8.56 1.2zm-6.8-25.84h13.52v-.16c0-1.707-.266-3.2-.8-4.48-.48-1.28-1.253-2.267-2.32-2.96-1.013-.693-2.24-1.04-3.68-1.04s-2.666.347-3.68 1.04c-.96.693-1.706 1.68-2.24 2.96-.533 1.28-.8 2.773-.8 4.48v.16zm41.9 25.04c-.586 0-1.066-.187-1.44-.56-.373-.373-.56-.853-.56-1.44V30.4c0-.587.187-1.067.56-1.44.374-.373.854-.56 1.44-.56h9.2c.587 0 1.067.187 1.44.56.374.373.56.853.56 1.44v3.04c1.387-1.653 3.2-3.04 5.44-4.16s4.88-1.68 7.92-1.68c3.094 0 5.814.693 8.16 2.08 2.4 1.387 4.267 3.44 5.6 6.16 1.387 2.667 2.08 5.947 2.08 9.84V68c0 .587-.213 1.067-.64 1.44a1.85 1.85 0 01-1.36.56h-10.08c-.533 0-1.013-.187-1.44-.56-.373-.373-.56-.853-.56-1.44V46.16c0-2.507-.613-4.427-1.84-5.76-1.173-1.387-2.933-2.08-5.28-2.08-2.186 0-3.946.693-5.28 2.08-1.28 1.333-1.92 3.253-1.92 5.76V68c0 .587-.213 1.067-.64 1.44a1.85 1.85 0 01-1.36.56h-10z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1670_19607"
          width="583.98"
          height="90.88"
          x="6.697"
          y="0.91"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="3" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="8.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1670_19607"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1670_19607"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_1670_19607"
          width="589.066"
          height="91.6"
          x="0.662"
          y="0.2"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="3" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="8.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1670_19607"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1670_19607"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_1670_19607"
          x1="582.812"
          x2="18.034"
          y1="41.147"
          y2="41.147"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1B4347"></stop>
          <stop offset="1" stopColor="#3D906A"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function IntroAnimation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1512}
      height={1127}
      style={{
        top: "-8vh",
        left: "-10vw",
        right: 0,
        bottom: 0,
        position: "absolute",
        zIndex: "30",
        width: "100%",
        height: "100%",
        transform: "translate3d(0,0,0)",
        contentVisibility: "visible",
      }}
    >
      <defs>
        <linearGradient
          id="v"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.845}
          y1={-4.392}
          x2={6.905}
          y2={3.253}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="w"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.857}
          y1={1.306}
          x2={2.143}
          y2={0.311}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="x"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.038}
          y1={2.049}
          x2={3.774}
          y2={-1.571}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="y"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.096}
          y1={0.888}
          x2={-1.638}
          y2={-0.504}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="z"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4047.339}
          y1={1282.975}
          x2={-4045.068}
          y2={1281.781}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="A"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.242}
          y1={-1.212}
          x2={2.883}
          y2={-0.299}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="B"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.63}
          y1={-5.402}
          x2={0.88}
          y2={3.758}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="C"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.398}
          y1={-7.952}
          x2={-0.352}
          y2={4.208}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="D"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.183}
          y1={-1.346}
          x2={4.692}
          y2={2.699}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="E"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.544}
          y1={5.043}
          x2={6.456}
          y2={0.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="F"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.273}
          y1={-2.387}
          x2={-4.602}
          y2={-0.582}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="G"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.421}
          y1={-6.271}
          x2={-0.296}
          y2={7.389}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="H"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.345}
          y1={-4.819}
          x2={-0.78}
          y2={3.656}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="I"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.578}
          y1={-1.707}
          x2={-1.547}
          y2={2.848}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="J"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.206}
          y1={-1.907}
          x2={-2.919}
          y2={3.503}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="K"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.511}
          y1={-2.768}
          x2={3.614}
          y2={5.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="L"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.69}
          y1={-0.418}
          x2={-4.06}
          y2={2.342}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="M"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.618}
          y1={-0.542}
          x2={-4.632}
          y2={4.418}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="N"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.622}
          y1={-113.617}
          x2={-0.622}
          y2={-109.228}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="O"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.762}
          y1={-3.112}
          x2={0.988}
          y2={4.809}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="P"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.972}
          y1={-1.338}
          x2={4.028}
          y2={-0.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="Q"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.716}
          y1={3.217}
          x2={1.466}
          y2={-4.708}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="R"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.435}
          y1={-1.622}
          x2={-4.815}
          y2={3.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="S"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={5.755}
          y1={-1.542}
          x2={-5.12}
          y2={3.623}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="T"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.878}
          y1={2.773}
          x2={-7.122}
          y2={0.113}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="W"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.845}
          y1={-4.392}
          x2={6.905}
          y2={3.253}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="X"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.857}
          y1={1.306}
          x2={2.143}
          y2={0.311}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="Y"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.038}
          y1={2.049}
          x2={3.774}
          y2={-1.571}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="Z"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.096}
          y1={0.888}
          x2={-1.638}
          y2={-0.504}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aa"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4047.339}
          y1={1282.975}
          x2={-4045.068}
          y2={1281.781}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ab"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.242}
          y1={-1.212}
          x2={2.883}
          y2={-0.299}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ac"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.63}
          y1={-5.402}
          x2={0.88}
          y2={3.758}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ad"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.398}
          y1={-7.952}
          x2={-0.352}
          y2={4.208}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ae"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.183}
          y1={-1.346}
          x2={4.692}
          y2={2.699}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="af"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.544}
          y1={5.043}
          x2={6.456}
          y2={0.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ag"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.273}
          y1={-2.387}
          x2={-4.602}
          y2={-0.582}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ah"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.421}
          y1={-6.271}
          x2={-0.296}
          y2={7.389}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ai"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.345}
          y1={-4.819}
          x2={-0.78}
          y2={3.656}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.578}
          y1={-1.707}
          x2={-1.547}
          y2={2.848}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ak"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.206}
          y1={-1.907}
          x2={-2.919}
          y2={3.503}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="al"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.511}
          y1={-2.768}
          x2={3.614}
          y2={5.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="am"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.69}
          y1={-0.418}
          x2={-4.06}
          y2={2.342}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="an"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.618}
          y1={-0.542}
          x2={-4.632}
          y2={4.418}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ao"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.622}
          y1={-113.617}
          x2={-0.622}
          y2={-109.228}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ap"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.762}
          y1={-3.112}
          x2={0.988}
          y2={4.809}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.972}
          y1={-1.338}
          x2={4.028}
          y2={-0.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ar"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.716}
          y1={3.217}
          x2={1.466}
          y2={-4.708}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="as"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.435}
          y1={-1.622}
          x2={-4.815}
          y2={3.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="at"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={5.755}
          y1={-1.542}
          x2={-5.12}
          y2={3.623}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="au"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.878}
          y1={2.773}
          x2={-7.122}
          y2={0.113}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bz"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.845}
          y1={-4.392}
          x2={6.905}
          y2={3.253}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bA"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.857}
          y1={1.306}
          x2={2.143}
          y2={0.311}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.038}
          y1={2.049}
          x2={3.774}
          y2={-1.571}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bC"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.096}
          y1={0.888}
          x2={-1.638}
          y2={-0.504}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4047.339}
          y1={1282.975}
          x2={-4045.068}
          y2={1281.781}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bE"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.242}
          y1={-1.212}
          x2={2.883}
          y2={-0.299}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bF"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.63}
          y1={-5.402}
          x2={0.88}
          y2={3.758}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bG"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.398}
          y1={-7.952}
          x2={-0.352}
          y2={4.208}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bH"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.183}
          y1={-1.346}
          x2={4.692}
          y2={2.699}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bI"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.544}
          y1={5.043}
          x2={6.456}
          y2={0.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bJ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.273}
          y1={-2.387}
          x2={-4.602}
          y2={-0.582}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bK"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.421}
          y1={-6.271}
          x2={-0.296}
          y2={7.389}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bL"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.345}
          y1={-4.819}
          x2={-0.78}
          y2={3.656}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bM"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.578}
          y1={-1.707}
          x2={-1.547}
          y2={2.848}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bN"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.206}
          y1={-1.907}
          x2={-2.919}
          y2={3.503}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bO"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.511}
          y1={-2.768}
          x2={3.614}
          y2={5.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bP"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.69}
          y1={-0.418}
          x2={-4.06}
          y2={2.342}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bQ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.618}
          y1={-0.542}
          x2={-4.632}
          y2={4.418}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bR"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.622}
          y1={-113.617}
          x2={-0.622}
          y2={-109.228}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bS"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.762}
          y1={-3.112}
          x2={0.988}
          y2={4.809}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bT"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.972}
          y1={-1.338}
          x2={4.028}
          y2={-0.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bU"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.716}
          y1={3.217}
          x2={1.466}
          y2={-4.708}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bV"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.435}
          y1={-1.622}
          x2={-4.815}
          y2={3.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bW"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={5.755}
          y1={-1.542}
          x2={-5.12}
          y2={3.623}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bX"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.878}
          y1={2.773}
          x2={-7.122}
          y2={0.113}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ca"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.845}
          y1={-4.392}
          x2={6.905}
          y2={3.253}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cb"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.857}
          y1={1.306}
          x2={2.143}
          y2={0.311}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cc"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.038}
          y1={2.049}
          x2={3.774}
          y2={-1.571}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cd"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.096}
          y1={0.888}
          x2={-1.638}
          y2={-0.504}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ce"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4047.339}
          y1={1282.975}
          x2={-4045.068}
          y2={1281.781}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cf"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.242}
          y1={-1.212}
          x2={2.883}
          y2={-0.299}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.63}
          y1={-5.402}
          x2={0.88}
          y2={3.758}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ch"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.398}
          y1={-7.952}
          x2={-0.352}
          y2={4.208}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ci"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.183}
          y1={-1.346}
          x2={4.692}
          y2={2.699}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.544}
          y1={5.043}
          x2={6.456}
          y2={0.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ck"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.273}
          y1={-2.387}
          x2={-4.602}
          y2={-0.582}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cl"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.421}
          y1={-6.271}
          x2={-0.296}
          y2={7.389}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cm"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.345}
          y1={-4.819}
          x2={-0.78}
          y2={3.656}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cn"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.578}
          y1={-1.707}
          x2={-1.547}
          y2={2.848}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="co"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.206}
          y1={-1.907}
          x2={-2.919}
          y2={3.503}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cp"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.511}
          y1={-2.768}
          x2={3.614}
          y2={5.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.69}
          y1={-0.418}
          x2={-4.06}
          y2={2.342}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cr"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.618}
          y1={-0.542}
          x2={-4.632}
          y2={4.418}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cs"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.622}
          y1={-113.617}
          x2={-0.622}
          y2={-109.228}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ct"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.762}
          y1={-3.112}
          x2={0.988}
          y2={4.809}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cu"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.972}
          y1={-1.338}
          x2={4.028}
          y2={-0.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cv"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.716}
          y1={3.217}
          x2={1.466}
          y2={-4.708}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cw"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.435}
          y1={-1.622}
          x2={-4.815}
          y2={3.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cx"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={5.755}
          y1={-1.542}
          x2={-5.12}
          y2={3.623}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cy"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.878}
          y1={2.773}
          x2={-7.122}
          y2={0.113}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cJ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={38.75}
          y1={66.75}
          x2={85}
          y2={26.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cM"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-70}
          y1={82}
          x2={93.5}
          y2={130.75}
        >
          <stop offset="0%" stopColor="#B8E46E" />
          <stop offset="50%" stopColor="#B8E46E" />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="e"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-70}
          y1={82}
          x2={93.5}
          y2={130.75}
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" offset="25%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="50%" stopOpacity={0} />
          <stop stopColor="#FFF" offset="75%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          id="cO"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-97.5}
          y1={74}
          x2={91}
          y2={129}
        >
          <stop offset="0%" stopColor="#B8E46E" />
          <stop offset="50%" stopColor="#B8E46E" />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="f"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-97.5}
          y1={74}
          x2={91}
          y2={129}
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" offset="25%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="50%" stopOpacity={0} />
          <stop stopColor="#FFF" offset="75%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          id="cV"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={80.5}
          y1={25}
          x2={43.5}
          y2={52.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cW"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={38.75}
          y1={66.75}
          x2={85}
          y2={26.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="gC"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={33}
          y1={-224}
          x2={38}
          y2={282}
        >
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="50%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="gD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={24}
          y1={-310}
          x2={16}
          y2={174}
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity={0} />
          <stop offset="50%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#FFF" />
        </linearGradient>
        <linearGradient
          id="gE"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={19}
          y1={181}
          x2={29}
          y2={-231.5}
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity={0} />
          <stop offset="50%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#FFF" />
        </linearGradient>
        <linearGradient
          id="da"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-9.181}
          y1={142.92}
          x2={7.759}
          y2={142.92}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="db"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.515}
          y1={158.909}
          x2={4.595}
          y2={158.909}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dc"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.032}
          y1={176.779}
          x2={2.484}
          y2={176.779}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dd"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.811}
          y1={138.385}
          x2={2.699}
          y2={138.385}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="de"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.901}
          y1={220.735}
          x2={0.069}
          y2={220.735}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="df"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.005}
          y1={212.175}
          x2={0.963}
          y2={212.175}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.184}
          y1={190.92}
          x2={0.796}
          y2={190.92}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dh"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.525}
          y1={208.545}
          x2={0.443}
          y2={208.545}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="di"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.614}
          y1={-6.661}
          x2={-0.324}
          y2={4.589}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.487}
          y1={192.918}
          x2={5.463}
          y2={192.918}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dk"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.482}
          y1={274.174}
          x2={5.478}
          y2={274.174}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dl"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.137}
          y1={18.538}
          x2={5.813}
          y2={18.538}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dm"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.137}
          y1={98.398}
          x2={5.813}
          y2={98.398}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dn"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.202}
          y1={-61.989}
          x2={2.562}
          y2={-61.989}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="do"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.951}
          y1={244.805}
          x2={3.049}
          y2={244.805}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dp"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.545}
          y1={252.454}
          x2={3.455}
          y2={252.454}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.794}
          y1={294.574}
          x2={2.146}
          y2={294.574}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dr"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.147}
          y1={150.96}
          x2={1.789}
          y2={150.96}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ds"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.443}
          y1={268.77}
          x2={5.717}
          y2={268.77}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dt"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-8.663}
          y1={-73.422}
          x2={8.273}
          y2={-73.422}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="du"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.013}
          y1={-57.43}
          x2={4.097}
          y2={-57.43}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dv"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.544}
          y1={-39.531}
          x2={2.966}
          y2={-39.531}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dw"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.316}
          y1={-77.96}
          x2={3.194}
          y2={-77.96}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dx"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.46}
          y1={4.455}
          x2={0.51}
          y2={4.455}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dy"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.489}
          y1={-5.176}
          x2={0.481}
          y2={-5.176}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dz"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.679}
          y1={-25.426}
          x2={0.301}
          y2={-25.426}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dA"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.991}
          y1={-7.839}
          x2={0.979}
          y2={-7.839}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.864}
          y1={-6.961}
          x2={8.551}
          y2={7.789}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dC"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.937}
          y1={-23.422}
          x2={5.013}
          y2={-23.422}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.932}
          y1={56.823}
          x2={5.028}
          y2={56.823}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dE"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.632}
          y1={-197.808}
          x2={5.318}
          y2={-197.808}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dF"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.632}
          y1={-117.947}
          x2={5.318}
          y2={-117.947}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dG"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.7}
          y1={-279.34}
          x2={2.06}
          y2={-279.34}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dH"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.453}
          y1={28.461}
          x2={2.542}
          y2={28.461}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dI"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.017}
          y1={36.08}
          x2={2.987}
          y2={36.08}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dJ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.297}
          y1={78.23}
          x2={1.639}
          y2={78.23}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dK"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.666}
          y1={-65.376}
          x2={2.278}
          y2={-65.376}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dL"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.898}
          y1={52.425}
          x2={5.262}
          y2={52.425}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dM"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-9.314}
          y1={-311.052}
          x2={7.622}
          y2={-311.052}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dN"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.625}
          y1={-295.06}
          x2={4.499}
          y2={-295.06}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dO"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.153}
          y1={-277.19}
          x2={2.357}
          y2={-277.19}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dP"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.919}
          y1={-315.586}
          x2={2.591}
          y2={-315.586}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dQ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.027}
          y1={-233.219}
          x2={0.953}
          y2={-233.219}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dR"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.12}
          y1={-241.8}
          x2={0.848}
          y2={-241.8}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dS"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.31}
          y1={-263.02}
          x2={0.67}
          y2={-263.02}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dT"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.635}
          y1={-245.425}
          x2={0.333}
          y2={-245.425}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dU"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-8.099}
          y1={3.734}
          x2={8.191}
          y2={-0.141}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dV"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.547}
          y1={-261.052}
          x2={5.414}
          y2={-261.052}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dW"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.547}
          y1={-179.792}
          x2={5.403}
          y2={-179.792}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dX"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.252}
          y1={-435.437}
          x2={5.708}
          y2={-435.437}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dY"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.247}
          y1={-355.571}
          x2={5.713}
          y2={-355.571}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="dZ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.315}
          y1={-515.965}
          x2={2.445}
          y2={-515.965}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ea"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.067}
          y1={-209.16}
          x2={2.937}
          y2={-209.16}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eb"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.623}
          y1={-201.55}
          x2={3.387}
          y2={-201.55}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ec"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.907}
          y1={-159.399}
          x2={2.029}
          y2={-159.399}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ed"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.278}
          y1={-303.04}
          x2={1.662}
          y2={-303.04}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ee"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.512}
          y1={-185.21}
          x2={5.643}
          y2={-185.21}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ef"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-9.336}
          y1={-529.602}
          x2={7.604}
          y2={-529.602}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.645}
          y1={-513.61}
          x2={4.479}
          y2={-513.61}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eh"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.176}
          y1={-495.74}
          x2={2.334}
          y2={-495.74}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ei"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.599}
          y1={266.635}
          x2={2.911}
          y2={266.635}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ej"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.069}
          y1={-451.727}
          x2={0.911}
          y2={-451.727}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ek"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.097}
          y1={-461.399}
          x2={0.883}
          y2={-461.399}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="el"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.985}
          y1={320.175}
          x2={0.983}
          y2={320.175}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="em"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.294}
          y1={-7.2}
          x2={2.686}
          y2={6.8}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="en"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.744}
          y1={5.56}
          x2={0.796}
          y2={-12.94}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eo"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.222}
          y1={322.174}
          x2={5.738}
          y2={322.174}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ep"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.052}
          y1={-371.677}
          x2={5.908}
          y2={-371.677}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.769}
          y1={374.089}
          x2={3.241}
          y2={374.089}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="er"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.647}
          y1={-421.1}
          x2={3.357}
          y2={-421.1}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="es"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-8.663}
          y1={-503.382}
          x2={8.273}
          y2={-503.382}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="et"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.954}
          y1={-487.39}
          x2={4.166}
          y2={-487.39}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eu"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.484}
          y1={-469.52}
          x2={3.026}
          y2={-469.52}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ev"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.379}
          y1={-425.506}
          x2={0.601}
          y2={-425.506}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ew"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.407}
          y1={-435.179}
          x2={0.563}
          y2={-435.179}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ex"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.179}
          y1={9.039}
          x2={7.361}
          y2={-6.961}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ey"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.357}
          y1={-345.451}
          x2={5.604}
          y2={-345.451}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ez"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.957}
          y1={-393.88}
          x2={3.047}
          y2={-393.88}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eA"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.579}
          y1={422.83}
          x2={2.361}
          y2={422.83}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.954}
          y1={280.225}
          x2={1.986}
          y2={280.225}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eC"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.184}
          y1={398.02}
          x2={5.975}
          y2={398.02}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.592}
          y1={288.14}
          x2={2.924}
          y2={288.14}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eE"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.974}
          y1={340.68}
          x2={0.996}
          y2={340.68}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eF"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.289}
          y1={358.303}
          x2={0.691}
          y2={358.303}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eG"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.222}
          y1={342.674}
          x2={5.738}
          y2={342.674}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eH"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.737}
          y1={394.57}
          x2={3.267}
          y2={394.57}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eI"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.957}
          y1={300.73}
          x2={1.979}
          y2={300.73}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eJ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.184}
          y1={418.52}
          x2={5.975}
          y2={418.52}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eK"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.615}
          y1={-36.375}
          x2={4.919}
          y2={-35.499}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eL"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.332}
          y1={-83.306}
          x2={0.412}
          y2={-83.162}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eM"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.075}
          y1={2.943}
          x2={-0.863}
          y2={-3.87}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eP"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-9.181}
          y1={142.92}
          x2={7.759}
          y2={142.92}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eQ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.515}
          y1={158.909}
          x2={4.595}
          y2={158.909}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eR"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.032}
          y1={176.779}
          x2={2.484}
          y2={176.779}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eS"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.811}
          y1={138.385}
          x2={2.699}
          y2={138.385}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eT"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.901}
          y1={220.735}
          x2={0.069}
          y2={220.735}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eU"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.005}
          y1={212.175}
          x2={0.963}
          y2={212.175}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eV"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.184}
          y1={190.92}
          x2={0.796}
          y2={190.92}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eW"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.525}
          y1={208.545}
          x2={0.443}
          y2={208.545}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eX"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.614}
          y1={-6.661}
          x2={-0.324}
          y2={4.589}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eY"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.487}
          y1={192.918}
          x2={5.463}
          y2={192.918}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="eZ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.482}
          y1={274.174}
          x2={5.478}
          y2={274.174}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fa"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.137}
          y1={18.538}
          x2={5.813}
          y2={18.538}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fb"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.137}
          y1={98.398}
          x2={5.813}
          y2={98.398}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fc"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.202}
          y1={-61.989}
          x2={2.562}
          y2={-61.989}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fd"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.951}
          y1={244.805}
          x2={3.049}
          y2={244.805}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fe"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.545}
          y1={252.454}
          x2={3.455}
          y2={252.454}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ff"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.794}
          y1={294.574}
          x2={2.146}
          y2={294.574}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.147}
          y1={150.96}
          x2={1.789}
          y2={150.96}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fh"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.443}
          y1={268.77}
          x2={5.717}
          y2={268.77}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fi"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-8.663}
          y1={-73.422}
          x2={8.273}
          y2={-73.422}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.013}
          y1={-57.43}
          x2={4.097}
          y2={-57.43}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fk"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.544}
          y1={-39.531}
          x2={2.966}
          y2={-39.531}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fl"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.316}
          y1={-77.96}
          x2={3.194}
          y2={-77.96}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fm"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.46}
          y1={4.455}
          x2={0.51}
          y2={4.455}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fn"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.489}
          y1={-5.176}
          x2={0.481}
          y2={-5.176}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fo"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.679}
          y1={-25.426}
          x2={0.301}
          y2={-25.426}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fp"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.991}
          y1={-7.839}
          x2={0.979}
          y2={-7.839}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.864}
          y1={-6.961}
          x2={8.551}
          y2={7.789}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fr"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.937}
          y1={-23.422}
          x2={5.013}
          y2={-23.422}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fs"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.932}
          y1={56.823}
          x2={5.028}
          y2={56.823}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ft"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.632}
          y1={-197.808}
          x2={5.318}
          y2={-197.808}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fu"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.632}
          y1={-117.947}
          x2={5.318}
          y2={-117.947}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fv"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.7}
          y1={-279.34}
          x2={2.06}
          y2={-279.34}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fw"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.453}
          y1={28.461}
          x2={2.542}
          y2={28.461}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fx"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.017}
          y1={36.08}
          x2={2.987}
          y2={36.08}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fy"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.297}
          y1={78.23}
          x2={1.639}
          y2={78.23}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fz"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.666}
          y1={-65.376}
          x2={2.278}
          y2={-65.376}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fA"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.898}
          y1={52.425}
          x2={5.262}
          y2={52.425}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-9.314}
          y1={-311.052}
          x2={7.622}
          y2={-311.052}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fC"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.625}
          y1={-295.06}
          x2={4.499}
          y2={-295.06}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.153}
          y1={-277.19}
          x2={2.357}
          y2={-277.19}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fE"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.919}
          y1={-315.586}
          x2={2.591}
          y2={-315.586}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fF"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.027}
          y1={-233.219}
          x2={0.953}
          y2={-233.219}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fG"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.12}
          y1={-241.8}
          x2={0.848}
          y2={-241.8}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fH"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.31}
          y1={-263.02}
          x2={0.67}
          y2={-263.02}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fI"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.635}
          y1={-245.425}
          x2={0.333}
          y2={-245.425}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fJ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-8.099}
          y1={3.734}
          x2={8.191}
          y2={-0.141}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fK"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.547}
          y1={-261.052}
          x2={5.414}
          y2={-261.052}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fL"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.547}
          y1={-179.792}
          x2={5.403}
          y2={-179.792}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fM"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.252}
          y1={-435.437}
          x2={5.708}
          y2={-435.437}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fN"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.247}
          y1={-355.571}
          x2={5.713}
          y2={-355.571}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fO"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.315}
          y1={-515.965}
          x2={2.445}
          y2={-515.965}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fP"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.067}
          y1={-209.16}
          x2={2.937}
          y2={-209.16}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fQ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.623}
          y1={-201.55}
          x2={3.387}
          y2={-201.55}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fR"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.907}
          y1={-159.399}
          x2={2.029}
          y2={-159.399}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fS"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.278}
          y1={-303.04}
          x2={1.662}
          y2={-303.04}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fT"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.512}
          y1={-185.21}
          x2={5.643}
          y2={-185.21}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fU"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-9.336}
          y1={-529.602}
          x2={7.604}
          y2={-529.602}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fV"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.645}
          y1={-513.61}
          x2={4.479}
          y2={-513.61}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fW"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.176}
          y1={-495.74}
          x2={2.334}
          y2={-495.74}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fX"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.599}
          y1={266.635}
          x2={2.911}
          y2={266.635}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fY"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.069}
          y1={-451.727}
          x2={0.911}
          y2={-451.727}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="fZ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.097}
          y1={-461.399}
          x2={0.883}
          y2={-461.399}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ga"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.985}
          y1={320.175}
          x2={0.983}
          y2={320.175}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gb"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.294}
          y1={-7.2}
          x2={2.686}
          y2={6.8}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gc"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.744}
          y1={5.56}
          x2={0.796}
          y2={-12.94}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gd"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.222}
          y1={322.174}
          x2={5.738}
          y2={322.174}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="ge"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.052}
          y1={-371.677}
          x2={5.908}
          y2={-371.677}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gf"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.769}
          y1={374.089}
          x2={3.241}
          y2={374.089}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.647}
          y1={-421.1}
          x2={3.357}
          y2={-421.1}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gh"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-8.663}
          y1={-503.382}
          x2={8.273}
          y2={-503.382}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gi"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.954}
          y1={-487.39}
          x2={4.166}
          y2={-487.39}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.484}
          y1={-469.52}
          x2={3.026}
          y2={-469.52}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gk"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.379}
          y1={-425.506}
          x2={0.601}
          y2={-425.506}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gl"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.407}
          y1={-435.179}
          x2={0.563}
          y2={-435.179}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gm"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.179}
          y1={9.039}
          x2={7.361}
          y2={-6.961}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gn"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.357}
          y1={-345.451}
          x2={5.604}
          y2={-345.451}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="go"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.957}
          y1={-393.88}
          x2={3.047}
          y2={-393.88}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gp"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.579}
          y1={422.83}
          x2={2.361}
          y2={422.83}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.954}
          y1={280.225}
          x2={1.986}
          y2={280.225}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gr"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.184}
          y1={398.02}
          x2={5.975}
          y2={398.02}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gs"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.592}
          y1={288.14}
          x2={2.924}
          y2={288.14}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gt"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.974}
          y1={340.68}
          x2={0.996}
          y2={340.68}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gu"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.289}
          y1={358.303}
          x2={0.691}
          y2={358.303}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gv"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.222}
          y1={342.674}
          x2={5.738}
          y2={342.674}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gw"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.737}
          y1={394.57}
          x2={3.267}
          y2={394.57}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gx"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.957}
          y1={300.73}
          x2={1.979}
          y2={300.73}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gy"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-6.184}
          y1={418.52}
          x2={5.975}
          y2={418.52}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gz"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.615}
          y1={-36.375}
          x2={4.919}
          y2={-35.499}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gA"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.332}
          y1={-83.306}
          x2={0.412}
          y2={-83.162}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="gB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.075}
          y1={2.943}
          x2={-0.863}
          y2={-3.87}
        >
          <stop offset="0%" stopColor="#2F6C68" />
          <stop offset="50%" stopColor="#32736A" />
          <stop offset="100%" stopColor="#357A6B" />
        </linearGradient>
        <linearGradient
          id="hq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={0}
          x2={100}
          y2={0}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="hc"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-90.75}
          y1={0}
          x2={100}
          y2={0}
        >
          <stop offset="0%" stopColor="#BBE66E" />
          <stop offset="50%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#34786B" />
        </linearGradient>
        <linearGradient
          id="hd"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-246.807}
          y1={-0.602}
          x2={245.862}
          y2={-0.602}
        >
          <stop offset="2%" stopColor="#1A2B50" />
          <stop offset="64%" stopColor="#2C5D5F" />
          <stop offset="98%" stopColor="#3D8F6E" />
        </linearGradient>
        <linearGradient
          id="he"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-218.333}
          y1={-0.932}
          x2={221.365}
          y2={-0.932}
        >
          <stop offset="1%" stopColor="#17244D" />
          <stop offset="52%" stopColor="#0E1D3C" />
          <stop offset="98%" stopColor="#04152B" />
        </linearGradient>
        <linearGradient
          id="hf"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-159.222}
          y1={-0.339}
          x2={158.111}
          y2={-0.339}
        >
          <stop offset="1%" stopColor="#419B72" />
          <stop offset="50%" stopColor="#2C6060" />
          <stop offset="99%" stopColor="#17244D" />
        </linearGradient>
        <linearGradient
          id="hg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-160.222}
          y1={-0.339}
          x2={160.111}
          y2={-0.339}
        >
          <stop offset="2%" stopColor="#34786B" />
          <stop offset="51%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#BBE66E" />
        </linearGradient>
        <linearGradient
          id="hh"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={523.217}
          y1={-1818.982}
          x2={434.63}
          y2={-1836.594}
        >
          <stop offset="0%" stopColor="#BBE66E" />
          <stop offset="47%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#34786B" />
        </linearGradient>
        <linearGradient
          id="hi"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={92.302}
          y1={-1814.263}
          x2={85.947}
          y2={-1815.526}
        >
          <stop offset="0%" stopColor="#BBE66E" />
          <stop offset="47%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#34786B" />
        </linearGradient>
        <linearGradient
          id="hj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-150.937}
          y1={-1850.535}
          x2={-193.845}
          y2={-1859.065}
        >
          <stop offset="0%" stopColor="#BBE66E" />
          <stop offset="47%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#34786B" />
        </linearGradient>
        <linearGradient
          id="hk"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={386.206}
          y1={-1795.465}
          x2={320.018}
          y2={-1808.623}
        >
          <stop offset="0%" stopColor="#BBE66E" />
          <stop offset="47%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#34786B" />
        </linearGradient>
        <linearGradient
          id="hl"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={523.217}
          y1={-1818.982}
          x2={434.63}
          y2={-1836.594}
        >
          <stop offset="0%" stopColor="#BBE66E" />
          <stop offset="47%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#34786B" />
        </linearGradient>
        <linearGradient
          id="hm"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-45.694}
          y1={-0.045}
          x2={45.42}
          y2={-0.045}
        >
          <stop offset="0%" stopColor="#34786B" />
          <stop offset="50%" stopColor="#78AF6C" />
          <stop offset="100%" stopColor="#BBE66E" />
        </linearGradient>
        <linearGradient
          id="cG"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={237}
          y1={125}
          x2={-53.75}
          y2={124.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cH"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={237}
          y1={125}
          x2={-53.75}
          y2={124.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cR"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-69.5}
          y1={186.5}
          x2={235.75}
          y2={192}
        >
          <stop offset="0%" stopColor="#B8E46E" />
          <stop offset="25%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="75%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cS"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-69.5}
          y1={186.5}
          x2={235.75}
          y2={192}
        >
          <stop offset="0%" stopColor="#B8E46E" />
          <stop offset="25%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="75%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="ax"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.845}
          y1={-4.392}
          x2={6.905}
          y2={3.253}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ay"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.857}
          y1={1.306}
          x2={2.143}
          y2={0.311}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="az"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.038}
          y1={2.049}
          x2={3.774}
          y2={-1.571}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aA"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.096}
          y1={0.888}
          x2={-1.638}
          y2={-0.504}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4047.339}
          y1={1282.975}
          x2={-4045.068}
          y2={1281.781}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aC"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.242}
          y1={-1.212}
          x2={2.883}
          y2={-0.299}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.63}
          y1={-5.402}
          x2={0.88}
          y2={3.758}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aE"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.398}
          y1={-7.952}
          x2={-0.352}
          y2={4.208}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aF"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.183}
          y1={-1.346}
          x2={4.692}
          y2={2.699}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aG"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.544}
          y1={5.043}
          x2={6.456}
          y2={0.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aH"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.273}
          y1={-2.387}
          x2={-4.602}
          y2={-0.582}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aI"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.421}
          y1={-6.271}
          x2={-0.296}
          y2={7.389}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aJ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.345}
          y1={-4.819}
          x2={-0.78}
          y2={3.656}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aK"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.578}
          y1={-1.707}
          x2={-1.547}
          y2={2.848}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aL"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.206}
          y1={-1.907}
          x2={-2.919}
          y2={3.503}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aM"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.511}
          y1={-2.768}
          x2={3.614}
          y2={5.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aN"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.69}
          y1={-0.418}
          x2={-4.06}
          y2={2.342}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aO"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.618}
          y1={-0.542}
          x2={-4.632}
          y2={4.418}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aP"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.622}
          y1={-113.617}
          x2={-0.622}
          y2={-109.228}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aQ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.762}
          y1={-3.112}
          x2={0.988}
          y2={4.809}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aR"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.972}
          y1={-1.338}
          x2={4.028}
          y2={-0.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aS"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.716}
          y1={3.217}
          x2={1.466}
          y2={-4.708}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aT"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.435}
          y1={-1.622}
          x2={-4.815}
          y2={3.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aU"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={5.755}
          y1={-1.542}
          x2={-5.12}
          y2={3.623}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aV"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.878}
          y1={2.773}
          x2={-7.122}
          y2={0.113}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aY"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.845}
          y1={-4.392}
          x2={6.905}
          y2={3.253}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="aZ"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.857}
          y1={1.306}
          x2={2.143}
          y2={0.311}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="ba"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-3.038}
          y1={2.049}
          x2={3.774}
          y2={-1.571}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bb"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.096}
          y1={0.888}
          x2={-1.638}
          y2={-0.504}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bc"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4047.339}
          y1={1282.975}
          x2={-4045.068}
          y2={1281.781}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bd"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.242}
          y1={-1.212}
          x2={2.883}
          y2={-0.299}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="be"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.63}
          y1={-5.402}
          x2={0.88}
          y2={3.758}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bf"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.398}
          y1={-7.952}
          x2={-0.352}
          y2={4.208}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bg"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.183}
          y1={-1.346}
          x2={4.692}
          y2={2.699}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bh"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-1.544}
          y1={5.043}
          x2={6.456}
          y2={0.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bi"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.273}
          y1={-2.387}
          x2={-4.602}
          y2={-0.582}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bj"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.421}
          y1={-6.271}
          x2={-0.296}
          y2={7.389}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bk"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.345}
          y1={-4.819}
          x2={-0.78}
          y2={3.656}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bl"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={1.578}
          y1={-1.707}
          x2={-1.547}
          y2={2.848}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bm"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.206}
          y1={-1.907}
          x2={-2.919}
          y2={3.503}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bn"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-4.511}
          y1={-2.768}
          x2={3.614}
          y2={5.392}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bo"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.69}
          y1={-0.418}
          x2={-4.06}
          y2={2.342}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bp"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.618}
          y1={-0.542}
          x2={-4.632}
          y2={4.418}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bq"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-0.622}
          y1={-113.617}
          x2={-0.622}
          y2={-109.228}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="br"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-5.762}
          y1={-3.112}
          x2={0.988}
          y2={4.809}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bs"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={-2.972}
          y1={-1.338}
          x2={4.028}
          y2={-0.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bt"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={0.716}
          y1={3.217}
          x2={1.466}
          y2={-4.708}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bu"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={4.435}
          y1={-1.622}
          x2={-4.815}
          y2={3.793}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bv"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={5.755}
          y1={-1.542}
          x2={-5.12}
          y2={3.623}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="bw"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={6.878}
          y1={2.773}
          x2={-7.122}
          y2={0.113}
        >
          <stop offset="0%" stopColor="#CCEA97" />
          <stop offset="50%" stopColor="#7BAD76" />
          <stop offset="100%" stopColor="#2B7055" />
        </linearGradient>
        <linearGradient
          id="cB"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={115.75}
          y1={108.75}
          x2={290.25}
          y2={141}
        >
          <stop offset="0%" stopColor="#B8E46E" />
          <stop offset="50%" stopColor="#B8E46E" />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="m"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={115.75}
          y1={108.75}
          x2={290.25}
          y2={141}
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" offset="25%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="50%" stopOpacity={0} />
          <stop stopColor="#FFF" offset="75%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          id="cD"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={112.25}
          y1={102.75}
          x2={356.25}
          y2={148.5}
        >
          <stop offset="0%" stopColor="#B8E46E" />
          <stop offset="50%" stopColor="#B8E46E" />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="n"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={112.25}
          y1={102.75}
          x2={356.25}
          y2={148.5}
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" offset="25%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="50%" stopOpacity={0} />
          <stop stopColor="#FFF" offset="75%" stopOpacity={0.5} />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          id="cI"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={38.75}
          y1={66.75}
          x2={85}
          y2={26.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cT"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={80.5}
          y1={25}
          x2={43.5}
          y2={52.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <linearGradient
          id="cU"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1={38.75}
          y1={66.75}
          x2={85}
          y2={26.5}
        >
          <stop offset="0%" stopColor="#B8E46E" stopOpacity={0} />
          <stop offset="50%" stopColor="#B8E46E" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#B8E46E" />
        </linearGradient>
        <filter
          id="a"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter
          id="b"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter
          id="c"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter
          id="d"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter id="cL" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="2.31 2.31" />
        </filter>
        <filter
          id="g"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter
          id="h"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter id="gH" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="5.243723875411351 5.243723875411351" />
        </filter>
        <filter id="i" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="6.371999999999999 6.371999999999999" />
        </filter>
        <filter id="gL" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="11.684997014450634 11.684997014450634" />
        </filter>
        <filter id="j" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="6.371999999999999 6.371999999999999" />
        </filter>
        <filter id="gO" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="3.42 3.42" />
        </filter>
        <filter id="gT" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="4.3227 4.3227" />
        </filter>
        <filter id="hp" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="1.32 1.32" />
        </filter>
        <filter id="cF" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="2.31 2.31" />
        </filter>
        <filter id="cQ" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="2.31 2.31" />
        </filter>
        <filter
          id="k"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter
          id="l"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0" />
          </feComponentTransfer>
        </filter>
        <filter id="cA" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="2.31 2.31" />
        </filter>
        <filter id="gJ" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="9.89286862499517 9.89286862499517" />
        </filter>
        <filter id="o" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="6.371999999999999 6.371999999999999" />
        </filter>
        <filter id="gW" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="4.3227 4.3227" />
        </filter>
        <filter id="p" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="6.371999999999999 6.371999999999999" />
        </filter>
        <filter id="gP" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="3.42 3.42" />
        </filter>
        <filter id="gQ" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="3.42 3.42" />
        </filter>
        <filter id="gU" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="4.3227 4.3227" />
        </filter>
        <filter id="gR" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur />
          <feGaussianBlur stdDeviation="3.42 3.42" />
        </filter>
        <clipPath id="q">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <clipPath id="r">
          <path d="M0 0h1515v1121H0z" />
        </clipPath>
        <clipPath id="s">
          <path d="M0 0h322v312H0z" />
        </clipPath>
        <clipPath id="cz">
          <path d="M0 0h302v117H0z" />
        </clipPath>
        <clipPath id="cK">
          <path d="M0 0h346v112H0z" />
        </clipPath>
        <clipPath id="cX">
          <path d="M0 0h270v537H0z" />
        </clipPath>
        <clipPath id="gF">
          <path d="M0 0h229v124H0z" />
        </clipPath>
        <clipPath id="gM">
          <path d="M0 0h75v42H0z" />
        </clipPath>
        <clipPath id="gN">
          <path d="M0 0h55v86H0z" />
        </clipPath>
        <clipPath id="gS">
          <path d="M0 0h80v102H0z" />
        </clipPath>
        <clipPath id="gX">
          <path d="M0 0h407v56H0z" />
        </clipPath>
        <clipPath id="gY">
          <path d="M0 0h137v86H0z" />
        </clipPath>
        <clipPath id="u">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <clipPath id="V">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <clipPath id="by">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <clipPath id="bZ">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <clipPath id="cZ">
          <path d="M0 0h667v941H0z" />
        </clipPath>
        <clipPath id="eO">
          <path d="M0 0h667v941H0z" />
        </clipPath>
        <clipPath id="ha">
          <path d="M0 0h1515v1121H0z" />
        </clipPath>
        <clipPath id="hb">
          <path d="M0 0h1515v1121H0z" />
        </clipPath>
        <clipPath id="aw">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <clipPath id="aX">
          <path d="M0 0h1512v1127H0z" />
        </clipPath>
        <mask id="t" masktype="alpha">
          <g filter="url(#a)">
            <g
              style={{
                display: "block",
              }}
            >
              <path
                fill="#FFF"
                d="M532-454.5s18.355 301.013 19 334c.375 19.216 33.75 46.75 33.75 46.75L665.5-89 757-79l212-85.5-183-237-254-53zM701 190.158l-7.25.759-5.251 13.764-72.749-2.204-.251-11.241-12.874.764-3.25 11.375-5.5-.125-3-9.625L577 215.5l-72 159 34 182 195 38 104-46-9-267-70.5-75.125-10.375-.625-8.25-15.375-4.125.004-1.25 16.004-27.5-.48-6-15.745z"
                transform="translate(-434 102.5)"
              />
            </g>
          </g>
        </mask>
        <mask id="U" masktype="alpha">
          <g filter="url(#b)">
            <g
              style={{
                display: "block",
              }}
            >
              <path
                fill="#FFF"
                d="M532-454.5s18.355 301.013 19 334c.375 19.216 33.75 46.75 33.75 46.75L665.5-89 757-79l212-85.5-183-237-254-53zM701 190.158l-7.25.759-5.251 13.764-72.749-2.204-.251-11.241-12.874.764-3.25 11.375-5.5-.125-3-9.625L577 215.5l-72 159 34 182 195 38 104-46-9-267-70.5-75.125-10.375-.625-8.25-15.375-4.125.004-1.25 16.004-27.5-.48-6-15.745z"
                transform="translate(-434 102.5)"
              />
            </g>
          </g>
        </mask>
        <mask id="bx" masktype="alpha">
          <g filter="url(#c)">
            <g
              style={{
                display: "block",
              }}
            >
              <path
                fill="#FFF"
                d="M532-454.5s18.355 301.013 19 334c.375 19.216 35 52.25 35 52.25s5.478-1.508 11.251-3.121c.199-.055-.829 4.858-2.29 14.865-1.461 10.007 3.501 10.424 2.606 15.518-.481 2.741-1.852 2.548-3.397 7.143-1.545 4.595.844 6.172.161 9.308-.524 2.403-1.957 3.593-2.54 6.053-5.463 23.038-12.267 49.141-14.593 63.101-1.153 6.915-20.282 126.126-20.089 126.074-2.359 8.059-9.359 30.309 3.619 31.793 16.131 5.082 79.258 7.283 95.641 3.454 8.888-2.077 7.158-12.193 7.158-12.193s3.848-13.495-8.415-16.691c-6.612-1.429-30.856-.99-30.856-.99s22.592-126.039 23.339-130.709c4.874-30.469 19.052-127.217 19.655-127.23 46.5-1 86.75 11.625 86.75 11.625l215-94.25-183-237-254-53z"
                transform="translate(-621 102.5)"
              />
              <path
                fill="#FFF"
                d="m695.625 184.533-7.25.759-3.501 12.389-74.499-.829-.251-11.241-12.874.764L594 197.75l-5.5-.125-3-9.625-13.875 21.875L536 384.5l3 172 112 52 154-39-22-269-30.5-100.875-10.75.125-7.5-13.875-5.375-.621-.375 14.004-27.375.145-5.5-14.87z"
                transform="translate(-621 102.5)"
              />
            </g>
          </g>
        </mask>
        <mask id="bY" masktype="alpha">
          <g filter="url(#d)">
            <g
              style={{
                display: "block",
              }}
            >
              <path
                fill="#FFF"
                d="M532-454.5s18.355 301.013 19 334c.375 19.216 35 52.25 35 52.25s5.478-1.508 11.251-3.121c.199-.055-.829 4.858-2.29 14.865-1.461 10.007 3.501 10.424 2.606 15.518-.481 2.741-1.852 2.548-3.397 7.143-1.545 4.595.844 6.172.161 9.308-.524 2.403-1.957 3.593-2.54 6.053-5.463 23.038-12.267 49.141-14.593 63.101-1.153 6.915-20.282 126.126-20.089 126.074-2.359 8.059-9.359 30.309 3.619 31.793 16.131 5.082 79.258 7.283 95.641 3.454 8.888-2.077 7.158-12.193 7.158-12.193s3.848-13.495-8.415-16.691c-6.612-1.429-30.856-.99-30.856-.99s22.592-126.039 23.339-130.709c4.874-30.469 19.052-127.217 19.655-127.23 46.5-1 86.75 11.625 86.75 11.625l215-94.25-183-237-254-53z"
                transform="translate(-621 102.5)"
              />
              <path
                fill="#FFF"
                d="m695.625 184.533-7.25.759-3.501 12.389-74.499-.829-.251-11.241-12.874.764L594 197.75l-5.5-.125-3-9.625-13.875 21.875L536 384.5l3 172 112 52 154-39-22-269-30.5-100.875-10.75.125-7.5-13.875-5.375-.621-.375 14.004-27.375.145-5.5-14.87z"
                transform="translate(-621 102.5)"
              />
            </g>
          </g>
        </mask>
        <mask id="cN">
          <path
            stroke="url(#e)"
            strokeWidth={1.3}
            d="m112.724 139.877-.156-11.429-49.724 1.406-51.219 3.22"
          />
        </mask>
        <mask id="cP">
          <path
            stroke="url(#f)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.3}
            d="m112.724 139.877-.156-11.429-49.724 1.406-51.219 3.22"
          />
        </mask>
        <mask id="cY" masktype="alpha">
          <g filter="url(#g)">
            <g
              style={{
                display: "block",
              }}
            >
              <path
                fill="#FFF"
                d="M36.75 168.25c-12.5-.25-23.5 14-23.5 14l.25 33.25-105.75 2.5s-.25-27.25-.25-33.5-5.25-13-9.5-13h-13.5c-3.25 0-10 8-10 18.5s-2 29-2 29-6.5-1.5-13 2-14.5 19-14.5 19l-128 91 45 82 232.5 50 251-46.5 62-74L160 223l-10.5-4.5-15.5 1-1-48-16.5 1.5.25 44.75-56-.5V181.5s-11.5-13-24-13.25zM-120.75-325.5l-9 16.25 6 16.25 4.25 49.25 9.25 8.75 12.125 1.625L-90.5-250l1.25-33.5S-60-277.75-43-276.625s56.25 2.875 56.25 2.875l2 10.25 26.25 13 31.875-16.75 1-7.125s11.75-1 23.125-2.625 20.25-2.875 20.25-2.875L116.5-217.5l2.5 3.75 25-13.5-.25-64.25 3.75-9.75-3-12.75s18-153.5-30.926-160.758c-17.457-2.59-45.205 2.917-101.569-1.358-52.766-.462-91.706-6.248-113.746-.118C-165.5-458.5-120.75-325.5-120.75-325.5z"
                transform="translate(135 297.5)"
              />
            </g>
          </g>
        </mask>
        <mask id="eN" masktype="alpha">
          <g filter="url(#h)">
            <g
              style={{
                display: "block",
              }}
            >
              <path
                fill="#FFF"
                d="m-120.75-325.5-9 16.25 6 16.25 4.25 49.25 9.25 8.75 12.125 1.625L-90.5-250l1.25-33.5S-60-277.75-43-276.625s56.25 2.875 56.25 2.875l2 10.25 26.25 13 31.875-16.75 1-7.125s11.75-1 23.125-2.625 20.25-2.875 20.25-2.875L116.5-217.5l2.5 3.75 25-13.5-.25-64.25 3.75-9.75-3-12.75s18-153.5-30.926-160.758c-17.457-2.59-45.205 2.917-101.569-1.358-52.766-.462-91.706-6.248-113.746-.118C-165.5-458.5-120.75-325.5-120.75-325.5zM36.75 168.25c-12.5-.25-23.5 14-23.5 14l.25 33.25-105.75 2.5s-.25-27.25-.25-33.5-5.25-13-9.5-13h-13.5c-3.25 0-10 8-10 18.5s-2 29-2 29-6.5-1.5-13 2-14.5 19-14.5 19l-128 91 45 82 232.5 50 251-46.5 62-74L160 223l-10.5-4.5-15.5 1-1-48-16.5 1.5.25 44.75-56-.5V181.5s-11.5-13-24-13.25z"
                transform="translate(135 297.5)"
              />
            </g>
          </g>
        </mask>
        <mask id="gG" masktype="alpha">
          <g
            filter="url(#i)"
            transform="translate(114.5 62)"
            style={{
              display: "block",
            }}
          >
            <path
              fill="#FFF"
              d="M-3.688-50.188c23.058 0 42.312 23.438 44.5 49.688C43.14 27.432 31.824 51 8.766 51c-25.391.5-46.688-23.25-48-52-1.516-28.75 12.488-49.188 35.546-49.188z"
              transform="translate(64 -2.5)"
            />
          </g>
        </mask>
        <mask id="gK" masktype="alpha" />
        <mask id="gZ" masktype="alpha">
          <path
            d="m-225.5-81.875 6.375 9.25 6 12.25s-1.875 23.5-.625 27.875c13.875 5.75 19.875 19.5 19.875 19.5l4.819 9.14 18.241.469 1.31-37.991 2.49.355-.738 37.714 105.986 4.752-.228 2.612-106.454-4.765-1.549 35.799-1.637.302 1.012-36.323-16.426-.705 13.299 36.891s15.25 9.5 15.75 10.25 24.125 18.875 24.125 18.875L-126 64l13.125 8.625s3.25 8.25 4.25 10 15.25 2.5 15.25 2.5l11 12.125 20.687 20.25V-72.25L-225.5-81.875z"
            transform="translate(197.125 26.25)"
            style={{
              display: "block",
            }}
          />
        </mask>
        <mask id="ho" masktype="alpha">
          <path
            d="m-225.5-81.875 6.375 9.25 6 12.25s-1.875 23.5-.625 27.875c13.875 5.75 19.875 19.5 19.875 19.5l4.819 9.14 20.491.719 1.31-37.991 2.49.355-.738 37.714L-61.58 1.439l-.228 2.612-104.391-4.515-1.549 35.799-1.637.302 1.012-36.323-18.676-.955L-171.5 35.5s13 9.25 13.5 10 24.125 18.875 24.125 18.875L-126 64l13.125 8.625s3.25 8.25 4.25 10 15.25 2.5 15.25 2.5l11 12.125L-61.5 117.5V-72.25l-164-9.625z"
            transform="translate(197.125 26.25)"
            style={{
              display: "block",
            }}
          />
        </mask>
        <mask id="av" masktype="alpha">
          <g filter="url(#k)" />
        </mask>
        <mask id="aW" masktype="alpha">
          <g filter="url(#l)" />
        </mask>
        <mask id="cC">
          <path stroke="url(#m)" strokeWidth={1.3} d="M100.625 89.125" />
        </mask>
        <mask id="cE">
          <path
            stroke="url(#n)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.3}
            d="M100.625 89.125s0 0 0 0"
          />
        </mask>
        <mask id="gI" masktype="alpha" />
        <mask id="gV" masktype="alpha" />
        <radialGradient
          id="hn"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          cx={5.444}
          cy={-159.334}
          r={207.488}
          fx={5.444}
          fy={-159.334}
        >
          <stop offset="0%" stopColor="#FCFCFC" />
          <stop offset="52%" stopColor="#FDFDFD" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
        </radialGradient>
      </defs>
      <g clipPath="url(#q)">
        <g
          clipPath="url(#r)"
          transform="translate(-1.5 3)"
          style={{
            display: "block",
          }}
        >
          <g
            clipPath="url(#s)"
            transform="translate(1191 458)"
            style={{
              display: "block",
            }}
          >
            <g
              mask="url(#t)"
              style={{
                display: "block",
              }}
            >
              <g
                clipPath="url(#u)"
                transform="translate(-519.75 -437.683)"
                opacity={0.4}
              >
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#v)"
                    d="M.012-8.51a8.506 8.506 0 0 0-4.73 1.43 8.484 8.484 0 0 0-3.14 3.818 8.458 8.458 0 0 0-.49 4.919 8.513 8.513 0 0 0 15.43 3.064A8.558 8.558 0 0 0 8.512-.01a8.574 8.574 0 0 0-8.5-8.5z"
                    transform="translate(692.22 454.997)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#w)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(766.107 447.32)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#x)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(733.663 524.875)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#y)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(731.11 490.905) scale(2.52184)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#z)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(766.444 672.089)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#A)"
                    d="M1.97-2a2.818 2.818 0 0 0-3.07-.604c-.52.214-.96.575-1.26 1.039A2.818 2.818 0 0 0-2.84 0c0 .557.17 1.101.48 1.565.3.463.74.825 1.26 1.038.51.214 1.08.271 1.63.164A2.863 2.863 0 0 0 1.97 2l.09-.09a2.703 2.703 0 0 0 0-3.8C2.03-1.93 2-1.966 1.97-2z"
                    transform="translate(694.742 525.177)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#B)"
                    d="M4.462 0a4.46 4.46 0 0 0-.75-2.479 4.455 4.455 0 0 0-2.01-1.643 4.434 4.434 0 0 0-2.57-.252c-.87.173-1.66.599-2.29 1.224a4.551 4.551 0 0 0-1.22 2.286 4.458 4.458 0 0 0 1.91 4.577c.73.489 1.6.749 2.48.747A4.487 4.487 0 0 0 4.462 0z"
                    transform="translate(702.12 603.487)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#C)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(828.352 558.437)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#D)"
                    d="M-.001 3.714c3.85 0 4.76-4.85 1.86-6.86l-.12-.08a3.346 3.346 0 0 0-3.48 0l-.11.08c-2.91 2.01-2 6.86 1.85 6.86z"
                    transform="translate(826.183 458.043)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#E)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(800.419 484.306)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#F)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(814.602 516.627)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#G)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(768.046 583.243)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#H)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(772.03 505.695)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#I)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(763.047 544.182)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#J)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(716.919 574.357)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#K)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(773.511 623.246)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#L)"
                    d="M0-3.63c-4.68 0-4.68 7.26 0 7.26s4.68-7.26 0-7.26z"
                    transform="translate(735.06 590.846)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#M)"
                    d="M4 0c0-.791-.23-1.564-.67-2.222A4.013 4.013 0 0 0-.78-3.923 3.986 3.986 0 0 0-3.92-.78C-4.08-.004-4 .8-3.7 1.531c.31.731.82 1.355 1.48 1.795A4.002 4.002 0 0 0 4 0z"
                    transform="translate(698.132 560.596)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#N)"
                    d="M0-2.194c-2.83 0-2.83 4.388 0 4.388s2.83-4.388 0-4.388z"
                    transform="translate(689.622 488.772)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#O)"
                    d="M0-5c-.99 0-1.96.293-2.78.842a5.028 5.028 0 0 0-1.84 2.244A4.929 4.929 0 0 0-4.9.975c.19.97.67 1.861 1.36 2.56a4.998 4.998 0 0 0 5.45 1.084A4.983 4.983 0 0 0 5 0a5.03 5.03 0 0 0-1.46-3.536A5.01 5.01 0 0 0 0-5z"
                    transform="translate(704.762 671.277)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#P)"
                    d="M0-2.96c-3.82 0-3.82 5.92 0 5.92s3.82-5.92 0-5.92z"
                    transform="translate(743.972 650.676)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#Q)"
                    d="M-.002-3.725c-4.81 0-4.81 7.45 0 7.45s4.82-7.45 0-7.45z"
                    transform="translate(709.034 630.481)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#R)"
                    d="M.012-3.9a3.895 3.895 0 0 0-3.61 2.402c-.3.714-.38 1.499-.23 2.256a3.907 3.907 0 0 0 7.08 1.402c.42-.643.65-1.398.65-2.17a3.918 3.918 0 0 0-1.15-2.74A3.933 3.933 0 0 0 .012-3.9z"
                    transform="translate(813.69 626.267)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#S)"
                    d="M.012-4.4a4.424 4.424 0 0 0-2.45.736 4.395 4.395 0 0 0-1.62 1.973 4.347 4.347 0 0 0-.26 2.543c.17.854.59 1.639 1.21 2.255a4.34 4.34 0 0 0 2.25 1.207 4.39 4.39 0 0 0 2.54-.248 4.415 4.415 0 0 0 1.98-1.621A4.43 4.43 0 0 0 4.402 0a4.447 4.447 0 0 0-4.39-4.4z"
                    transform="translate(803.37 663.097)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#T)"
                    d="M.01-5.17a5.212 5.212 0 0 0-2.88.866 5.146 5.146 0 0 0-1.9 2.318 5.1 5.1 0 0 0-.3 2.988c.2 1.004.69 1.926 1.41 2.65A5.148 5.148 0 0 0-1.01 5.07c1 .2 2.04.098 2.99-.293A5.204 5.204 0 0 0 4.3 2.873c.57-.851.87-1.85.87-2.873a5.227 5.227 0 0 0-1.52-3.641A5.217 5.217 0 0 0 .01-5.17z"
                    transform="translate(823.122 688.287)"
                    opacity={1}
                  />
                </g>
              </g>
            </g>
            <g
              mask="url(#U)"
              style={{
                display: "block",
              }}
            >
              <g
                clipPath="url(#V)"
                transform="translate(-519.75 -360.683)"
                opacity={0.25}
              >
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#W)"
                    d="M.012-8.51a8.506 8.506 0 0 0-4.73 1.43 8.484 8.484 0 0 0-3.14 3.818 8.458 8.458 0 0 0-.49 4.919 8.513 8.513 0 0 0 15.43 3.064A8.558 8.558 0 0 0 8.512-.01a8.574 8.574 0 0 0-8.5-8.5z"
                    transform="translate(692.22 454.997)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#X)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(766.107 447.32)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#Y)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(733.663 524.875)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#Z)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(731.11 490.905) scale(2.52184)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#aa)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(766.444 672.089)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ab)"
                    d="M1.97-2a2.818 2.818 0 0 0-3.07-.604c-.52.214-.96.575-1.26 1.039A2.818 2.818 0 0 0-2.84 0c0 .557.17 1.101.48 1.565.3.463.74.825 1.26 1.038.51.214 1.08.271 1.63.164A2.863 2.863 0 0 0 1.97 2l.09-.09a2.703 2.703 0 0 0 0-3.8C2.03-1.93 2-1.966 1.97-2z"
                    transform="translate(694.742 525.177)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ac)"
                    d="M4.462 0a4.46 4.46 0 0 0-.75-2.479 4.455 4.455 0 0 0-2.01-1.643 4.434 4.434 0 0 0-2.57-.252c-.87.173-1.66.599-2.29 1.224a4.551 4.551 0 0 0-1.22 2.286 4.458 4.458 0 0 0 1.91 4.577c.73.489 1.6.749 2.48.747A4.487 4.487 0 0 0 4.462 0z"
                    transform="translate(702.12 603.487)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ad)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(828.352 558.437)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ae)"
                    d="M-.001 3.714c3.85 0 4.76-4.85 1.86-6.86l-.12-.08a3.346 3.346 0 0 0-3.48 0l-.11.08c-2.91 2.01-2 6.86 1.85 6.86z"
                    transform="translate(826.183 458.043)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#af)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(800.419 484.306)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ag)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(814.602 516.627)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ah)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(768.046 583.243)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ai)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(772.03 505.695)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#aj)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(763.047 544.182)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ak)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(716.919 574.357)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#al)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(773.511 623.246)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#am)"
                    d="M0-3.63c-4.68 0-4.68 7.26 0 7.26s4.68-7.26 0-7.26z"
                    transform="translate(735.06 590.846)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#an)"
                    d="M4 0c0-.791-.23-1.564-.67-2.222A4.013 4.013 0 0 0-.78-3.923 3.986 3.986 0 0 0-3.92-.78C-4.08-.004-4 .8-3.7 1.531c.31.731.82 1.355 1.48 1.795A4.002 4.002 0 0 0 4 0z"
                    transform="translate(698.132 560.596)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ao)"
                    d="M0-2.194c-2.83 0-2.83 4.388 0 4.388s2.83-4.388 0-4.388z"
                    transform="translate(689.622 488.772)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ap)"
                    d="M0-5c-.99 0-1.96.293-2.78.842a5.028 5.028 0 0 0-1.84 2.244A4.929 4.929 0 0 0-4.9.975c.19.97.67 1.861 1.36 2.56a4.998 4.998 0 0 0 5.45 1.084A4.983 4.983 0 0 0 5 0a5.03 5.03 0 0 0-1.46-3.536A5.01 5.01 0 0 0 0-5z"
                    transform="translate(704.762 671.277)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#aq)"
                    d="M0-2.96c-3.82 0-3.82 5.92 0 5.92s3.82-5.92 0-5.92z"
                    transform="translate(743.972 650.676)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ar)"
                    d="M-.002-3.725c-4.81 0-4.81 7.45 0 7.45s4.82-7.45 0-7.45z"
                    transform="translate(709.034 630.481)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#as)"
                    d="M.012-3.9a3.895 3.895 0 0 0-3.61 2.402c-.3.714-.38 1.499-.23 2.256a3.907 3.907 0 0 0 7.08 1.402c.42-.643.65-1.398.65-2.17a3.918 3.918 0 0 0-1.15-2.74A3.933 3.933 0 0 0 .012-3.9z"
                    transform="translate(813.69 626.267)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#at)"
                    d="M.012-4.4a4.424 4.424 0 0 0-2.45.736 4.395 4.395 0 0 0-1.62 1.973 4.347 4.347 0 0 0-.26 2.543c.17.854.59 1.639 1.21 2.255a4.34 4.34 0 0 0 2.25 1.207 4.39 4.39 0 0 0 2.54-.248 4.415 4.415 0 0 0 1.98-1.621A4.43 4.43 0 0 0 4.402 0a4.447 4.447 0 0 0-4.39-4.4z"
                    transform="translate(803.37 663.097)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#au)"
                    d="M.01-5.17a5.212 5.212 0 0 0-2.88.866 5.146 5.146 0 0 0-1.9 2.318 5.1 5.1 0 0 0-.3 2.988c.2 1.004.69 1.926 1.41 2.65A5.148 5.148 0 0 0-1.01 5.07c1 .2 2.04.098 2.99-.293A5.204 5.204 0 0 0 4.3 2.873c.57-.851.87-1.85.87-2.873a5.227 5.227 0 0 0-1.52-3.641A5.217 5.217 0 0 0 .01-5.17z"
                    transform="translate(823.122 688.287)"
                    opacity={1}
                  />
                </g>
              </g>
            </g>
            <g
              mask="url(#bx)"
              style={{
                display: "block",
              }}
            >
              <g
                clipPath="url(#by)"
                transform="translate(-706.75 -473.617)"
                opacity={0.229}
              >
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bz)"
                    d="M.012-8.51a8.506 8.506 0 0 0-4.73 1.43 8.484 8.484 0 0 0-3.14 3.818 8.458 8.458 0 0 0-.49 4.919 8.513 8.513 0 0 0 15.43 3.064A8.558 8.558 0 0 0 8.512-.01a8.574 8.574 0 0 0-8.5-8.5z"
                    transform="translate(692.22 454.997)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bA)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(766.107 447.32)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bB)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(733.663 524.875)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bC)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(731.11 490.905) scale(2.52184)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bD)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(766.444 672.089)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bE)"
                    d="M1.97-2a2.818 2.818 0 0 0-3.07-.604c-.52.214-.96.575-1.26 1.039A2.818 2.818 0 0 0-2.84 0c0 .557.17 1.101.48 1.565.3.463.74.825 1.26 1.038.51.214 1.08.271 1.63.164A2.863 2.863 0 0 0 1.97 2l.09-.09a2.703 2.703 0 0 0 0-3.8C2.03-1.93 2-1.966 1.97-2z"
                    transform="translate(694.742 525.177)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bF)"
                    d="M4.462 0a4.46 4.46 0 0 0-.75-2.479 4.455 4.455 0 0 0-2.01-1.643 4.434 4.434 0 0 0-2.57-.252c-.87.173-1.66.599-2.29 1.224a4.551 4.551 0 0 0-1.22 2.286 4.458 4.458 0 0 0 1.91 4.577c.73.489 1.6.749 2.48.747A4.487 4.487 0 0 0 4.462 0z"
                    transform="translate(702.12 603.487)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bG)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(828.352 558.437)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bH)"
                    d="M-.001 3.714c3.85 0 4.76-4.85 1.86-6.86l-.12-.08a3.346 3.346 0 0 0-3.48 0l-.11.08c-2.91 2.01-2 6.86 1.85 6.86z"
                    transform="translate(826.183 458.043)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bI)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(800.419 484.306)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bJ)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(814.602 516.627)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bK)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(768.046 583.243)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bL)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(772.03 505.695)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bM)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(763.047 544.182)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bN)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(716.919 574.357)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bO)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(773.511 623.246)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bP)"
                    d="M0-3.63c-4.68 0-4.68 7.26 0 7.26s4.68-7.26 0-7.26z"
                    transform="translate(735.06 590.846)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bQ)"
                    d="M4 0c0-.791-.23-1.564-.67-2.222A4.013 4.013 0 0 0-.78-3.923 3.986 3.986 0 0 0-3.92-.78C-4.08-.004-4 .8-3.7 1.531c.31.731.82 1.355 1.48 1.795A4.002 4.002 0 0 0 4 0z"
                    transform="translate(698.132 560.596)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bR)"
                    d="M0-2.194c-2.83 0-2.83 4.388 0 4.388s2.83-4.388 0-4.388z"
                    transform="translate(689.622 488.772)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bS)"
                    d="M0-5c-.99 0-1.96.293-2.78.842a5.028 5.028 0 0 0-1.84 2.244A4.929 4.929 0 0 0-4.9.975c.19.97.67 1.861 1.36 2.56a4.998 4.998 0 0 0 5.45 1.084A4.983 4.983 0 0 0 5 0a5.03 5.03 0 0 0-1.46-3.536A5.01 5.01 0 0 0 0-5z"
                    transform="translate(704.762 671.277)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bT)"
                    d="M0-2.96c-3.82 0-3.82 5.92 0 5.92s3.82-5.92 0-5.92z"
                    transform="translate(743.972 650.676)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bU)"
                    d="M-.002-3.725c-4.81 0-4.81 7.45 0 7.45s4.82-7.45 0-7.45z"
                    transform="translate(709.034 630.481)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bV)"
                    d="M.012-3.9a3.895 3.895 0 0 0-3.61 2.402c-.3.714-.38 1.499-.23 2.256a3.907 3.907 0 0 0 7.08 1.402c.42-.643.65-1.398.65-2.17a3.918 3.918 0 0 0-1.15-2.74A3.933 3.933 0 0 0 .012-3.9z"
                    transform="translate(813.69 626.267)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bW)"
                    d="M.012-4.4a4.424 4.424 0 0 0-2.45.736 4.395 4.395 0 0 0-1.62 1.973 4.347 4.347 0 0 0-.26 2.543c.17.854.59 1.639 1.21 2.255a4.34 4.34 0 0 0 2.25 1.207 4.39 4.39 0 0 0 2.54-.248 4.415 4.415 0 0 0 1.98-1.621A4.43 4.43 0 0 0 4.402 0a4.447 4.447 0 0 0-4.39-4.4z"
                    transform="translate(803.37 663.097)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#bX)"
                    d="M.01-5.17a5.212 5.212 0 0 0-2.88.866 5.146 5.146 0 0 0-1.9 2.318 5.1 5.1 0 0 0-.3 2.988c.2 1.004.69 1.926 1.41 2.65A5.148 5.148 0 0 0-1.01 5.07c1 .2 2.04.098 2.99-.293A5.204 5.204 0 0 0 4.3 2.873c.57-.851.87-1.85.87-2.873a5.227 5.227 0 0 0-1.52-3.641A5.217 5.217 0 0 0 .01-5.17z"
                    transform="translate(823.122 688.287)"
                    opacity={1}
                  />
                </g>
              </g>
            </g>
            <g
              mask="url(#bY)"
              style={{
                display: "block",
              }}
            >
              <g
                clipPath="url(#bZ)"
                transform="translate(-706.75 -396.617)"
                opacity={0.4}
              >
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ca)"
                    d="M.012-8.51a8.506 8.506 0 0 0-4.73 1.43 8.484 8.484 0 0 0-3.14 3.818 8.458 8.458 0 0 0-.49 4.919 8.513 8.513 0 0 0 15.43 3.064A8.558 8.558 0 0 0 8.512-.01a8.574 8.574 0 0 0-8.5-8.5z"
                    transform="translate(692.22 454.997)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cb)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(766.107 447.32)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cc)"
                    d="m-.309 2.295.78-.1A2.198 2.198 0 0 0 2.521 0a2.192 2.192 0 0 0-2.05-2.195l-.78-.1c-2.95-.36-2.95 4.95 0 4.59z"
                    transform="translate(733.663 524.875)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cd)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(731.11 490.905) scale(2.52184)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ce)"
                    d="M1.154-.464.904-.82a1.217 1.217 0 0 0-1.606-.44A1.219 1.219 0 0 0-1.25.312l.152.408c.584 1.54 3.189.171 2.252-1.184z"
                    transform="translate(766.444 672.089)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cf)"
                    d="M1.97-2a2.818 2.818 0 0 0-3.07-.604c-.52.214-.96.575-1.26 1.039A2.818 2.818 0 0 0-2.84 0c0 .557.17 1.101.48 1.565.3.463.74.825 1.26 1.038.51.214 1.08.271 1.63.164A2.863 2.863 0 0 0 1.97 2l.09-.09a2.703 2.703 0 0 0 0-3.8C2.03-1.93 2-1.966 1.97-2z"
                    transform="translate(694.742 525.177)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cg)"
                    d="M4.462 0a4.46 4.46 0 0 0-.75-2.479 4.455 4.455 0 0 0-2.01-1.643 4.434 4.434 0 0 0-2.57-.252c-.87.173-1.66.599-2.29 1.224a4.551 4.551 0 0 0-1.22 2.286 4.458 4.458 0 0 0 1.91 4.577c.73.489 1.6.749 2.48.747A4.487 4.487 0 0 0 4.462 0z"
                    transform="translate(702.12 603.487)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ch)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(828.352 558.437)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ci)"
                    d="M-.001 3.714c3.85 0 4.76-4.85 1.86-6.86l-.12-.08a3.346 3.346 0 0 0-3.48 0l-.11.08c-2.91 2.01-2 6.86 1.85 6.86z"
                    transform="translate(826.183 458.043)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cj)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(800.419 484.306)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ck)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(814.602 516.627)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cl)"
                    d="M4.46.01a4.47 4.47 0 0 0-2.75-4.128 4.436 4.436 0 0 0-2.57-.258c-.87.171-1.67.595-2.29 1.219A4.467 4.467 0 0 0-4.37-.874c-.18.866-.09 1.763.25 2.578.34.816.91 1.513 1.64 2.004.73.49 1.6.752 2.48.752 1.18-.01 2.3-.482 3.14-1.314A4.503 4.503 0 0 0 4.46.01z"
                    transform="translate(768.046 583.243)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cm)"
                    d="m2.268 2.602.33-.34c3.14-3.13-1.73-8-4.87-4.86l-.32.33c-3.15 3.14 1.71 8 4.86 4.87z"
                    transform="translate(772.03 505.695)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cn)"
                    d="M-.01-4.34a4.336 4.336 0 0 0-4 2.687A4.386 4.386 0 0 0-4.26.853c.17.842.59 1.614 1.19 2.22A4.382 4.382 0 0 0-.84 4.258c.84.166 1.71.08 2.5-.249A4.332 4.332 0 0 0 4.34.001 4.355 4.355 0 0 0 3.05-3.06 4.365 4.365 0 0 0-.01-4.34z"
                    transform="translate(763.047 544.182)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#co)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(716.919 574.357)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cp)"
                    d="M0-5.83a5.84 5.84 0 0 0-3.24.982c-.96.64-1.7 1.55-2.15 2.614a5.877 5.877 0 0 0-.33 3.367c.23 1.131.78 2.17 1.59 2.986a5.88 5.88 0 0 0 2.99 1.597 5.79 5.79 0 0 0 3.36-.327A5.831 5.831 0 0 0 5.83.01a5.878 5.878 0 0 0-1.72-4.112A5.896 5.896 0 0 0 0-5.83z"
                    transform="translate(773.511 623.246)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cq)"
                    d="M0-3.63c-4.68 0-4.68 7.26 0 7.26s4.68-7.26 0-7.26z"
                    transform="translate(735.06 590.846)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cr)"
                    d="M4 0c0-.791-.23-1.564-.67-2.222A4.013 4.013 0 0 0-.78-3.923 3.986 3.986 0 0 0-3.92-.78C-4.08-.004-4 .8-3.7 1.531c.31.731.82 1.355 1.48 1.795A4.002 4.002 0 0 0 4 0z"
                    transform="translate(698.132 560.596)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cs)"
                    d="M0-2.194c-2.83 0-2.83 4.388 0 4.388s2.83-4.388 0-4.388z"
                    transform="translate(689.622 488.772)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ct)"
                    d="M0-5c-.99 0-1.96.293-2.78.842a5.028 5.028 0 0 0-1.84 2.244A4.929 4.929 0 0 0-4.9.975c.19.97.67 1.861 1.36 2.56a4.998 4.998 0 0 0 5.45 1.084A4.983 4.983 0 0 0 5 0a5.03 5.03 0 0 0-1.46-3.536A5.01 5.01 0 0 0 0-5z"
                    transform="translate(704.762 671.277)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cu)"
                    d="M0-2.96c-3.82 0-3.82 5.92 0 5.92s3.82-5.92 0-5.92z"
                    transform="translate(743.972 650.676)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cv)"
                    d="M-.002-3.725c-4.81 0-4.81 7.45 0 7.45s4.82-7.45 0-7.45z"
                    transform="translate(709.034 630.481)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cw)"
                    d="M.012-3.9a3.895 3.895 0 0 0-3.61 2.402c-.3.714-.38 1.499-.23 2.256a3.907 3.907 0 0 0 7.08 1.402c.42-.643.65-1.398.65-2.17a3.918 3.918 0 0 0-1.15-2.74A3.933 3.933 0 0 0 .012-3.9z"
                    transform="translate(813.69 626.267)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cx)"
                    d="M.012-4.4a4.424 4.424 0 0 0-2.45.736 4.395 4.395 0 0 0-1.62 1.973 4.347 4.347 0 0 0-.26 2.543c.17.854.59 1.639 1.21 2.255a4.34 4.34 0 0 0 2.25 1.207 4.39 4.39 0 0 0 2.54-.248 4.415 4.415 0 0 0 1.98-1.621A4.43 4.43 0 0 0 4.402 0a4.447 4.447 0 0 0-4.39-4.4z"
                    transform="translate(803.37 663.097)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.52}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#cy)"
                    d="M.01-5.17a5.212 5.212 0 0 0-2.88.866 5.146 5.146 0 0 0-1.9 2.318 5.1 5.1 0 0 0-.3 2.988c.2 1.004.69 1.926 1.41 2.65A5.148 5.148 0 0 0-1.01 5.07c1 .2 2.04.098 2.99-.293A5.204 5.204 0 0 0 4.3 2.873c.57-.851.87-1.85.87-2.873a5.227 5.227 0 0 0-1.52-3.641A5.217 5.217 0 0 0 .01-5.17z"
                    transform="translate(823.122 688.287)"
                    opacity={1}
                  />
                </g>
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cz)"
            transform="translate(647.5 858)"
            style={{
              display: "block",
            }}
          >
            <g
              filter="url(#cF)"
              transform="translate(62.625 -80.5)"
              style={{
                display: "block",
              }}
            >
              <path
                stroke="url(#cG)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.3}
                d="M59.614 139.188c13.227.312 24.231.468 30.509.376 53.514-.781 127.239-4.095 142.522-5.465"
                fill="none"
              />
            </g>
            <path
              stroke="url(#cH)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.3}
              d="M59.614 139.188c13.227.312 24.231.468 30.509.376 53.514-.781 127.239-4.095 142.522-5.465"
              fill="none"
              transform="translate(62.625 -80.5)"
              style={{
                display: "block",
              }}
            />
          </g>
          <g
            clipPath="url(#cK)"
            transform="translate(615 186)"
            style={{
              display: "block",
            }}
          >
            <g
              filter="url(#cL)"
              transform="translate(96.625 -44.5)"
              style={{
                display: "block",
              }}
            >
              <path
                stroke="url(#cM)"
                mask="url(#cN)"
                strokeWidth={1.3}
                d="m112.724 139.877-.156-11.429-49.724 1.406-51.219 3.22"
                fill="none"
              />
            </g>
            <path
              stroke="url(#cO)"
              mask="url(#cP)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.3}
              d="m112.724 139.877-.156-11.429-49.724 1.406-51.219 3.22"
              fill="none"
              transform="translate(96.625 -44.5)"
              style={{
                display: "block",
              }}
            />
            <g
              filter="url(#cQ)"
              transform="translate(96.625 -100.5)"
              style={{
                display: "block",
              }}
            >
              <path
                stroke="url(#cR)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.3}
                d="M125.562 153.337c-13.432-.932-26.414-1.362-37.938-1.273-92.274-5.506-210.253 20.875-148.82 51.465"
                fill="none"
              />
            </g>
            <path
              stroke="url(#cS)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.3}
              d="M125.562 153.337c-13.432-.932-26.414-1.362-37.938-1.273-92.274-5.506-210.253 20.875-148.82 51.465"
              fill="none"
              transform="translate(96.625 -100.5)"
              style={{
                display: "block",
              }}
            />
            <path
              stroke="url(#cV)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.3}
              d="m-30.938 82-.097-5.315"
              fill="none"
              transform="translate(96.625 -44.5)"
              style={{
                display: "block",
              }}
            />
          </g>
          <g
            clipPath="url(#cX)"
            transform="translate(651.5 333)"
            style={{
              display: "block",
            }}
          >
            <g
              mask="url(#cY)"
              style={{
                display: "block",
              }}
            >
              <g clipPath="url(#cZ)" transform="translate(-198.5 -227.539)">
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#da)"
                    d="M6.359-5.595A8.472 8.472 0 0 0-8.453-.538 8.476 8.476 0 0 0-3.73 7.604 8.47 8.47 0 0 0 6.359-5.595z"
                    transform="translate(328.891 542.571)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#db)"
                    d="M3.795-3.345a5.062 5.062 0 0 0-7.819.275 5.06 5.06 0 1 0 8.569 5.297 5.054 5.054 0 0 0-.75-5.572z"
                    transform="translate(355.225 550.56)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dc)"
                    d="M2.458-2.144a3.258 3.258 0 0 0-5.041.158 3.261 3.261 0 0 0 4.741 4.432 3.272 3.272 0 0 0 .3-4.59z"
                    transform="translate(343.742 559.43)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dd)"
                    d="M2.449-2.149a3.252 3.252 0 0 0-3.503-.936A3.261 3.261 0 1 0 2.93 1.433a3.254 3.254 0 0 0-.481-3.582z"
                    transform="translate(416.52 540.035)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#de)"
                    d="M.799-.59a1.015 1.015 0 0 0-.704-.45 1.01 1.01 0 0 0-.8.242A.99.99 0 0 0-.944.383c.062.13.152.245.263.337a.998.998 0 0 0 1.39.09.998.998 0 0 0 .09-1.4z"
                    transform="translate(323.611 581.385)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#df)"
                    d="M.745-.649a1.002 1.002 0 0 0-1.4-.091A1 1 0 0 0-.745.651a1.004 1.004 0 0 0 1.4.09 1.003 1.003 0 0 0 .09-1.39z"
                    transform="translate(364.715 576.825)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dg)"
                    d="M.756-.654A1.001 1.001 0 0 0-.865.503 1.001 1.001 0 1 0 .756-.654z"
                    transform="translate(442.894 566.57)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dh)"
                    d="M.745-.649a1.002 1.002 0 0 0-1.4-.091A1 1 0 0 0-.745.651a1.004 1.004 0 0 0 1.4.09 1.003 1.003 0 0 0 .09-1.39z"
                    transform="translate(430.235 575.195)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#di)"
                    d="M8.976-7.964a12.008 12.008 0 0 0-5.926-3.642A12.008 12.008 0 0 0-9.542-7.277 11.999 11.999 0 0 0 1.556 11.899 12.005 12.005 0 0 0 11.976.761a12.002 12.002 0 0 0-3-8.725z"
                    transform="translate(361.074 614.239)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dj)"
                    d="M4.513-3.953A6.003 6.003 0 0 0-5.989-.376a6.004 6.004 0 0 0 3.358 5.769 6.004 6.004 0 0 0 6.614-.906 6.001 6.001 0 0 0 .53-8.44z"
                    transform="translate(390.196 567.568)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dk)"
                    d="M4.518-3.948A6 6 0 1 0-4.519 3.95a6 6 0 0 0 9.037-7.898z"
                    transform="translate(290.192 607.824)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dl)"
                    d="M4.513-3.953a5.997 5.997 0 0 0-6.448-1.726A5.995 5.995 0 0 0-5.988-.376 5.996 5.996 0 0 0-2.63 5.393 6.001 6.001 0 0 0 5.988.376a6 6 0 0 0-1.475-4.329z"
                    transform="translate(355.847 480.188)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dm)"
                    d="M4.513-3.953A5.998 5.998 0 0 0-5.988-.376 5.992 5.992 0 0 0-2.63 5.393a5.992 5.992 0 0 0 3.444.551 6 6 0 0 0 3.699-9.897z"
                    transform="translate(249.847 520.049)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#dn)"
                  d="M2.158-1.905a2.88 2.88 0 1 0-.261 4.07A2.874 2.874 0 0 0 2.876.184a2.859 2.859 0 0 0-.151-1.116 2.852 2.852 0 0 0-.567-.973z"
                  transform="translate(265.912 439.661)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#do)"
                    d="M2.629-2.31a3.498 3.498 0 0 0-5.408.182A3.498 3.498 0 0 0 .459 3.47a3.5 3.5 0 0 0 2.17-5.78z"
                    transform="translate(439.66 593.455)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#dp)"
                  d="M2.595-2.349a3.504 3.504 0 0 0-5.386.236 3.5 3.5 0 1 0 5.386-.236z"
                  transform="translate(340.255 597.105)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dq)"
                    d="M1.856-1.63a2.475 2.475 0 0 0-2.654-.708 2.472 2.472 0 0 0-.288 4.557 2.476 2.476 0 0 0 2.722-.369 2.471 2.471 0 0 0 .22-3.48z"
                    transform="translate(403.504 618.224)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dr)"
                    d="M1.853-1.636a2.47 2.47 0 1 0-.22 3.49 2.482 2.482 0 0 0 .22-3.49z"
                    transform="translate(415.857 546.611)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#ds)"
                  d="M4.557-4.026a6.078 6.078 0 0 0-6.529-1.725 6.08 6.08 0 1 0 6.529 1.725z"
                  transform="translate(405.153 605.421)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dt)"
                    d="M6.337-5.623a8.474 8.474 0 0 0-9.09-2.386A8.469 8.469 0 0 0 1.102 8.398a8.468 8.468 0 0 0 4.475-2.021 8.482 8.482 0 0 0 .76-12z"
                    transform="translate(318.373 434.229)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#du)"
                    d="M3.797-3.345a5.058 5.058 0 0 0-8.172 5.886 5.057 5.057 0 0 0 7.722 1.254 5.059 5.059 0 0 0 .45-7.14z"
                    transform="translate(344.723 442.22)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dv)"
                    d="M2.456-2.144a3.263 3.263 0 0 0-3.501-.944A3.26 3.26 0 1 0 3.253.213a3.26 3.26 0 0 0-.797-2.357z"
                    transform="translate(333.254 451.119)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dw)"
                    d="M2.444-2.155a3.25 3.25 0 0 0-1.61-.995 3.25 3.25 0 0 0-3.427 1.171 3.261 3.261 0 0 0 3.025 5.21A3.266 3.266 0 0 0 3.255.205a3.235 3.235 0 0 0-.811-2.36z"
                    transform="translate(406.025 431.69)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dx)"
                    d="M.74-.65a1.007 1.007 0 0 0-.703-.469A1 1 0 0 0-.74.651a1.008 1.008 0 0 0 .703.467 1.002 1.002 0 0 0 1.048-1.43A1.01 1.01 0 0 0 .74-.65z"
                    transform="translate(313.17 473.105)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dy)"
                    d="M.761-.649a1.003 1.003 0 0 0-1.076-.3 1 1 0 1 0 1.076.3z"
                    transform="translate(354.199 468.475)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dz)"
                    d="M.761-.649a1.003 1.003 0 0 0-1.076-.3 1 1 0 1 0 1.076.3z"
                    transform="translate(432.389 458.225)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dA)"
                    d="M.779-.616a1 1 0 0 0-1.4-.08 1.003 1.003 0 0 0-.09 1.39.997.997 0 0 0 1.322.001A1.003 1.003 0 0 0 .779-.616z"
                    transform="translate(419.701 466.811)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dB)"
                    d="M8.976-7.964a12.008 12.008 0 0 0-5.926-3.642A12.008 12.008 0 0 0-9.542-7.277 12.002 12.002 0 0 0 1.556 11.899 12.003 12.003 0 0 0 11.976.761a12.002 12.002 0 0 0-3-8.725z"
                    transform="translate(350.574 505.939)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dC)"
                    d="M4.513-3.953a5.997 5.997 0 0 0-6.448-1.726 6 6 0 1 0 6.448 1.726z"
                    transform="translate(379.646 459.228)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dD)"
                    d="M4.518-3.949A6.003 6.003 0 0 0-5.988-.383a6.005 6.005 0 0 0 3.352 5.772 6 6 0 0 0 7.154-9.338z"
                    transform="translate(279.642 499.474)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dE)"
                    d="M4.518-3.948a6.002 6.002 0 0 0-9.703 6.967A5.999 5.999 0 0 0 5.988.376a6 6 0 0 0-1.47-4.324z"
                    transform="translate(345.342 371.843)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dF)"
                    d="M4.518-3.947a6.002 6.002 0 0 0-9.284.302 5.996 5.996 0 0 0-.419 6.665A5.996 5.996 0 0 0 .819 5.944a5.998 5.998 0 0 0 3.699-9.891z"
                    transform="translate(239.342 411.703)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#dG)"
                  d="M2.16-1.906a2.879 2.879 0 0 0-4.448.157 2.874 2.874 0 0 0-.204 3.192 2.873 2.873 0 0 0 2.87 1.412A2.882 2.882 0 0 0 2.16-1.906z"
                  transform="translate(255.41 331.31)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dH)"
                    d="M2.627-2.315A3.507 3.507 0 0 0 .9-3.383a3.5 3.5 0 1 0 1.407 6.018 3.513 3.513 0 0 0 .32-4.95z"
                    transform="translate(429.163 485.111)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#dI)"
                  d="M2.623-2.315a3.508 3.508 0 0 0-3.76-.996A3.506 3.506 0 0 0-3.495-.219a3.502 3.502 0 0 0 1.953 3.363A3.507 3.507 0 0 0 3.495.22a3.48 3.48 0 0 0-.872-2.535z"
                  transform="translate(329.727 488.73)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dJ)"
                    d="M1.853-1.635a2.467 2.467 0 0 0-2.652-.701A2.473 2.473 0 0 0-2.463-.155 2.468 2.468 0 0 0 .329 2.448 2.464 2.464 0 0 0 2.463.155a2.48 2.48 0 0 0-.61-1.79z"
                    transform="translate(393.007 509.881)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dK)"
                    d="M1.854-1.63a2.475 2.475 0 0 0-2.653-.708A2.47 2.47 0 1 0 1.634 1.85a2.457 2.457 0 0 0 .22-3.48z"
                    transform="translate(405.376 438.274)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#dL)"
                  d="M4.562-4.02a6.085 6.085 0 0 0-6.53-1.732A6.079 6.079 0 0 0 .81 6.026 6.076 6.076 0 0 0 6.068.382 6.077 6.077 0 0 0 4.562-4.02z"
                  transform="translate(394.608 497.075)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dM)"
                    d="M6.336-5.623A8.468 8.468 0 0 0-8.451-.535a8.466 8.466 0 0 0 4.709 8.132A8.465 8.465 0 0 0 8.451.535a8.49 8.49 0 0 0-2.115-6.158z"
                    transform="translate(332.024 315.599)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dN)"
                    d="M3.795-3.345a5.057 5.057 0 0 0-7.818.275 5.054 5.054 0 0 0-.354 5.611 5.06 5.06 0 0 0 8.922-.314 5.05 5.05 0 0 0-.75-5.572z"
                    transform="translate(358.335 323.59)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dO)"
                    d="M2.447-2.155a3.263 3.263 0 0 0-5.7 1.95 3.26 3.26 0 1 0 5.7-1.95z"
                    transform="translate(346.863 332.46)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dP)"
                    d="M2.451-2.15A3.26 3.26 0 1 0-2.45 2.148 3.26 3.26 0 0 0 2.45-2.15z"
                    transform="translate(419.629 313.065)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dQ)"
                    d="M.783-.606a1.002 1.002 0 0 0-1.39-.089A1 1 0 0 0-.697.704a1 1 0 0 0 1.48-1.31z"
                    transform="translate(326.737 354.431)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dR)"
                    d="M.74-.655a1 1 0 0 0-1.39-.09 1 1 0 0 0-.09 1.4 1 1 0 0 0 1.39.09 1 1 0 0 0 .09-1.4z"
                    transform="translate(367.83 349.85)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dS)"
                    d="M.74-.656a1 1 0 0 0-1.39-.09 1 1 0 0 0-.09 1.4A1 1 0 0 0 .65.745.997.997 0 0 0 .74-.656z"
                    transform="translate(446.02 339.63)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dT)"
                    d="M.745-.65a.999.999 0 0 0-1.4-.09.999.999 0 0 0-.09 1.39 1 1 0 0 0 1.4.09 1 1 0 0 0 .09-1.39z"
                    transform="translate(433.345 348.226)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dU)"
                    d="M8.976-7.964a11.997 11.997 0 0 0-12.878-3.384A11.997 11.997 0 0 0-11.976-.761 12.002 12.002 0 0 0 1.556 11.898 11.996 11.996 0 0 0 11.976.761a12.007 12.007 0 0 0-3-8.725z"
                    transform="translate(364.184 387.26)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dV)"
                    d="M4.513-3.953a5.997 5.997 0 0 0-6.448-1.726A6.003 6.003 0 0 0-5.989-.375 6.001 6.001 0 1 0 4.513-3.953z"
                    transform="translate(393.256 340.598)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dW)"
                    d="M4.513-3.953a5.997 5.997 0 0 0-6.448-1.726A6.003 6.003 0 0 0-5.989-.376 6.004 6.004 0 0 0-2.63 5.393a6 6 0 0 0 7.143-9.346z"
                    transform="translate(293.256 380.858)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dX)"
                    d="M4.518-3.948a5.995 5.995 0 0 0-9.281.299 5.998 5.998 0 0 0 5.57 9.594 6 6 0 0 0 3.711-9.893z"
                    transform="translate(358.962 253.214)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#dY)"
                    d="M4.513-3.953a5.995 5.995 0 0 0-9.28.31 6 6 0 1 0 9.28-.31z"
                    transform="translate(252.956 293.079)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#dZ)"
                  d="M2.165-1.9a2.88 2.88 0 1 0-4.33 3.8 2.88 2.88 0 0 0 4.33-3.8z"
                  transform="translate(269.025 212.686)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ea)"
                    d="M2.623-2.315a3.497 3.497 0 0 0-3.759-.996 3.501 3.501 0 0 0-1.892 5.07 3.502 3.502 0 0 0 6.34-2.894 3.496 3.496 0 0 0-.689-1.18z"
                    transform="translate(442.777 366.49)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#eb)"
                  d="M2.627-2.314a3.499 3.499 0 0 0-5.651 4.073 3.5 3.5 0 0 0 5.341.867 3.512 3.512 0 0 0 .31-4.94z"
                  transform="translate(343.333 370.1)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ec)"
                    d="M1.853-1.635a2.471 2.471 0 0 0-4.316 1.48A2.468 2.468 0 0 0 .328 2.449a2.48 2.48 0 0 0 1.305-.594 2.482 2.482 0 0 0 .22-3.49z"
                    transform="translate(406.617 391.251)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ed)"
                    d="M1.852-1.636a2.473 2.473 0 0 0-3.816.137 2.478 2.478 0 0 0-.502 1.343A2.475 2.475 0 0 0 .326 2.448a2.472 2.472 0 0 0 1.526-4.084z"
                    transform="translate(418.988 319.611)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#ee)"
                  d="M4.568-4.016a6.082 6.082 0 0 0-9.395.322 6.079 6.079 0 0 0 8.845 8.258 6.092 6.092 0 0 0 .55-8.58z"
                  transform="translate(408.222 378.44)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ef)"
                    d="M6.334-5.623A8.468 8.468 0 0 0-8.453-.535a8.466 8.466 0 0 0 4.709 8.133 8.464 8.464 0 0 0 9.318-1.221 8.48 8.48 0 0 0 2.435-9.132 8.48 8.48 0 0 0-1.675-2.868z"
                    transform="translate(289.046 206.048)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eg)"
                    d="M3.795-3.344a5.062 5.062 0 0 0-7.819.274 5.06 5.06 0 1 0 8.569 5.297 5.05 5.05 0 0 0-.75-5.571z"
                    transform="translate(315.355 214.04)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eh)"
                    d="M2.444-2.155a3.26 3.26 0 1 0-.29 4.6 3.25 3.25 0 0 0 .932-3.5 3.275 3.275 0 0 0-.642-1.1z"
                    transform="translate(303.886 222.91)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ei)"
                    d="M2.451-2.15a3.266 3.266 0 0 0-3.499-.936 3.258 3.258 0 0 0-.392 6.011A3.255 3.255 0 0 0 3.253.213a3.259 3.259 0 0 0-.802-2.363z"
                    transform="translate(286.309 604.285)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ej)"
                    d="M.761-.649A1 1 0 1 0-.761.651 1 1 0 0 0 .76-.649z"
                    transform="translate(283.779 244.924)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ek)"
                    d="M.783-.606a1.005 1.005 0 0 0-.677-.327 1.007 1.007 0 0 0-.713.237 1 1 0 0 0-.09 1.4A1.003 1.003 0 0 0 .604.684a1.005 1.005 0 0 0 .179-1.29z"
                    transform="translate(324.807 240.251)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#el)"
                    d="M.745-.649a1.002 1.002 0 0 0-1.4-.091A1 1 0 0 0-.745.651a1.004 1.004 0 0 0 1.4.09 1.003 1.003 0 0 0 .09-1.39z"
                    transform="translate(312.695 630.825)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#em)"
                    d="M.756-.654A1.005 1.005 0 0 0-.319-.948 1.002 1.002 0 0 0-.864.503a1.004 1.004 0 0 0 1.53.243 1 1 0 0 0 .09-1.4z"
                    transform="translate(300.004 639.45)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#en)"
                    d="M8.976-7.964a11.997 11.997 0 0 0-12.878-3.384A11.997 11.997 0 0 0-11.976-.761a12.002 12.002 0 0 0 13.532 12.66A12.005 12.005 0 0 0 11.976.761a12.002 12.002 0 0 0-3-8.725z"
                    transform="translate(321.204 277.71)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eo)"
                    d="M4.518-3.948A6 6 0 1 0-4.519 3.95a6 6 0 0 0 9.037-7.898z"
                    transform="translate(259.932 631.824)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ep)"
                    d="M4.518-3.949A6.003 6.003 0 0 0-5.988-.383a5.997 5.997 0 0 0 3.351 5.772 5.994 5.994 0 0 0 6.615-.898 6.002 6.002 0 0 0 .54-8.44z"
                    transform="translate(284.762 284.974)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eq)"
                    d="M2.601-2.344a3.501 3.501 0 0 0-5.633 4.09 3.5 3.5 0 0 0 5.313.91A3.497 3.497 0 0 0 3.49.224a3.504 3.504 0 0 0-.889-2.568z"
                    transform="translate(309.478 657.739)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#er)"
                  d="M2.623-2.315a3.497 3.497 0 0 0-3.759-.996A3.495 3.495 0 0 0-3.495-.219a3.5 3.5 0 0 0 5.808 2.844A3.485 3.485 0 0 0 3.495.219a3.48 3.48 0 0 0-.872-2.534z"
                  transform="translate(300.357 260.551)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#es)"
                    d="M6.337-5.623a8.474 8.474 0 0 0-9.09-2.386A8.469 8.469 0 0 0 1.102 8.398a8.468 8.468 0 0 0 4.475-2.021 8.482 8.482 0 0 0 .76-12z"
                    transform="translate(397.373 219.269)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#et)"
                    d="M3.796-3.345A5.057 5.057 0 0 0-5.05-.318a5.054 5.054 0 0 0 2.824 4.862 5.056 5.056 0 0 0 5.572-.749 5.06 5.06 0 0 0 .45-7.14z"
                    transform="translate(423.664 227.26)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eu)"
                    d="M2.446-2.155a3.264 3.264 0 0 0-3.502-.929 3.256 3.256 0 0 0-1.763 4.721A3.255 3.255 0 0 0 .434 3.231a3.259 3.259 0 0 0 2.012-5.386z"
                    transform="translate(412.193 236.13)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ev)"
                    d="M.761-.649a.998.998 0 0 0-1.759.584A.997.997 0 0 0 .142.989 1.004 1.004 0 0 0 .998.064a.998.998 0 0 0-.237-.713z"
                    transform="translate(392.089 258.145)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ew)"
                    d="M.783-.605a1 1 0 0 0-1.39-.091A1 1 0 0 0-.697.705a1.001 1.001 0 0 0 1.48-1.31z"
                    transform="translate(433.117 253.471)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ex)"
                    d="M8.976-7.964a12.013 12.013 0 0 0-5.926-3.642A12.008 12.008 0 0 0-9.542-7.277 11.999 11.999 0 0 0 1.556 11.899 12.003 12.003 0 0 0 11.976.761a12.002 12.002 0 0 0-3-8.725z"
                    transform="translate(429.514 290.939)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#ey)"
                    d="M4.513-3.953a5.995 5.995 0 0 0-6.448-1.726A5.996 5.996 0 0 0-5.989-.376 6.004 6.004 0 0 0-2.63 5.393 6.001 6.001 0 0 0 5.988.376a6 6 0 0 0-1.475-4.329z"
                    transform="translate(393.066 298.199)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#ez)"
                  d="M2.623-2.314a3.5 3.5 0 1 0-.31 4.94 3.496 3.496 0 0 0 .999-3.76 3.48 3.48 0 0 0-.689-1.18z"
                  transform="translate(408.667 273.77)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eA)"
                    d="M1.851-1.636a2.477 2.477 0 0 0-2.652-.701A2.475 2.475 0 0 0-2.465-.156c-.031.488.083.973.329 1.395a2.465 2.465 0 0 0 3.767.615 2.465 2.465 0 0 0 .705-2.655 2.466 2.466 0 0 0-.485-.835z"
                    transform="translate(273.289 682.481)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eB)"
                    d="M1.856-1.629a2.468 2.468 0 0 0-2.653-.71c-.463.158-.869.45-1.166.838a2.481 2.481 0 0 0-.173 2.742A2.467 2.467 0 0 0 .331 2.447a2.468 2.468 0 0 0 1.525-4.076z"
                    transform="translate(285.664 610.875)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#eC)"
                  d="M4.566-4.015a6.082 6.082 0 0 0-9.394.32 6.08 6.08 0 1 0 9.394-.32z"
                  transform="translate(274.894 669.671)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eD)"
                    d="M2.458-2.144a3.263 3.263 0 0 0-3.5-.944 3.259 3.259 0 0 0-1.778 4.72 3.267 3.267 0 0 0 3.254 1.6 3.261 3.261 0 0 0 1.724-.786 3.27 3.27 0 0 0 .3-4.59z"
                    transform="translate(417.302 614.79)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eE)"
                    d="M.756-.654a1.004 1.004 0 0 0-1.549.045.997.997 0 0 0 .93 1.6A1 1 0 0 0 .756-.654z"
                    transform="translate(443.684 641.33)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.8}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eF)"
                    d="M.761-.649a.997.997 0 0 0-1.076-.3A1.002 1.002 0 0 0-.864.504c.101.172.25.31.429.397A1.006 1.006 0 0 0 .671.741a.998.998 0 0 0 .09-1.39z"
                    transform="translate(430.999 649.954)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eG)"
                    d="M4.518-3.948A6 6 0 1 0-4.519 3.95a6 6 0 0 0 9.037-7.898z"
                    transform="translate(390.932 642.324)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eH)"
                    d="M2.623-2.315a3.499 3.499 0 0 0-5.651 4.073 3.494 3.494 0 0 0 3.492 1.71 3.497 3.497 0 0 0 1.849-.843 3.496 3.496 0 0 0 .999-3.76 3.496 3.496 0 0 0-.689-1.18z"
                    transform="translate(440.447 668.22)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eI)"
                    d="M1.853-1.635A2.471 2.471 0 0 0-2.135 1.24 2.464 2.464 0 0 0 .328 2.448a2.47 2.47 0 0 0 1.305-.593 2.482 2.482 0 0 0 .22-3.49z"
                    transform="translate(416.667 621.381)"
                    opacity={1}
                  />
                </g>
                <path
                  fill="url(#eJ)"
                  d="M4.566-4.015a6.082 6.082 0 0 0-9.394.32 6.08 6.08 0 1 0 9.394-.32z"
                  transform="translate(405.894 680.171)"
                  style={{
                    display: "block",
                  }}
                />
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eK)"
                    d="M3.656-3.81a5.28 5.28 0 1 0-7.315 7.62 5.28 5.28 0 0 0 7.315-7.62z"
                    transform="translate(279.324 452.275)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eL)"
                    d="M.608-.618A.87.87 0 0 0-.34-.81a.877.877 0 0 0-.534.812c0 .231.091.454.252.62a.883.883 0 0 0 1.24 0 .873.873 0 0 0-.01-1.24z"
                    transform="translate(289.041 429.344)"
                    opacity={1}
                  />
                </g>
                <g
                  opacity={0.4}
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#eM)"
                    d="M3.675-3.805A5.293 5.293 0 0 0-2.112-4.85 5.294 5.294 0 0 0-5.289.099a5.285 5.285 0 0 0 .948 2.923 5.285 5.285 0 0 0 5.475 2.145 5.293 5.293 0 0 0 2.541-8.972z"
                    transform="translate(310.035 337.781)"
                    opacity={1}
                  />
                </g>
              </g>
            </g>
            <g
              opacity={0.3}
              style={{
                display: "block",
              }}
            >
              <path
                fill="url(#gC)"
                d="M9-223.375V275.5H-9v-502l18 3.125z"
                transform="translate(56.5 240)"
                opacity={1}
              />
            </g>
            <g
              opacity={0.3}
              style={{
                display: "block",
              }}
            >
              <path
                fill="url(#gD)"
                d="M2.5-326.5v497.75h-5V-326.5h5z"
                transform="translate(72 343.5)"
                opacity={1}
              />
              <path
                fill="url(#gE)"
                d="M2-286.438V211.5h-4v-496.688l4-1.25z"
                transform="translate(240.5 304.5)"
                opacity={1}
              />
            </g>
          </g>
          <g
            clipPath="url(#gF)"
            transform="translate(7.5 511.5)"
            style={{
              display: "block",
            }}
          >
            <g
              mask="url(#gG)"
              style={{
                display: "block",
              }}
            >
              <g filter="url(#gH)" transform="translate(114.5 62)">
                <path
                  stroke="#B8E46E"
                  strokeWidth={8.005}
                  d="M60.312-52.688c23.058 0 42.312 23.438 44.5 49.688 2.328 27.932-8.988 51.5-32.046 51.5-25.391.5-46.688-23.25-48-52-1.516-28.75 12.488-49.188 35.546-49.188z"
                  fill="none"
                />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#gM)"
            transform="translate(542.625 712.125)"
            style={{
              display: "block",
            }}
          >
            <path
              fill="#357767"
              d="M7.509 17.096-.438 3.107l4.268-.11 8.504 13.975-4.825.124z"
              transform="translate(15.272 20.535)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#357767"
              d="M5.39 13.307-7.349-8.743l4.268-.11 13.296 22.036-4.825.124z"
              transform="translate(47.86 23.538)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#357767"
              d="M3.515 10.088-7.842-9.169l4.268-.11L8.341 9.964l-4.826.124z"
              transform="translate(26.476 27.357)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#357767"
              d="m1.51 6.232-7.832-12.33 4.268-.11L6.335 6.108l-4.825.124z"
              transform="translate(36.56 31.005)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#357767"
              d="M1.51 6.232-2.832-.412l4.268-.11 4.899 6.63-4.825.124z"
              transform="translate(44.349 30.804)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#357767"
              d="m-28.002.481.564.472 55.44-1.64-.434-.266-55.57 1.434z"
              transform="translate(45.428 38.143)"
              style={{
                display: "block",
              }}
            />
          </g>
          <g
            clipPath="url(#gX)"
            transform="translate(523.199 473.072)"
            style={{
              display: "block",
            }}
          >
            <g
              opacity={0.435}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#6DCAFF"
                d="M396.6 18.2a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z"
                opacity={1}
              />
            </g>
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="translate(89.8 4.6) scale(.3228)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.554 0 0 .554 394.5 35.3)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.584 0 0 .584 99.6 21.9)"
              style={{
                display: "block",
              }}
            />
            <g
              opacity={0.837}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#6DCAFF"
                d="M36.6 20.266a1.034 1.034 0 1 1-.001 2.069 1.034 1.034 0 0 1 .001-2.069z"
                opacity={1}
              />
            </g>
            <g opacity={0.521}>
              <path
                fill="#6DCAFF"
                d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
                transform="translate(29.6 6.2) scale(.4472)"
                opacity={1}
                style={{
                  display: "block",
                }}
              />
            </g>
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.5908 0 0 .5908 76.5 7.2)"
              style={{
                display: "block",
              }}
            />
            <g
              opacity={0.582}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#6DCAFF"
                d="M5.9 6.309a.842.842 0 1 1 0 1.683.842.842 0 0 1 0-1.683z"
                opacity={1}
              />
            </g>
            <g
              opacity={0.289}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#76FFDD"
                d="M125.644 22.794s.392 2.054.516 2.159c.156.13 1.402.56 1.402.56s-1.241.393-1.39.524c-.126.11-.604 2.105-.604 2.105s-.254-2.012-.384-2.147c-.123-.129-1.541-.49-1.541-.49s1.414-.362 1.531-.489c.13-.142.47-2.222.47-2.222z"
                opacity={1}
              />
            </g>
            <path
              fill="#FF8B6D"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.59 0 0 .59 82.6 20.7)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#FF8B6D"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.3468 0 0 .3468 386.1 22.5)"
              style={{
                display: "block",
              }}
            />
            <g
              opacity={0.369}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#75FFDD"
                d="M112.95 44.103a.497.497 0 1 1 0 .995.497.497 0 0 1 0-.995z"
                opacity={1}
              />
            </g>
            <g
              opacity={0.668}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#75FFDD"
                d="M54.2 8.203a.497.497 0 1 1 0 .995.497.497 0 0 1 0-.995z"
                opacity={1}
              />
            </g>
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.584 0 0 .584 399.2 50.1)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="matrix(.5908 0 0 .5908 138.1 9.9)"
              style={{
                display: "block",
              }}
            />
            <path
              fill="#6DCAFF"
              d="M0-1.75a1.75 1.75 0 1 1-.002 3.502A1.75 1.75 0 0 1 0-1.75z"
              transform="translate(16.2 32) scale(.3228)"
              style={{
                display: "block",
              }}
            />
            <g
              opacity={0.289}
              style={{
                display: "block",
              }}
            >
              <path
                fill="#F78B6E"
                d="M106.944 8.417s.389 2.037.512 2.14c.154.13 1.39.556 1.39.556s-1.23.389-1.378.519c-.125.11-.599 2.086-.599 2.086s-.251-1.993-.38-2.128c-.122-.127-1.528-.486-1.528-.486s1.401-.357 1.518-.484c.13-.14.465-2.203.465-2.203z"
                opacity={1}
              />
            </g>
          </g>
          <g
            clipPath="url(#gY)"
            transform="translate(549.5 533)"
            style={{
              display: "block",
            }}
          >
            <g
              mask="url(#gZ)"
              style={{
                display: "block",
              }}
            >
              <g
                clipPath="url(#ha)"
                transform="matrix(.05548 0 0 .05548 26.325 -16.13)"
              >
                <g
                  clipPath="url(#hb)"
                  transform="translate(-366 -223.5)"
                  style={{
                    display: "block",
                  }}
                >
                  <path
                    fill="url(#hc)"
                    d="M-116-11.234c0-6.632 51.935-10.28 116-10.28s116 2.819 116 10.28c0 16.14-51.935 32.748-116 32.748S-116 4.906-116-11.234z"
                    transform="translate(1126.722 866.591)"
                    style={{
                      display: "block",
                    }}
                  />
                  <g
                    style={{
                      display: "block",
                    }}
                  >
                    <path
                      fill="url(#hd)"
                      d="M230.97-.379C208.692 15.414 138.362 29.992 2.5 29.992S-223.426 12.054-237.178-3.189c-18.667-20.933-4.318-25.978 3.757-26.407 12.399-.659 455.141-.462 468.63.336 13.095.775 17.983 11.064-4.239 28.881z"
                      transform="translate(1126.307 843.102)"
                    />
                    <path
                      strokeMiterlimit={10}
                      stroke="#000"
                      strokeWidth={0.5}
                      d="M1357.277 842.723c-22.278 15.793-92.608 30.371-228.47 30.371s-225.926-17.938-239.678-33.181c-18.667-20.933-4.318-25.978 3.757-26.407 12.399-.659 455.141-.462 468.63.336 13.095.775 17.983 11.064-4.239 28.881z"
                      fill="none"
                    />
                  </g>
                  <path
                    fill="url(#he)"
                    d="M246 20.963c0 19.882-110.138 36-246 36s-246-16.118-246-36c0-9.537 12.528-18.208 53.892-24.649C-147.236-10.673-137.026-56.963 0-56.963c150.889 0 150.947 45.86 195.333 52.239C240.784 1.808 246 10.904 246 20.963z"
                    transform="translate(1126.833 801.432)"
                    style={{
                      display: "block",
                    }}
                  />
                  <g
                    style={{
                      display: "block",
                    }}
                  >
                    <path
                      fill="url(#hf)"
                      d="M158.667 40.148c0 23.704-71.038 36.741-158.667 36.741s-158.667-10.074-158.667-36.741C-158.667-17.535-87.629-76.889 0-76.889S158.667-17.535 158.667 40.148z"
                      transform="translate(1125.722 758.839)"
                    />
                    <path
                      stroke="url(#hg)"
                      strokeMiterlimit={100}
                      strokeWidth={3}
                      d="M158.667 40.148c0 23.704-71.038 36.741-158.667 36.741s-158.667-10.074-158.667-36.741C-158.667-17.535-87.629-76.889 0-76.889S158.667-17.535 158.667 40.148z"
                      fill="none"
                      transform="translate(1125.722 758.839)"
                    />
                  </g>
                  <path
                    stroke="url(#hh)"
                    strokeMiterlimit={10}
                    d="m-44.041-10.007 88.082 20.014"
                    fill="none"
                    transform="translate(1321.001 821.411)"
                    style={{
                      display: "block",
                    }}
                  />
                  <path
                    stroke="url(#hi)"
                    strokeMiterlimit={10}
                    d="M-.556-11.333.556 11.333"
                    fill="none"
                    transform="translate(1126.278 847.062)"
                    style={{
                      display: "block",
                    }}
                  />
                  <path
                    stroke="url(#hj)"
                    strokeMiterlimit={10}
                    d="m24.037-10.169-48.074 20.338"
                    fill="none"
                    transform="translate(993.635 839.913)"
                    style={{
                      display: "block",
                    }}
                  />
                  <path
                    stroke="url(#hk)"
                    strokeMiterlimit={10}
                    d="m-32.595-8.908 65.19 17.816"
                    fill="none"
                    transform="translate(1259.206 840.192)"
                    style={{
                      display: "block",
                    }}
                  />
                  <path
                    stroke="url(#hl)"
                    strokeMiterlimit={10}
                    d="m-44.041-10.007 88.082 20.014"
                    fill="none"
                    transform="translate(1321.001 821.411)"
                    style={{
                      display: "block",
                    }}
                  />
                  <path
                    stroke="url(#hm)"
                    strokeMiterlimit={10}
                    d="M45.473-7.712-45.473 7.712"
                    fill="none"
                    transform="translate(932.194 822.545)"
                    style={{
                      display: "block",
                    }}
                  />
                  <path
                    fill="url(#hn)"
                    d="M125.669 11.861c0 25.651-66.391 35.445-125.669 35.445-59.278 0-125.669-9.794-125.669-35.445S-59.778-47.306-.5-47.306c59.278 0 126.169 33.516 126.169 59.167z"
                    transform="translate(1125.056 730.645)"
                    style={{
                      display: "block",
                    }}
                  />
                  <g
                    opacity={0.19}
                    style={{
                      display: "block",
                    }}
                  >
                    <path
                      fill="#FFF"
                      d="M972.278 775.284s-2.681 20.001 38.777 33.007c29.037 7.29 60.742 12.543 114.001 12.543 53.259 0 96.071-6.812 116.666-14.883 41.035-13.505 34.888-35.926 35.481-35.407 3.037 6.148 6.775 22.045 5.553 29.712-2.098 13.158-24.775 18.621-43.145 23.954-18.37 5.333-64.111 10.111-113.889 10.111-49.778 0-96-4.117-117.333-9.592-21.333-5.475-38-12.149-39.667-23.297-1.667-11.148 3.556-26.148 3.556-26.148z"
                      opacity={1}
                    />
                  </g>
                </g>
              </g>
            </g>
            <g
              mask="url(#ho)"
              style={{
                display: "block",
              }}
            >
              <g
                filter="url(#hp)"
                transform="matrix(.47778 0 0 .47778 138.305 49.082)"
                opacity={0.41}
              >
                <g opacity={1}>
                  <path d="M-143.75 59c16.143 0 29.25 1.792 29.25 4s-13.107 4-29.25 4S-173 65.208-173 63s13.107-4 29.25-4z" />
                  <path
                    stroke="url(#hq)"
                    strokeWidth={1.3}
                    d="M0-4c16.143 0 29.25 1.792 29.25 4S16.143 4 0 4s-29.25-1.792-29.25-4S-16.143-4 0-4z"
                    fill="none"
                    transform="translate(-143.75 63)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
