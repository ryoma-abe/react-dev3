import { createContext, useContext } from "react";

type LocaleContextType = {
  locale: string;
  setLocale: (value: string) => void;
  toggleLocale: () => void;
};

// 箱を作る
export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);

// 鍵を作る

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within ThemeProvider");
  return ctx;
}
