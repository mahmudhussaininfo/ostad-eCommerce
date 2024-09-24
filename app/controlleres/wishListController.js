import {
  createWishListService,
  deleteWishListService,
  readWishListService,
} from "../services/wishListService.js";

//create wishlist
export const createWishList = async (req, res) => {
  let result = await createWishListService(req);
  return res.json(result);
};

//delete wishlist
export const deleteWishList = async (req, res) => {
  let result = await deleteWishListService(req);
  return res.json(result);
};

//read wishlist
export const readWishList = async (req, res) => {
  let result = await readWishListService(req);
  return res.json(result);
};
