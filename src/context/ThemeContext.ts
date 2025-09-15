import { createContext, useContext } from "react";

// 箱を作る
export const ThemeContext = createContext(null);

// 鍵を作る
export const useTheme = () => useContext(ThemeContext);
