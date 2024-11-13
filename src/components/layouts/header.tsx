import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">{() => <button>main</button>}</NavLink>
        <NavLink to="/bears">{() => <button>bears</button>}</NavLink>
      </nav>
    </header>
  );
}
