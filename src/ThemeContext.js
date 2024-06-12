import React, { createContext, useContext, useEffect, useState } from "react";

const Theme = createContext();

export const useTheme = () => {
  return useContext(Theme);
};

const ThemeContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const theme = isDarkMode === true ? "dark" : "light";

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <Theme.Provider value={{ toggleTheme, theme }}>{children}</Theme.Provider>
  );
};

export default ThemeContext;
