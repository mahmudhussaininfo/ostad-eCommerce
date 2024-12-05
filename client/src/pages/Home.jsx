import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { FeatureStore } from "../Store/FeatureStore";
import { ProductStore } from "../Store/ProductStore";
import Slider from "../components/Slider/Slider";
import Feature from "../components/Features/Feature";
import Categories from "../components/Categories/Categories";
import Brands from "../components/Brands/Brands";
import Products from "../components/Products/Products";

const Home = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ProductListByRemark,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();
  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await BrandListRequest();
      await ProductListByRemark("new");
    })();
  }, []);
  return (
    <>
      <Layout>
        <Slider />
        <Feature />
        <Categories />
        <Products />
        <Brands />
      </Layout>
    </>
  );
};

export default Home;
