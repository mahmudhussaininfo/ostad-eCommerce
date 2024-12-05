import axios from "axios";
import { create } from "zustand";

export const ProductStore = create((set) => ({
  BrandList: null,
  BrandListRequest: async () => {
    let res = await axios.get(
      "https://ecom.teamrabbil.com/api/v1/ProductBrandList"
    );

    if (res.data.status === "success") {
      set({ BrandList: res.data.data });
    }
  },

  CategoryList: null,
  CategoryListRequest: async () => {
    let res = await axios.get(
      "https://ecom.teamrabbil.com/api/v1/ProductCategoryList"
    );
    if (res.data.status === "success") {
      set({
        CategoryList: res.data.data,
      });
    }
  },

  SliderList: null,
  SliderListRequest: async () => {
    let res = await axios.get(
      "https://ecom.teamrabbil.com/api/v1/ProductSliderList"
    );
    if (res.data.status === "success") {
      set({
        SliderList: res.data.data,
      });
    }
  },

  RemarkList: null,
  ProductListByRemark: async (remark) => {
    set({
      RemarkList: null,
    });
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/ProductListByRemark/${remark}`
    );
    if (res.data.status === "success") {
      set({
        RemarkList: res.data.data,
      });
    }
  },

  ListProduct: null,
  ProductListByBrandRequest: async (brandID) => {
    set({
      ListProduct: null,
    });
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/ProductListByBrand/${brandID}`
    );
    if (res.data.status === "success") {
      set({
        ListProduct: res.data.data,
      });
    }
  },
  ProductListByCategoryRequest: async (categoryID) => {
    set({
      ListProduct: null,
    });
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/ProductListByCategory/${categoryID}`
    );
    if (res.data.status === "success") {
      set({
        ListProduct: res.data.data,
      });
    }
  },
  ProductListByKeywordRequest: async (keyword) => {
    set({
      ListProduct: null,
    });
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/ProductListByKeyword/${keyword}`
    );
    if (res.data.status === "success") {
      set({
        ListProduct: res.data.data,
      });
    }
  },
  ProductListByFilter: async (data) => {
    set({
      ListProduct: null,
    });
    let res = await axios.post(
      `https://ecom.teamrabbil.com/api/v1/ProductListByFilter/`,
      data
    );
    if (res.data.status === "success") {
      set({
        ListProduct: res.data.data,
      });
    }
  },
  searchKeyword: "",
  setSearchKeyword: async (keyword) => {
    set({
      searchKeyword: keyword,
    });
  },

  DetailsList: null,
  ProductDetailsListRequest: async (id) => {
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/ProductDetails/${id}`
    );
    if (res.data.status === "success") {
      set({
        DetailsList: res.data.data,
      });
    }
  },

  ReviewList: null,
  ProductReviewRequest: async (id) => {
    set({
      ReviewList: null,
    });
    let res = await axios.get(
      `https://ecom.teamrabbil.com/api/v1/ProductReviewList/${id}`
    );
    if (res.data.status === "success") {
      set({
        ReviewList: res.data.data,
      });
    }
  },
}));
