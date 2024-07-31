import Layouts from "../component/layouts/Layouts";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SetNewPassword from "../pages/auth/SetNewPassword";
import VerifyByOtp from "../pages/auth/VerifyByOtp";
import Home from "../pages/publicPages/home/Home";
import PublicGardRoute from "./PublicGardRoute";

const PublicRouter = [
 {
  element: <PublicGardRoute/>,
  children:[
    {
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/verify_by_otp",
          element: <VerifyByOtp/>,
        },
        {
          path: "/forget_password",
          element: <ForgotPassword/>,
        },
        {
          path: "/new_password",
          element: <SetNewPassword/>,
        },
      ],
    },
  ]
 }
];

// export PublicRouter
export default PublicRouter;
