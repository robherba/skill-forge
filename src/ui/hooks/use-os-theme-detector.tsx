import { useEffect, useState } from "react";

const useOSThemeDetector = (): boolean => {
  const getCurrentTheme = (): boolean => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isOSDarkTheme, setIsOSDarkTheme] = useState<boolean>(getCurrentTheme());

  const mqListener = (e: MediaQueryListEvent) => {
    setIsOSDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isOSDarkTheme;
};

export default useOSThemeDetector;
