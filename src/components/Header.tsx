import { Link } from "react-router";
import ModeButton from "./ModeButton";
import { useLocale } from "../context/Locale/LocaleContext";

export default function Header() {
  const { locale, toggleLocale } = useLocale();

  return (
    <header className="">
      <nav className="flex gap-2 p-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/locale">Locale</Link>
        <button className="border p-2" onClick={toggleLocale}>
          言語切替/ {locale}
        </button>
        <ModeButton />
      </nav>
    </header>
  );
}
