import { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const NavItems = (
  <ul className="nav">
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/about">
      <li>About Us</li>
    </Link>
    <Link to="/contact">
      <li>Contact Us</li>
    </Link>
    <Link to="#">
      <li>Cart</li>
    </Link>
  </ul>
);

export default Header = () => {
  const [authenticateUser, setAuthenticateUser] = useState(false);
  return (
    <div className="heading">
      <a href="/">
        <img className="logo" src={logo} alt="Logo.png" />
      </a>
      {NavItems}
      {authenticateUser ? (
        <button
          onClick={() => {
            setAuthenticateUser(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setAuthenticateUser(true);
          }}
        >
          LogOut
        </button>
      )}
    </div>
  );
};
