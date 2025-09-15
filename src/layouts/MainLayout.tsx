import type { ReactNode } from "react";
import Header from "../components/Header";
// import { useTheme } from "../context/ThemeContext";

export default function MainLayout({ children }: { children: ReactNode }) {
  // const { theme, setTheme } = useTheme();
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
