import axios from "axios";

import Cookie from "js-cookie";

const foget = "";
console.log(Cookie.get("forgetPasswordToken"));

export const API = axios.create({
  baseURL:
    "https://authonticationauthoriation-backend-latest.onrender.com/api/v1",
  withCredentials: true,
});

export const APIForVerify = axios.create({
  baseURL:
    "https://authonticationauthoriation-backend-latest.onrender.com/api/v1",
  headers: { fogetPass: `Bearer ${foget}` },
  withCredentials: true,
});
