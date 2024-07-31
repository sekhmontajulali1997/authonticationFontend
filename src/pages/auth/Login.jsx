import { useEffect } from "react";
import useFormHooks from "../../hook/useFormHooks";
import createTost from "../../utils/reactTostify";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setmessageEmty } from "../../feature/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { UserLoginApiSlice } from "../../feature/auth/authApiSlice";

const Login = () => {
  // dispatch

  const dispatch = useDispatch();

  // selector
  const { user, error, message, loader } = useSelector(authSelector);

  // Navigate
  const Navigate = useNavigate();
  // get form data
  const { input, handleInputChange, formReset } = useFormHooks({
    email: "",
    password: "",
  });

  // handleInputSubmit
  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLoginApiSlice(input));
  };
  // validation for isActive Or not

  if (user.isActivate === false) {
    Navigate("/verify_by_otp");
  }
  useEffect(() => {
    if (message) {
      createTost(message, "success");
      dispatch(setmessageEmty());
      formReset();
      Navigate("/admin/dashboard");
    }
    if (error) {
      createTost(error);

      dispatch(setmessageEmty());
    }
  }, [message, error, dispatch, Navigate, formReset, user.isActivate]);

  return (

<div className="content top-space">
<div className="container-fluid">
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img
                className="img-fluid"
                src="assets/img/logo-white.png"
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Form */}
                <form>
                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="email"
                      value={input.email}
                      className="form-control"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="password"
                      value={input.password}
                      className="form-control"
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      onClick={handleInputSubmit}
                      className="btn btn-primary w-100"
                      type="submit"
                    >
                      {loader ? "Loging........." : "Login"}
                    </button>
                  </div>
                </form>
                {/* /Form */}
                <div className="text-center forgotpass">
                  <Link to="/forget_password">Forgot Password?</Link>
                </div>
            
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Don’t have an account? <Link to="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
      </div>
  );
};

export default Login;
