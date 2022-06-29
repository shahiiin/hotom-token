import { useEffect, useState } from "react";

export function useScreenSize() {
  const [isXl, setIsXl] = useState();
  const [isSm, setIsSm] = useState();

  useEffect(() => {
    setIsXl(window.screen.width >= 1024);
    setIsSm(window.screen.width <= 900);
    window.addEventListener("resize", handleScreenSizeChange);

    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  const handleScreenSizeChange = (event) => {
    const { innerWidth } = event.target;
    setIsXl(innerWidth >= 1024);
    setIsSm(innerWidth <= 900);
  };

  return { isXl, isSm };
}
