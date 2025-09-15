//実際の処理

import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";



export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
