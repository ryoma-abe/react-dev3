import { createContext, useContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// 箱を作る
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// 鍵を作る
export const useTheme = () => useContext(ThemeContext);
