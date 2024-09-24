// import Users from "../model/UserModel.js";
// import sendEmail from "../utility/EmailUtilis.js";
// import { tokenEncode } from "../utility/TokenUtils.js";

import {
  createReviewService,
  removeReviewService,
} from "../services/reviewService.js";
import {
  createUserService,
  readUserService,
  updateUserProfileService,
  userLoginService,
  verifyLoginService,
} from "../services/userService.js";

//register
export const register = async (req, res) => {};

//login
export const login = async (req, res) => {
  const result = await userLoginService(req);
  return res.status(200).json(result);
};

// verify login
export const verifyLogin = async (req, res) => {
  const result = await verifyLoginService(req);
  return res.status(200).json(result);
};

// create user
export const createUser = async (req, res) => {
  const result = await createUserService(req);
  return res.status(200).json(result);
};

// update user
export const updateUserProfile = async (req, res) => {
  let result = await updateUserProfileService(req);
  return res.json(result);
};

// read user
export const readUser = async (req, res) => {
  const result = await readUserService(req);
  return res.status(200).json(result);
};

//user product review
export const reviewProduct = async (req, res) => {
  const result = await createReviewService(req);
  return res.status(200).json(result);
};

//delete review
export const reviewDelete = async (req, res) => {
  const result = await removeReviewService(req);
  return res.status(200).json(result);
};
