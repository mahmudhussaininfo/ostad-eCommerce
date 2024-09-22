import mongoose from "mongoose";

//brandSchema
const invoiceProductSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    invoiceID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    price: {
      type: String,
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

const InvoiceProduct = mongoose.model("invoiceProducts", invoiceProductSchema);

//export
export default InvoiceProduct;
