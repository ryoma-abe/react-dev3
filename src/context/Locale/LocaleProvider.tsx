import { useState, type ReactNode } from "react";
import { LocaleContext } from "./LocaleContext";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("ja");
  const toggleLocale = () => {
    if (locale === "ja") {
      setLocale("en");
    } else {
      setLocale("ja");
    }
  };
  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
