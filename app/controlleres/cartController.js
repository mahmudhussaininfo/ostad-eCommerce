import {
  createCartService,
  deleteCartService,
  readCartService,
} from "../services/cartService.js";

//create wishlist
export const createCart = async (req, res) => {
  let result = await createCartService(req);
  return res.json(result);
};

// read cart
export const readCart = async (req, res) => {
  let result = await readCartService(req);
  return res.json(result);
};

// delete cart
export const deleteCart = async (req, res) => {
  let result = await deleteCartService(req);
  return res.json(result);
};
