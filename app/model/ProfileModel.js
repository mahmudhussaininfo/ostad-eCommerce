import mongoose from "mongoose";

//brandSchema
const profileSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    cus_add: {
      type: String,
    },
    cus_city: {
      type: String,
    },
    cus_name: {
      type: String,
    },
    cus_phone: {
      type: String,
    },
    cus_postcode: {
      type: String,
    },
    cus_state: {
      type: String,
    },
    cus_fax: {
      type: String,
    },
    ship_add: {
      type: String,
    },
    ship_city: {
      type: String,
    },
    ship_country: {
      type: String,
    },
    ship_name: {
      type: String,
    },
    ship_postcode: {
      type: String,
    },
    ship_phone: {
      type: String,
    },
    ship_state: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Profiles = mongoose.model("profiles", profileSchema);

//export
export default Profiles;
