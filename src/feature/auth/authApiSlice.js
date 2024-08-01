// create authApiSlice

import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../apiAxiosInstance/api";

// this is UserRegisterApiSlice
export const UserRegisterApiSlice = createAsyncThunk(
  "authSlice/UserRegisterApiSlice",
  async (data) => {
    try {
      const response = await API.post("/users", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// this is User verify_email_by_otpApiSlice
export const userVerify_email_by_otpApiSlice = createAsyncThunk(
  "authSlice/userVerify_email_by_otpApiSlice",
  async (data) => {
    try {
      const response = await API.post("/users/verify_email_by_otp", data);
      
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// this is User resendOtpApiSlice
export const resendOtpApiSlice = createAsyncThunk(
  "authSlice/resendOtpApiSlice",
  async () => {
    try {
      const response = await API.get(`/users/resend_otp/`,);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// this is UserLoginApiSlice
export const UserLoginApiSlice = createAsyncThunk(
  "authSlice/UserLoginApiSlice",
  async (data) => {
    try {
      const response = await API.post("/users/login", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// this is forgetPasswordApiSlice for authorized user
export const forgetPasswordApiSlice = createAsyncThunk("authSlice/forgetPasswordApiSlice", async(data) => {

  try {
    const response = await API.post("/users/forget_password", data);
    
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// this is setNewPasswordApiSlice for authorized user
export const setNewPasswordApiSlice = createAsyncThunk("authSlice/setNewPasswordApiSlice", async(data) => {

  try {
    const response = await API.post("/users/set_new_passwoord", data);
    
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});










// this is meApiSlice for authorized user
export const meApiSlice = createAsyncThunk("authSlice/meApiSlice", async () => {
  try {
    const response = await API.get("/users/me");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

