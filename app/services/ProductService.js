import Brands from "../model/BrandModel.js";
import Catagories from "../model/CatagoryModel.js";
import Products from "../model/ProductModel.js";
import Review from "../model/ReviewModel.js";
import ProductSlider from "../model/SlidersModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

//all brandList
export const BrandService = async () => {
  try {
    const brandData = await Brands.find({});
    return { status: "success", data: brandData };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//all Categories
export const Categories = async () => {
  try {
    const CategoryData = await Catagories.find({});
    return { status: "success", data: CategoryData };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//product slider
export const ProductSliderService = async () => {
  try {
    const data = await ProductSlider.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//product by brand
export const productBrandService = async (req) => {
  try {
    let BrandID = new ObjectId(req.params.id);
    let MatchStage = { $match: { brandID: BrandID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    // Query
    let data = await Products.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//product by category
export const productCategoryService = async (req) => {
  try {
    let catID = new ObjectId(req.params.id);
    let MatchStage = { $match: { categoryID: catID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    // Query
    let data = await Products.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//product by remark
export const productremarkService = async (req) => {
  try {
    let { remark } = req.params;
    let MatchStage = { $match: { remark: remark } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    // Query
    let data = await Products.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//product details
export const productDetailService = async (req) => {
  try {
    let productID = new ObjectId(req.params.id);
    let MatchStage = { $match: { _id: productID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithDetailsStage = {
      $lookup: {
        from: "productDetails", //from product details model
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    //for array
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let UnwindDetailsStage = { $unwind: "$details" };

    //0 for cut these data from array
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
        "details.des": 0,
      },
    };

    // Query
    let data = await Products.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      JoinWithDetailsStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//keyword search service
export const productKeywordService = async (req) => {
  try {
    let { keyword } = req.params;
    let regex = { $regex: keyword, $options: "i" };
    let searchParams = [
      { title: regex },
      {
        shortDes: regex,
      },
    ];

    let searchQuery = { $or: searchParams };
    let MatchStage = { $match: searchQuery };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    //for array
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };

    //0 for cut these data from array
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        brandID: 0,
        categoryID: 0,
      },
    };

    // Query
    let data = await Products.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};

//keyword Review service
export const productReviewService = async (req) => {
  try {
    let productId = new ObjectId(req.params.id);
    let MatchStage = { $match: { productID: productId } };

    let JoinWithProfileStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };

    //for Object
    let UnWindProfileStage = { $unwind: "$profile" };

    //0 for cut these data from array
    let ProjectionStage = {
      $project: {
        productID: 1,
        userID: 1,
        des: 1,
        rating: 1,
        "profile.cus_name": 1,
        "profile.cus_phone": 1,
      },
    };

    // Query
    let data = await Review.aggregate([
      MatchStage,
      JoinWithProfileStage,
      UnWindProfileStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "faild", data: error.message };
  }
};
