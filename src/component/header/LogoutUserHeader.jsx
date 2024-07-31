import { Link } from "react-router-dom";


// logoutUser css Link

//Favicon
import "../../assets/logoutUserAssets/assets/img/favicon.png";

//Bootstrap CSS
import "../../assets/logoutUserAssets/assets/css/bootstrap.min.css";

//Fontawesome CSS
import "../../assets/logoutUserAssets/assets/plugins/fontawesome/css/fontawesome.min.css";
import "../../assets/logoutUserAssets/assets/plugins/fontawesome/css/all.min.css";

//Main CSS
import "../../assets/logoutUserAssets/assets/css/custom.css";

//Datepicker CSS
import "../../assets/logoutUserAssets/assets/css/bootstrap-datetimepicker.min.css";

//Feathericon CSS
import "../../assets/logoutUserAssets/assets/css/feather.css";

//Owl Carousel CSS
import "../../assets/logoutUserAssets/assets/css/owl.carousel.min.css";
//Animation CSS
import "../../assets/logoutUserAssets/assets/css/aos.css";








const LogoutUserHeader = () => {
  return (
    <header className="header header-custom header-fixed header-one">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link to="" id="mobile_btn" >
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to="index.html" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="index.html" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <a
                id="menu_close"
                className="menu-close"
                to="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className="has-submenu megamenu active">
                <Link to="/">
                  Home 
                  {/*  */}
                </Link>
               
              </li>
          
              <li className="login-link">
                <Link to="/login">Login / Signup</Link>
              </li>
              <li className="register-btn">
                <Link to="/register" className="btn reg-btn">
                  <i className="feather-user" />
                  Register
                </Link >
              </li>
              <li className="register-btn">
                <Link to="/login" className="btn btn-primary log-btn">
                  <i className="feather-lock" />
                  Login
                </Link >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LogoutUserHeader;
