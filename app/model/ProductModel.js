import mongoose from "mongoose";

//brandSchema
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    discount: {
      type: Boolean,
      required: true,
    },
    discountPrice: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    star: {
      type: String,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Products = mongoose.model("products", productSchema);
//export
export default Products;
