import React, { useEffect } from "react";
import { ProductStore } from "../Store/ProductStore";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/Products/ProductList";

const ProductListByCategory = () => {
  const { ProductListByCategoryRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ProductListByCategoryRequest(id);
    })();
  }, [id]);
  return (
    <>
      <Layout>
        <ProductList />
      </Layout>
    </>
  );
};

export default ProductListByCategory;
