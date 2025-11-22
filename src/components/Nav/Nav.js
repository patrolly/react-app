import { Link, NavLink, useLocation } from "react-router";
import "./Nav.css";

function Nav() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return isLogin ? null : (
    <nav>
      <span>LOGO</span>

      <div className="links">
        <NavLink to="/posts" className={({ isActive }) => isActive ? "text-yellow font-bold" : "text-grey"}>POSTY</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-yellow font-bold" : "text-grey"}>DASHBOARD</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow font-bold" : "text-grey"}>LOGIN</NavLink>
        
        <a href="https://wp.pl">WP.PL</a>
      </div>
    </nav>
  );
}

export default Nav;
