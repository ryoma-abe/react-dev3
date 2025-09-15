import { createContext, useContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

// 箱を作る
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// 鍵を作る

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
