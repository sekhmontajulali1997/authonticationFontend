import { useSelector } from "react-redux";
import { authSelector } from "../feature/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const PublicGardRoute = () => {
  const { user } = useSelector(authSelector);

  if (localStorage.getItem("loginUser")) {
    return user ? <Navigate to="/admin/dashboard" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};

export default PublicGardRoute;
