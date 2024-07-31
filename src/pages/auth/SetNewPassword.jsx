import { authSelector, setmessageEmty } from "../../feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useFormHooks from "../../hook/useFormHooks";
import { useEffect } from "react";
import createTost from "../../utils/reactTostify";
import { useNavigate } from "react-router-dom";
import { setNewPasswordApiSlice } from "../../feature/auth/authApiSlice";

const SetNewPassword = () => {
  // selector
  const { error, message, loader } = useSelector(authSelector);

  // Navigate
  const Navigate = useNavigate();
  // use dispatch

  const dispatch = useDispatch();

  //get form data
  const { input, handleInputChange } = useFormHooks({
    newPassword: "",
  });
  // handleInputSubmit
  const handleInputSubmit = (e) => {
    e.preventDefault();

    dispatch(setNewPasswordApiSlice(input));
  };

  useEffect(() => {
    if (message) {
      createTost(message, "success");
      Navigate("/login");
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
                      <h1 className="mb-3">Set New Password?</h1>

                      {/* Form */}
                      <form onSubmit={handleInputSubmit}>
                        <div className="mb-3">
                          <input
                            name="newPassword"
                            value={input.password}
                            onChange={handleInputChange}
                            className="form-control"
                            type="password"
                            placeholder="Set Your New Password"
                          />
                        </div>
                        <div className="mb-0">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            {loader ? "Loading........." : "Submit"}
                          </button>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="text-center dont-have">
                        Remember your password? <a href="login.html">Login</a>
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
  );
};

export default SetNewPassword;
