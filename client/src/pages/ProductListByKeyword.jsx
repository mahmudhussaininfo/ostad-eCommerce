import React, { useEffect } from "react";
import { ProductStore } from "../Store/ProductStore";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/Products/ProductList";

const ProductListByKeyword = () => {
  const { ProductListByKeywordRequest } = ProductStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ProductListByKeywordRequest(keyword);
    })();
  }, [keyword]);
  return (
    <>
      <Layout>
        <ProductList />
      </Layout>
    </>
  );
};

export default ProductListByKeyword;
