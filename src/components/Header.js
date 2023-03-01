import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Header = () => {
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const status = useOnline();

  const { user } = useContext(userContext);

  const NavItems = (
    <ul className="sm:flex flex-wrap block  ">
      <Link to="/">
        <li className="m-2 p-1">Home</li>
      </Link>
      <Link to="/about">
        <li className="m-2 p-1">About Us</li>
      </Link>
      <Link to="/contact">
        <li className="m-2 p-1">Contact Us</li>
      </Link>
      <Link to="#">
        <li className="m-2 p-1">Cart</li>
      </Link>
      <Link to="/instamart">
        <li className="m-2 p-1">Instamart</li>
      </Link>
      <Link>
        <li className="m-2 p-1">{status ? "✅" : "📴"}</li>
      </Link>
      <Link>
        <p>
          {user.name} - {user.mail}
        </p>
      </Link>
    </ul>
  );
  return (
    <div className="flex justify-between items-center flex-wrap sm:flex sm:justify-between sm:items-center p-3 bg-yellow-400">
      <a href="/">
        <img className="w-20 h-20" src={logo} alt="Logo.png" />
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

export default Header;
