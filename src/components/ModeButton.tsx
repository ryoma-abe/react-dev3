import { useTheme } from "../context/ThemeContext";

export default function ModeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme("dark");
  };

  return (
    <button className="border pl-2" onClick={toggleTheme}>
      テーマ{theme}
    </button>
  );
}
