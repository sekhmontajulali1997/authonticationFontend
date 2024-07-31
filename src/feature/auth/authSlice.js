// create authSlice

import { createSlice } from "@reduxjs/toolkit";
import {
  forgetPasswordApiSlice,
  meApiSlice,
  resendOtpApiSlice,
  setNewPasswordApiSlice,
  UserLoginApiSlice,
  UserRegisterApiSlice,
  userVerify_email_by_otpApiSlice,
} from "./authApiSlice";


const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user:
      localStorage.getItem("loginUser") || localStorage.getItem("RegisterUser")
        ? JSON.parse(localStorage.getItem("loginUser")) ||
          JSON.parse(localStorage.getItem("RegisterUser"))
        : [],
    error: null,
    message: null,
    forgetPassword: false,
    accountVerify: false,
    loader: false,
    resendLoader: false,
  },
  reducers: {
    setmessageEmty: (state) => {
      state.message = null;
      state.error = null;
    },
  },

  extraReducers: (build) => {
    build
      // for userRegistation
      .addCase(UserRegisterApiSlice.pending, (state) => {
        state.loader = true;
      })
      .addCase(UserRegisterApiSlice.fulfilled, (state, action) => {
        state.loader = false;

        state.user = action.payload.createUser;
        localStorage.setItem(
          "RegisterUser",
          JSON.stringify(action.payload.createUser)
        );

        state.message = action.payload.message;
      })
      .addCase(UserRegisterApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      // for userVerify_email_by_otp
      .addCase(userVerify_email_by_otpApiSlice.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(userVerify_email_by_otpApiSlice.fulfilled, (state, action) => {
        state.loader = false;

        state.user = action.payload.getUpdatedDataForgetPassword
          ? (state.forgetPassword = true)
          : (state.accountVerify = true);

        state.user = 
          action.payload.getUpdatedDataForgetPassword
        
          ? action.payload.getUpdatedDataForgetPassword
          : action.payload.getUpdatedDataAccountVerify;

        localStorage.setItem(
          "RegisterUser",
          JSON.stringify(
            action.payload.getUpdatedDataForgetPassword
              ? action.payload.getUpdatedDataForgetPassword
              : action.payload.getUpdatedDataAccountVerify
          )
        );

        state.message = action.payload.message;
      })
      .addCase(userVerify_email_by_otpApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // for resend otp
      .addCase(resendOtpApiSlice.pending, (state) => {
        state.resendLoader = true;
      })
      .addCase(resendOtpApiSlice.fulfilled, (state, action) => {
        state.resendLoader = false;
        state.message = action.payload.message;
      })
      .addCase(resendOtpApiSlice.rejected, (state, action) => {
        state.resendLoader = false;
        state.error = action.error.message;
      })

      // for userLogin
      .addCase(UserLoginApiSlice.pending, (state) => {
        state.loader = true;
      })
      .addCase(UserLoginApiSlice.fulfilled, (state, action) => {
        state.loader = false;

        state.user = action.payload.ValidUser;
        localStorage.setItem(
          "loginUser",
          JSON.stringify(action.payload.ValidUser)
        );
        localStorage.removeItem("RegisterUser");
        state.message = action.payload.message;
      })
      .addCase(UserLoginApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      // for forgetPasswordApiSlice
      .addCase(forgetPasswordApiSlice.pending, (state) => {
        state.loader = true;
      })
      .addCase(forgetPasswordApiSlice.fulfilled, (state, action) => {
        state.loader = false;

        state.message = action.payload.message;
      })
      .addCase(forgetPasswordApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      // for setNewPassword
      .addCase(setNewPasswordApiSlice.pending, (state) => {
        state.loader = true;
      })
      .addCase(setNewPasswordApiSlice.fulfilled, (state, action) => {
        state.loader = false;

        state.message = action.payload.message;
      })
      .addCase(setNewPasswordApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      // for me
      .addCase(meApiSlice.pending, (state) => {
        state.loader = true;
      })
      .addCase(meApiSlice.fulfilled, (state, action) => {
        state.loader = false;
        state.isActivate = true;
        state.user = action.payload.loggedUser;
        localStorage.setItem(
          "loginUser",
          JSON.stringify(action.payload.loggedUser)
        );

        state.message = action.payload.message;
      })
      .addCase(meApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.user = null;
        localStorage.removeItem("loginUser");
        state.error = action.error.message;
      });
  },
});

// selector
export const authSelector = (state) => state.auth;
// export actions
export const { setmessageEmty } = authSlice.actions;
// export authSlice reducer
export default authSlice.reducer;
