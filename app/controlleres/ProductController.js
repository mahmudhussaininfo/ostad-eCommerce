import {
  productBrandService,
  productCategoryService,
  productDetailService,
  productKeywordService,
  productremarkService,
  productReviewService,
  ProductSliderService,
} from "../services/ProductService.js";

export const productSlider = async (req, res) => {
  const result = await ProductSliderService();
  return res.status(200).json(result);
};

export const ProductListByBrand = async (req, res) => {
  let result = await productBrandService(req);
  return res.json(result);
};

export const ProductListByCategory = async (req, res) => {
  let result = await productCategoryService(req);
  return res.json(result);
};

//product remark controller
export const ProductRemark = async (req, res) => {
  let result = await productremarkService(req);
  return res.json(result);
};

//product detail controller
export const ProductDetails = async (req, res) => {
  let result = await productDetailService(req);
  return res.status(200).json(result);
};

//product search with keyword
export const ProductKeyword = async (req, res) => {
  let result = await productKeywordService(req);
  return res.status(200).json(result);
};

//product search with keyword
export const ProductReview = async (req, res) => {
  let result = await productReviewService(req);
  return res.status(200).json(result);
};
