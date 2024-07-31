import { useDispatch, useSelector } from "react-redux";
import {
  resendOtpApiSlice,
  userVerify_email_by_otpApiSlice,
} from "../../feature/auth/authApiSlice";
import useFormHooks from "../../hook/useFormHooks";
import { useEffect } from "react";
import { authSelector, setmessageEmty } from "../../feature/auth/authSlice";
import createTost from "../../utils/reactTostify";
import { useNavigate } from "react-router-dom";

const VerifyByOtp = () => {
  // selector
  const { error, message, loader, forgetPassword ,accountVerify,resendLoader} = useSelector(authSelector);

  // Navigate
  const Navigate = useNavigate();
  // get form data
  // use dispatch

  const dispatch = useDispatch();
  // get from data
  const { input, handleInputChange } = useFormHooks();

  // handleinputSubmit
  const handleinputSubmit = (e) => {
    e.preventDefault();
    dispatch(userVerify_email_by_otpApiSlice(input));
  };

  // handleInputResendOtp
  const handleInputResendOtp = (e) => {
    e.preventDefault();

    dispatch(resendOtpApiSlice());
  };

  useEffect(() => {
    if (message) {
      createTost(message, "success");
      dispatch(setmessageEmty());
      {
        forgetPassword === true ? Navigate("/new_password") : accountVerify === true ? Navigate("/login") : "";
      }
    }
    if (error) {
      createTost(error);
      dispatch(setmessageEmty());
    }
  }, [message, error, dispatch, Navigate, forgetPassword,accountVerify]);

  return (
    <>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="main-wrapper login-body">
            <div className="login-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-2"></div>

                  <div className="col-xxl-8">
                    <div className=" text-center">
                      <h1>Verify Your Email</h1>
                      <p className="account-subtitle">
                        We have already send OTP to your email, please Check
                        Your Email (valid Otp for 15 Minutes )
                      </p>
                      <form>
                        <div className="mb-3">
                          <input
                            name="otp"
                            onChange={handleInputChange}
                            className="form-control text-center"
                            type="text"
                            placeholder=" Enter OTP "
                          />
                        </div>

                        <div className="mb-0">
                          <button
                            onClick={handleinputSubmit}
                            className="btn btn-primary w-100"
                            type="submit"
                          >  {loader ? "Verifying....." : " Verify now"}
                            {" "}
                            
                          </button>
                        </div>
                      </form>
                      <div className="text-sm text-slate-500 mt-4">
                        Did not receive code?
                        <button
                          className="font-medium text-indigo-500 btn border-0 bg-transparent text-primary   hover:text-indigo-600"
                          onClick={handleInputResendOtp}
                        >
                          {" "}
                          {resendLoader ? "Sending....." : " Resend"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyByOtp;
