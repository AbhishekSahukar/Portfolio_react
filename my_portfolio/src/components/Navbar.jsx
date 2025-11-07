import { Link, useLocation } from "react-router-dom";
import "../styling/Navbar.css";


function Navbar() {
  const location = useLocation();

  const tabs = [
    { to: "/", label: "🏠 Home" },
    { to: "/about", label: "🧑 About" },
    { to: "/projects", label: "💼 Projects" },
    { to: "/resume", label: "📄 Resume" },
    { to: "/contact", label: "📬 Contact" },
  ];

  return (
    <nav>
      <div className="navbar">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={location.pathname === tab.to ? "active" : ""}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
