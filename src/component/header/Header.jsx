//import Avator from "../../assets/img/profiles/avatar-01.jpg";
import logo from "../../assets/img/logo.png";
import logoSmall from "../../assets/img/logo-small.png";
import montajPic from "../../assets/img/mon.jpeg";
import useToggleControl from "../../hook/useToggleControl";


const Header = () => {

  // get toggleHook
  const { openToggle, handleToggle, disableToggle } = useToggleControl();
  const {openToggle : openToggleProfile, handleToggle: handleToggleProfile, disableToggle: profiledisableToggle } = useToggleControl();
  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img src={logoSmall} alt="Logo" width={30} height={30} />
          </a>
        </div>
        {/* /Logo */}
        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fe fe-text-align-left" />
        </a>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars" />
        </a>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown " ref={disableToggle} >
            <a
            onClick={handleToggle}
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge rounded-pill">3</span>
            </a>

            {openToggle && (
              <div
                className="dropdown-menu notifications d-block"
                style={{ transform: "translate(-300px, 0px)" }}
              >
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/doctors/doctor-thumb-01.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>{" "}
                              Schedule{" "}
                              <span className="noti-title">
                                her appointment
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/patients/patient1.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Charlene Reed</span>{" "}
                              has booked her appointment to{" "}
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/patients/patient2.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Travis Trimble</span>{" "}
                              sent a amount of $210 for his{" "}
                              <span className="noti-title">appointment</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="notify-block d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={montajPic}
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Carl Kelly</span>{" "}
                              send a message{" "}
                              <span className="noti-title"> to his doctor</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            )}
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow" ref={profiledisableToggle} >
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={handleToggleProfile}
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src={montajPic}
                  width={31}
                  alt="Ryan Taylor"
                />
              </span>
            </a>



            {openToggleProfile && <div
              className="dropdown-menu d-block"
              style={{ transform: "translate(-139px, 0px)" }}
            >
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src={montajPic}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>}
            
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>
      {/* /Header */}
    </>
  );
};

export default Header;
