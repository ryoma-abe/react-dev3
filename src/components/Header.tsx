import { Link } from "react-router";
import ModeButton from "./ModeButton";

export default function Header() {
  return (
    <header className="">
      <nav className="flex gap-2 p-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <ModeButton />
      </nav>
    </header>
  );
}
