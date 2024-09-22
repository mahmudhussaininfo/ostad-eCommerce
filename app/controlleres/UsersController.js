import Users from "../model/UserModel.js";
import sendEmail from "../utility/EmailUtilis.js";
import { tokenEncode } from "../utility/TokenUtils.js";

//register
export const register = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await Users.create(reqBody);

    if (user) {
      return res.status(200).json({
        message: `Hi ${user.firstName}, your registration successfully done`,
        user,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

//login
export const login = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await Users.findOne(reqBody);

    if (!user) {
      return res.status(404).json({
        message: `user not found`,
      });
    } else {
      let token = await tokenEncode(user.email, user._id);
      return res.status(200).json({
        message: "user login success",
        user: { token: token, user },
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
