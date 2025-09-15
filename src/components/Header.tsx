import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav className="flex gap-2 p-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
