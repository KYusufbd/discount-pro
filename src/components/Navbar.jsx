import PropTypes from "prop-types";
import { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Navbar = ({ switchTheme, theme }) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/brands">Brands</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full bg-base-300 sticky top-0 z-20">
      <div className="navbar section shadow-sm font-medium">
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
              {user ? (
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-secondary text-lg flex md:hidden"
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="btn btn-secondary text-lg flex md:hidden"
                  >
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold text-primary">
            Discount Pro
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-secondary">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex flex-row flex-wrap items-center px-2 gap-2 mt-auto">
                <div className="h-6 md:h-9 max-w-9 ml-auto rounded-full overflow-hidden">
                  {user.photoURL && (
                    <img className="h-full" src={user?.photoURL} alt="user" />
                  )}
                </div>
                <p className="text-base text-accent ml-auto">{user.email}</p>
              </div>
              <button
                onClick={logOut}
                className="btn btn-secondary text-lg hidden md:flex"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-secondary text-lg hidden md:flex"
            >
              Log In
            </Link>
          )}

          <button
            className="btn bg-transparent border-0 rounded-full text-xl hidden md:flex"
            onClick={() => switchTheme()}
          >
            {theme === "light" ? <CiDark /> : <CiLight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
