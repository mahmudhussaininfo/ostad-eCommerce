import Review from "../model/ReviewModel.js";

//create review list
export const createReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID, des, rating } = req.body;

    let jsonData = {
      userID: user_id,
      productID: productID,
    };

    let createData = {
      productID: productID,
      des: des,
      rating: rating,
    };

    const data = await Review.updateOne(
      jsonData,
      { $set: createData },
      { upsert: true }
    );

    return { status: "success", message: "Product review Create", data };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//remove review
export const removeReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { id } = req.params;

    let jsonData = {
      userID: user_id,
      _id: id,
    };

    await Review.deleteOne(jsonData);

    return {
      status: "success",
      message: "product Review deleted successful",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
