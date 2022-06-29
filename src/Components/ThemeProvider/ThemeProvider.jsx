import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext({
  theme: "",
  themeToggle: () => {},
});

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function ThemeProvider(props) {
  const { children } = props;
  const [theme, setTheme] = useState(isDark ? "dark" : "light");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChangeAutoTheme);

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChangeAutoTheme);
    };
  }, []);

  const handleChangeAutoTheme = ({ matches }) => {
    setTheme(matches ? "dark" : "light");
    document.documentElement.classList[matches ? "add" : "remove"]("dark");
  };

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList[theme === "light" ? "add" : "remove"](
      "dark"
    );
  };

  const themeValue = useMemo(
    () => ({ theme, themeToggle: handleThemeToggle }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
