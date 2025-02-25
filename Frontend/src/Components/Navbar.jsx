import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ContextAPIProvider } from "../Context/ContextAPI";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(ContextAPIProvider);
  return (
    <>
      <nav className="navbar">
        <img src="./recepi.PNG" alt="logo" />
        <ul>
          <Link to="/">Home</Link>
          {!isAuth ? (
            <>
             <Link to="/login">Login</Link>
             <Link to="/register">Signup</Link>
             
            </>
          ) : (
            <>
            <Link to="/register">Logout</Link>
              
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
