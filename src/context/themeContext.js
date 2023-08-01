import React, { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

const themes = {
  light: {
    "--bg-primary": "#ffffff",
    "--bg-secondary": "#202124",
    "--bg-elevation-1": "#FEFCFC",
    "--bg-elevation-2": "#ffffff",
    "--border-color": "#e3e3e3"

  },
  dark: {
    "--bg-primary": "#202124",
    "--bg-secondary": "#ffffff",
    "--bg-elevation-1": "#35373A",
    "--bg-elevation-2": "#464646",
    "--border-color": "#818181",
  },
};

const ThemeContext = createContext(null);

// const { theme, setTheme, toggleTheme } = useTheme()
export const useTheme = () => useContext(ThemeContext);

// cambiar si cambia el tema por defecto
const DEFAULT_THEME = "light";

const ThemeProvider = ({ children }) => {
  const localTheme =
    typeof window !== "undefined" ? localStorage.getItem("themeColor") : undefined;
  const deviseTheme = getDeviseTheme();
  const [theme, setTheme] = useState(
    localTheme || deviseTheme || DEFAULT_THEME
  );

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div style={{ ...themes[theme], background: "var(--bg-primary)", color: "var(--bg-secondary)"  }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const getDeviseTheme = () => {
  if (typeof window !== "undefined") {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      } else {
        return "light";
      }
    } else {
      return DEFAULT_THEME;
    }
  } else {
    return undefined;
  }
};
ThemeProvider.propTypes = {
  children: PropTypes.object,
};

export default ThemeProvider;
