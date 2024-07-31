import { useSelector } from "react-redux";
import { authSelector } from "../feature/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const PrivateGardRoute = () => {
  const { user } = useSelector(authSelector);


  if (localStorage.getItem("loginUser")) {
    return user ? <Outlet /> : <Navigate to="/login"/> ;
  }else{
    return <Navigate to="/login"/>
  }
};

export default PrivateGardRoute;
