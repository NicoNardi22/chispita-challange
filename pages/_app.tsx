import "../styles/globals.css";

import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import UserContext from "../lib/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  const screen = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{
      width: number | undefined;
      height: number | undefined;
    }>({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <UserContext.Provider
      value={{
        screen: {
          width: screen.width,
          height: screen.height,
        },
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
