import axios from "axios";
import { create } from "zustand";

export const FeatureStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    let res = await axios.get(
      "https://ecom.teamrabbil.com/api/v1/FeaturesList"
    );

    if (res.data.status === "success") {
      set({ FeatureList: res.data.data });
    }
  },

  LegalDetails: null,
  LegalDetailsRequest: async (type) => {
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/LegalDetails/${type}`
    );

    if (res.data.status === "success") {
      set({ LegalDetails: res.data.data });
    }
  },
}));

export default FeatureStore;
