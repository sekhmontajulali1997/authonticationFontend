import { useEffect,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import createTost from "../../utils/reactTostify";
import { authSelector, setmessageEmty } from "../../feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordApiSlice } from "../../feature/auth/authApiSlice";
import useFormHooks from "../../hook/useFormHooks";

const ForgotPassword = () => {
  // selector
  const { error, message, loader } = useSelector(authSelector);

  // Navigate
  const Navigate = useNavigate();
  // use dispatch

  const dispatch = useDispatch();

  //get form data
  const {input, handleInputChange} = useFormHooks({
    email: ""
  })
  // handleInputSubmit
  const handleInputSubmit = (e) => {
    e.preventDefault();

    dispatch(forgetPasswordApiSlice(input));
  
  };

  useEffect(() => {
    if (message) {
      createTost(message, "success");
      Navigate("/verify_by_otp");
      dispatch(setmessageEmty());
    }
    if (error) {
      createTost(error);
      dispatch(setmessageEmty());
    }
  }, [message, error, dispatch, Navigate]);

  return (
    <>
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
                      <h1 className="mb-3">Forgot Password?</h1>

                      {/* Form */}
                      <form onSubmit={handleInputSubmit} >
                        <div className="mb-3">
                          <input
                          name="email"
                            value={input.email}
                            onChange={handleInputChange}
                            className="form-control"
                            type="text"
                            placeholder="Enter your email for reset password"
                          />
                        </div>
                        <div className="mb-0">
                          <button
                            
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            {" "}
                            {loader ? "Loading....." : "Reset Password"}{" "}
                          </button>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="text-center dont-have">
                        Remember your password? <Link to="/login">Login</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;
