import { BrandService } from "../services/ProductService.js";

export const brandList = async (req, res) => {
  const result = await BrandService();
  return res.json(result);
};
