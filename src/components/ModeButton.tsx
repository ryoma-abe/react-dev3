import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ModeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <button className="border pl-2" onClick={toggleTheme}>
      テーマ{theme}
    </button>
  );
}
