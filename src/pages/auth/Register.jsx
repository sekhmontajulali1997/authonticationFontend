import { useEffect } from "react";
import { UserRegisterApiSlice } from "../../feature/auth/authApiSlice";
import { authSelector, setmessageEmty } from "../../feature/auth/authSlice";

import useFormHooks from "../../hook/useFormHooks";
import { useDispatch, useSelector } from "react-redux";
import createTost from "../../utils/reactTostify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // Navigate

  const Navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  // useSelector
  const { error, message, loader } = useSelector(authSelector);
  const { input, handleInputChange, formReset } = useFormHooks({
    name: "",
    email: "",
    password: "",
    securityAnswer: "",
  });

  // handle input submit

  const handleInputSubmit = (e) => {
    e.preventDefault();

    dispatch(UserRegisterApiSlice(input));

    dispatch(setmessageEmty());
  };
  useEffect(() => {
    if (message) {
      createTost(message, "success");
      dispatch(setmessageEmty());
      formReset();
      Navigate(`/verify_by_otp`);
    }
    if (error) {
      createTost(error);
      dispatch(setmessageEmty());
    }
  }, [message, error, dispatch, formReset, Navigate]);

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
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Form */}
                <form>
                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="name"
                      value={input.name}
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="email"
                      value={input.email}
                      className="form-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="password"
                      value={input.password}
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleInputChange}
                      name="securityAnswer"
                      value={input.securityAnswer}
                      className="form-control"
                      type="text"
                      placeholder="Your Childhood Friend Name"
                    />
                  </div>
                  <div className="mb-0">
                    <button
                      onClick={handleInputSubmit}
                      className="btn btn-primary w-100"
                      type="submit"
                    >
                      {loader ? "Creating......" : "Register"}
                    </button>
                  </div>
                </form>
                {/* /Form */}
           
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Already have an account? <Link to="/login">Login</Link>
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

export default Register;
