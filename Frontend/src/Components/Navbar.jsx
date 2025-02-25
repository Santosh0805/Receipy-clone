import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ContextAPIProvider } from "../Context/ContextAPI";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(ContextAPIProvider);
  return (
    <>
      <nav className="navbar">
        <h1>FOOD RECIPE</h1>
        <ul>
          <Link to="/">Home</Link>
          {!isAuth ? (
            <>
              <Link to="/register">Create Account</Link>
              <Link to="/login">Login Account</Link>
            </>
          ) : (
            <>
              <Link
                to=""
                onClick={() => {
                  localStorage.clear();
                  setIsAuth(false);
                }}
              >
                Logout
              </Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
