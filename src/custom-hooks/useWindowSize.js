import { useState, useEffect } from "react";

const getBreakPoint = (windowWidth) => {
    if(windowWidth){
        if(windowWidth < 400) {
            return "sm"
        }
        
    }
}
const useWindowSize = () => {
  const isWindowClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      window.addEventListener("resize", setSize);

      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
};

export default useWindowSize;
