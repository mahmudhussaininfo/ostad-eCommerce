import Cart from "../model/CartModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

//create wish list
export const createCartService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID, size, qty, color } = req.body;

    console.log(productID);

    let jsonData = {
      userID: user_id,
      productID: productID,
      size: size,
      qty: qty,
      color: color,
    };

    let data = await Cart.create(jsonData);

    return {
      status: "success",
      message: "Cart created successfully done",
      data,
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//read cart list
export const readCartService = async (req) => {
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

    let data = await Cart.aggregate([
      MatchStage,
      JoinWithProductStage,
      UnwindProductStage,
      ProjectionStage,
    ]);

    return {
      status: "success",
      message: "product read successful",
      data,
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//update cart list
export const updateCartService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { id, size, qty, color } = req.body;

    let updateJson = {
      _id: id,
      userID: user_id,
    };
    let updateData = { size, qty, color };

    let data = await Cart.updateOne(updateJson, { $set: updateData });

    // //sir code
    // let data = await Cart.updateOne({_id : id, userID : user_id}, {$set : updateData});

    return {
      status: "success",
      message: "cart update successful",
      data,
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//read cart list
export const deleteCartService = async (req) => {
  try {
    let user_id = req.headers.user_id;

    // //my code here
    // let { id } = req.params;

    let { id } = req.body;

    let jsonData = {
      _id: id,
      userID: user_id,
    };

    let data = await Cart.deleteOne(jsonData);
    console.log(data);

    return {
      status: "success",
      message: "cart product delete successful",
      data,
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
