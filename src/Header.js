import "./Header.css";
import logo from "./Logo.png";

var telNumber = "046123456";
var telNumberLink = "tel:" + telNumber;

function TopBar() {
  return (
    <div className="topbar container">
      <div className="Col-1">
        <a href="#">
          <div className="Image">
            <img src={logo} />
          </div>
        </a>
      </div>
      <div className="Col-2">
        <a href={telNumberLink}>(046)123-456</a>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="Navbar ">
      <div className="container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="Banner">
      <div className="container">
        <h1>40 Best Simple Wordpress Themes You Should Try (2017)</h1>
      </div>
    </div>
  );
}

function Header() {
  return (
    <section className="Header">
      <TopBar />
      <Navbar />
      <Banner />
    </section>
  );
}

export default Header;
