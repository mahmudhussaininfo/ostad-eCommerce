import axios from "axios";
import { create } from "zustand";
import { getEmail, setEmail } from "../utility/utility";
import cookie from "js-cookie";

export const UserStore = create((set) => ({
  isLogin: () => {
    if (cookie.get("")) {
      return true;
    } else {
      return false;
    }
  },

  isFormSubmit: false,
  loginFormValue: {
    email: "",
  },
  loginFormOnChange: (name, value) => {
    set((state) => ({
      loginFormValue: {
        ...state.loginFormValue,
        [name]: value,
      },
    }));
  },
  UserOtpRequest: async (email) => {
    set({
      isFormSubmit: true,
    });
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/UserOTP/${email}`
    );
    setEmail(email);
    set({
      isFormSubmit: false,
    });
    return res.data.status === "success";
  },

  // for verify otp
  otpFormValue: {
    otpCode: "",
  },
  otpFormOnChange: (name, value) => {
    set((state) => ({
      otpFormValue: {
        ...state.otpFormValue,
        [name]: value,
      },
    }));
  },

  VeryfyLoginRequest: async (code) => {
    set({
      isFormSubmit: true,
    });
    let email = getEmail();
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/VerifyLogin/${email}/${code}`
    );
    set({
      isFormSubmit: false,
    });
    return res.data.status === "success";
  },
  isFormSubmit: false,
}));
