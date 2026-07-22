import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/personal-training'>Personal Training</NavLink>
        <NavLink to='/software-development'>Software Development</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      {/* <hr /> */}
      <main>
        {/* Active sub-pages will render right here */}
        <Outlet />
      </main>
    </div>
  );
}
