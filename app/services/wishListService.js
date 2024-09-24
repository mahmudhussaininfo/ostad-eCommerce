import WishList from "../model/WishListModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

//create wish list
export const createWishListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;

    let jsonData = {
      userID: user_id,
      productID: productID,
    };

    await WishList.updateOne(jsonData, { $set: jsonData }, { upsert: true });

    return { status: "success", message: "Product added to wishlist" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//delete wish list
export const deleteWishListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;

    let jsonData = {
      userID: user_id,
      productID: productID,
    };

    await WishList.deleteOne(jsonData);

    return {
      status: "success",
      message: "product wishlist deleted successful",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//read wish list
export const readWishListService = async (req) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
    let MatchStage = { $match: { userID: user_id } };

    let JoinWithProductStage = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };

    let UnwindProductStage = { $unwind: "$product" };

    let ProjectionStage = {
      $project: {
        "product.remark": 0,
      },
    };

    let data = await WishList.aggregate([
      MatchStage,
      JoinWithProductStage,
      UnwindProductStage,
      ProjectionStage,
    ]);

    return {
      status: "success",
      message: "product wishlist read successful",
      data,
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
