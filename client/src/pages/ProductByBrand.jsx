import React, { useEffect } from "react";
import { ProductStore } from "../Store/ProductStore";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/Products/ProductList";

const ProductByBrand = () => {
  const { ProductListByBrandRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ProductListByBrandRequest(id);
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

export default ProductByBrand;
