import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { ProductStore } from "../Store/ProductStore";
import Brands from "../components/Brands/Brands";
import Details from "../components/Products/Details";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {
    BrandList,
    BrandListRequest,
    ProductDetailsListRequest,
    ProductReviewRequest,
  } = ProductStore();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      !BrandList ? await BrandListRequest() : null;
      await ProductDetailsListRequest(id);
      await ProductReviewRequest(id);
    })();
  }, []);
  return (
    <>
      <Layout>
        <Details />
        <Brands />
      </Layout>
    </>
  );
};

export default ProductDetails;
