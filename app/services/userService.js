import Profile from "../model/ProfileModel.js";
import User from "../model/UserModel.js";
import sendEmail from "../utility/EmailUtilis.js";
import { tokenEncode } from "../utility/TokenUtils.js";

// User Login service
export const userLoginService = async (req) => {
  try {
    let { email } = req.body;
    let otp = Math.floor(100000 + Math.random() * 900000);

    let emailSubject = "Emal varification msg";
    let emailMessage = `Your otp code is ${otp}`;
    let mailSend = await sendEmail(email, emailMessage, emailSubject);

    const data = await User.updateOne(
      { email },
      { $set: { otp } },
      { upsert: true }
    );

    return {
      status: "success",
      message: "otp code successfully update",
      mailSend,
    };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

// verify Login service
export const verifyLoginService = async (req) => {
  try {
    let { email, otp } = req.body;
    let total = await User.find({ email, otp });
    if (total.length === 1) {
      let user_id = await User.find({ email, otp }).select("_id");
      let token = await tokenEncode(email, user_id[0]["_id"].toString());
      // //my code
      // let user_id = await User.find({ email, otp });
      // let token = await tokenEncode(email, user_id._id);
      await User.updateOne({ email }, { $set: { otp: "0" } });

      return {
        status: "success",
        message: "verify success",
        token: token,
      };
    } else {
      return { status: "faild", message: "Invalid otp, verify unsuccessful" };
    }
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

// create user service
export const createUserService = async (req) => {
  try {
    let user_id = req.headers.user_id;

    let reqBody = req.body;
    reqBody.userID = user_id;

    await Profile.updateOne(
      { userID: user_id },
      { $set: reqBody },
      { $upsert: true }
    );

    return {
      status: "success",
      message: "User profile successfully create",
    };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//update user service
export const updateUserProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await Profile.updateOne(
      { userID: user_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "success", message: "Profile Save Success" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

// read user service
export const readUserService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    const data = await Profile.findOne({ userID: user_id });
    if (!data) {
      return {
        status: "faild",
        message: "User profile not found",
      };
    }
    return {
      status: "success",
      message: "User profile read successful",
      data: data,
    };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};
