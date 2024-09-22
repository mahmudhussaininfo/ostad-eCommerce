import express from "express";
import * as BrandController from "../app/controlleres/BrandController.js";
import * as CategoryController from "../app/controlleres/CategoryController.js";
import * as ProductController from "../app/controlleres/ProductController.js";

//router init
const router = express.Router();

//brand routes
router.get("/brands", BrandController.brandList);

//category routes
router.get("/category", CategoryController.CategoryList);

//product routes
router.get("/product-slider", ProductController.productSlider);
router.get("/productListBrands/:id", ProductController.ProductListByBrand);
router.get("/productListCategory/:id", ProductController.ProductListByCategory);
router.get("/productRemarkList/:remark", ProductController.ProductRemark);
router.get("/productDetails/:id", ProductController.ProductDetails);
router.get("/productKeyword/:keyword", ProductController.ProductKeyword);
router.get("/productReview/:id", ProductController.ProductReview);
//export
export default router;
