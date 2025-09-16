import { useState, type ReactNode } from "react";
import { LocaleContext } from "./LocaleContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("ja");
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
