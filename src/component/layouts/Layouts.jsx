import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { authSelector } from "../../feature/auth/authSlice";
import LogoutUserHeader from "../header/LogoutUserHeader";

const Layouts = () => {
  // not showing heder for some route

  const getPath = useLocation();

  const hideHeader = [
    "/login",
    "/register",
    "/verify_by_otp",
    "/forget_password",
    "/new_password",
  ];
  const { user } = useSelector(authSelector);

  return (
    <>
    {hideHeader.includes(getPath.pathname) ? null : (
    user.isActivate ? (
      <Header />
    ) : (
      <LogoutUserHeader />
    )
  )
}



    
      {/* {user.isActivate === true ? <Header /> ? getPath.pathname(hideHeader) ""  : <LogoutUserHeader />} */}
     

      <Outlet />

      <Footer />
    </>
  );
};

export default Layouts;
