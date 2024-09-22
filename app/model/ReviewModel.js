import mongoose from "mongoose";

//brandSchema
const reviewSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Review = mongoose.model("reviews", reviewSchema);

//export
export default Review;
