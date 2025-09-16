import { createContext, useContext } from "react";

type AuthContextType = {
  user: boolean;
  setUser: (value: boolean) => void;
};

// 箱を作る
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// 鍵を作る
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within ThemeProvider");
  return ctx;
}
