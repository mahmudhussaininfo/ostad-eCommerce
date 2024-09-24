import express from "express";
import * as BrandController from "../app/controlleres/BrandController.js";
import * as CategoryController from "../app/controlleres/CategoryController.js";
import * as ProductController from "../app/controlleres/ProductController.js";
import * as userControlller from "../app/controlleres/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

import * as wishListController from "../app/controlleres/wishListController.js";

import * as cartController from "../app/controlleres/cartController.js";

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

//user routes
router.post("/login", userControlller.login);
router.post("/verifylogin", userControlller.verifyLogin);
router.post("/createUser", AuthMiddleware, userControlller.createUser);
router.post("/updateUser", AuthMiddleware, userControlller.updateUserProfile);
router.get("/readUser", AuthMiddleware, userControlller.readUser);

//wishLIst routes

router.post(
  "/createWishList",
  AuthMiddleware,
  wishListController.createWishList
);
router.post(
  "/deleteWishList",
  AuthMiddleware,
  wishListController.deleteWishList
);
router.get("/readWishList", AuthMiddleware, wishListController.readWishList);

//cart routes
router.post("/createCart", AuthMiddleware, cartController.createCart);
router.get("/readCart", AuthMiddleware, cartController.readCart);
router.post("/deleteCart", AuthMiddleware, cartController.deleteCart);

//export
export default router;
