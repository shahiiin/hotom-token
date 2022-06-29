import React, { useEffect, useState } from "react";
import { useScreenSize } from "../../Hooks/useScreenSize";

function Coin() {
  const [coinPosition, setCoinPosition] = useState(0);
  const [lock, setLock] = useState(false);
  const { isSm } = useScreenSize();

  useEffect(() => {
    document.addEventListener("scroll", handleChangeCoinPosition);

    return () => {
      document.removeEventListener("scroll", handleChangeCoinPosition);
    };
  }, []);

  const handleChangeCoinPosition = () => {
    const scrollTop = document.documentElement.scrollTop;
    const max = window.screen.width / 1.7;
    setLock(scrollTop > max);
    if (scrollTop < max) {
      if (scrollTop === 0) {
        setCoinPosition(0);
      } else {
        setTimeout(() => {
          setCoinPosition((prevCoinPosition) => prevCoinPosition + 100);
        }, 200);
      }
    } else {
      setCoinPosition(100);
    }
  };

  return (
    <div className="w-full absolute inset-x-0 z-10">
      <div
        id="trigger"
        style={{
          width: "100%",
          transform: "translate(0px, 0px)",
          left: "0px",
          top: lock ? (isSm ? "5vh" : "50vh") : isSm ? "40%" : "50%",
          margin: "auto",
          boxSizing: "border-box",
          position: lock ? "absolute" : "fixed",
          padding: "0px",
        }}
      >
        <div className="flex justify-center w-full" id="coin-wrapper">
          <div
            className="justify-center w-[31vw] h-[31vw] bg-bgCoin -translate-x-1 sm:translate-x-0 sm:w-[18.51vw] sm:h-[18.51vw] aspect-square max-h-[270px] max-w-[270px]"
            style={{
              backgroundSize: "100%",
              marginRight: isSm ? "-4.61376vw" : "-6.61376vw",
              backgroundPositionY: lock ? 0 : `${coinPosition}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
