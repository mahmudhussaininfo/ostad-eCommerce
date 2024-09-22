import mongoose from "mongoose";

//brandSchema
const productDetailSchema = new mongoose.Schema(
  {
    img1: {
      type: String,
      unique: true,
    },
    img2: {
      type: String,
      unique: true,
    },
    img3: {
      type: String,
      unique: true,
    },
    img4: {
      type: String,
      unique: true,
    },
    img5: {
      type: String,
      unique: true,
    },
    img6: {
      type: String,
      unique: true,
    },
    img7: {
      type: String,
      unique: true,
    },
    img8: {
      type: String,
      unique: true,
    },
    des: {
      type: String,
      unique: true,
    },
    color: {
      type: String,
      unique: true,
    },
    size: {
      type: String,
      unique: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductDetails = mongoose.model("productDetails", productDetailSchema);

//export
export default ProductDetails;
