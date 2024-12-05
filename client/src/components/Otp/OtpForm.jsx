import { SubmitButton } from "../../utility/SubmitButton";
import { UserStore } from "../../Store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OtpForm = () => {
  const navigate = useNavigate();
  const { otpFormValue, otpFormOnChange, VeryfyLoginRequest } = UserStore();
  const { otpCode } = otpFormValue;

  const onSubmit = async () => {
    if (ValidationHelper.IsEmpty(otpCode)) {
      toast.error("Valid PIN Required");
    } else {
      let res = await VeryfyLoginRequest(otpCode);
      res ? navigate("/") : toast.error("error");
    }
  };
  return (
    <>
      <div className="container section">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card p-5">
              <h4>Enter Verification Code</h4>
              <p>
                A verification code has been sent to the email address you
                provide
              </p>
              <input
                placeholder="Verification"
                type="text"
                name="otp"
                value={otpCode}
                onChange={(e) => {
                  otpFormOnChange("otpCode", e.target.value);
                }}
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

export default OtpForm;
