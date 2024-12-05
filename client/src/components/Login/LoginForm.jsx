import React from "react";
import { SubmitButton } from "../../utility/SubmitButton";
import { UserStore } from "../../Store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginFormValue, loginFormOnChange, UserOtpRequest } = UserStore();
  const { email } = loginFormValue;

  const onSubmit = async () => {
    if (!ValidationHelper.IsEmail(email)) {
      return toast.error("Invalid Email Address");
    }

    let res = await UserOtpRequest(email);
    if (res) {
      navigate("/otp");
    } else {
      toast.error("Failed to send verification code");
    }
  };
  return (
    <>
      <div className="container section">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card p-5">
              <h4>Enter Your Email</h4>
              <p>
                A verification code will be sent to the email address you
                provide
              </p>
              <input
                placeholder="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={(e) => loginFormOnChange("email", e.target.value)}
                className="form-control"
              />

              <SubmitButton
                onClick={onSubmit}
                submit={false}
                className="btn mt-3 btn-success"
                text="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
