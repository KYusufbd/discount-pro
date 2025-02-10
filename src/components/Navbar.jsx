import PropTypes from "prop-types";
import { CiDark, CiLight } from "react-icons/ci";
import { Link, NavLink } from "react-router";

const Navbar = ({switchTheme, theme}) => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/brand">Brand</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Dev</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm font-medium">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-medium text-secondary">Discount Pro</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-primary">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary text-lg">Log in / Register</a>
        <button className="btn bg-transparent border-0 rounded-full text-3xl" onClick={() => switchTheme()}>{theme === 'light' ? <CiDark /> : <CiLight />}</button>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
    switchTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
}
