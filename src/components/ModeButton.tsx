import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ModeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button className="border pl-2" onClick={toggleTheme}>
      テーマ{theme}
    </button>
  );
}
