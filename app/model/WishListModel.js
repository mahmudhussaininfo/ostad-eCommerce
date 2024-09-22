import mongoose from "mongoose";

//brandSchema
const wishListSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const WishLists = mongoose.model("wishLists", wishListSchema);

//export
export default WishLists;
