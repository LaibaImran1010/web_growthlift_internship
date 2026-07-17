import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", gap: "20px", padding: "15px", borderBottom: "1px solid #ccc", alignItems: "center" }}>
      <h1 style={{ margin: 0 }}>Growth Lift</h1>
      <nav style={{ display: "flex", gap: "15px" }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
