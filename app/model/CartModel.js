import mongoose from "mongoose";

//brandSchema
const cartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart = mongoose.model("carts", cartSchema);

//export
export default Cart;
