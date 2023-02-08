import logo from "../../logo.png";

const NavItems = (
  <ul className="nav">
    <a href="#">
      <li>Home</li>
    </a>
    <a href="#">
      <li>About Us</li>
    </a>
    <a href="#">
      <li>Contact Us</li>
    </a>
    <a href="#">
      <li>Cart</li>
    </a>
  </ul>
);

export default Header = () => {
  return (
    <div className="heading">
      <a href="/">
        <img className="logo" src={logo} alt="Logo.png" />
      </a>
      {NavItems}
    </div>
  );
};
