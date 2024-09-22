import mongoose from "mongoose";

//brandSchema
const invoiceSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    payable: {
      type: String,
      required: true,
    },
    cus_details: {
      type: String,
      required: true,
    },
    ship_details: {
      type: String,
      required: true,
    },
    trans_Id: {
      type: String,
      required: true,
    },
    val_id: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      required: true,
    },
    delivery_status: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    vat: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Invoice = mongoose.model("invoices", invoiceSchema);

//export
export default Invoice;
