import mongoose from "mongoose";

//brandSchema
const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      unique: true,
    },
    categoryImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Catagories = mongoose.model("categories", categorySchema);
//export
export default Catagories;
