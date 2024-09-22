import mongoose from "mongoose";

//brandSchema
const brandSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      unique: true,
      required: true,
    },
    brandImg: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Brands = mongoose.model("brands", brandSchema);
//export
export default Brands;
