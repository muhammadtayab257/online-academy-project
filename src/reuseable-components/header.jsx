import "../assets/css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* top bar*/}
      <div className="topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="top-bar-left">
                <ul className="d-flex gap-5 justify-content-start align-items-center">
                  <li>
                    <i className="fa-regular fa-envelope"></i>
                    <a href="">Info@example.com</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin"></i>
                    <a href="">Suite 80 Golden Street Germeney</a>
                  </li>
                  <li>
                    <img
                      src="https://themazine.com/newwp/alquran/wp-content/themes/alquran/assets/images/icons/bismillah.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-bar-right">
                <ul className="d-flex gap-4 justify-content-end align-items-center">
                  <li>
                    <i className="fa-regular fa-sun"></i>
                    <a href="">Sunrise At: 5:15 AM </a>
                  </li>
                  <li>
                    <i className="fa-regular fa-moon"></i>
                    <a href="">Sunset At: 4:50 PM</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a href="">Let’s Talk +123-456-789</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img
            src="https://themazine.com/newwp/alquran/wp-content/uploads/2023/12/logo.svg"
            alt="Logo"
            width="160"
            height="40"
            className="d-inline-block align-text-top"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Blog
                </Link>
              </li>
            </ul>

            <button className="btn" type="button">
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
