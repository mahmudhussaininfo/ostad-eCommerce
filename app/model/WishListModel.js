import mongoose from "mongoose";

//brandSchema
const wishListSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const WishList = mongoose.model("wishes", wishListSchema);

//export
export default WishList;
