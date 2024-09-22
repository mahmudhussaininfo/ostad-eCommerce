import { Categories } from "../services/ProductService.js";

export const CategoryList = async (req, res) => {
  const result = await Categories();
  return res.status(200).json(result);
};
