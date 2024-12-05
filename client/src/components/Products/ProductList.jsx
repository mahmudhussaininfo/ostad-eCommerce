import { useEffect, useState } from "react";
import ProductSkeleton from "../../Skeleton/ProductSkeleton";
import { ProductStore } from "../../Store/ProductStore";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductList = () => {
  const {
    ListProduct,
    BrandList,
    BrandListRequest,
    CategoryList,
    CategoryListRequest,
    ProductListByFilter,
  } = ProductStore();

  const [filter, setFilter] = useState({
    brandID: "",
    categoryID: "",
    priceMin: "",
    priceMax: "",
  });

  const handleChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    (async () => {
      !BrandList ? await BrandListRequest() : null;
      !CategoryList ? await CategoryListRequest() : null;

      let filterProperty = Object.values(filter).every((value) => value === "");
      !filterProperty ? await ProductListByFilter(filter) : null;
    })();
  }, [filter]);

  return (
    <>
      <div className="container mt-2">
        {" "}
        <div className="row">
          <div className="col-md-3 p-2">
            <div className="card vh-100 p-3 shadow-sm">
              <label className="form-label mt-3">Brands</label>
              <select
                name="brandID"
                value={filter.brandID}
                onChange={handleChange}
                className="form-control form-select"
              >
                {BrandList !== null ? (
                  BrandList.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.brandName}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </select>
              <label className="form-label mt-3">Categories</label>
              <select
                name="categoryID"
                value={filter.categoryID}
                onChange={handleChange}
                className="form-control form-select"
              >
                {CategoryList !== null ? (
                  CategoryList.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.categoryName}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </select>
              <label className="form-label mt-3">
                Minimum Price ${filter.priceMin}
              </label>
              <input
                name="priceMin"
                value={filter.priceMin}
                onChange={handleChange}
                min={0}
                max={1000000}
                step={1000}
                type="range"
                className="form-range"
              />{" "}
              <label className="form-label mt-3">
                Maximum Price ${filter.priceMax}
              </label>
              <input
                name="priceMax"
                value={filter.priceMax}
                onChange={handleChange}
                min={0}
                max={1000000}
                step={1000}
                type="range"
                className="form-range"
              />
            </div>
          </div>
          <div className="col-md-9 p-2">
            <div className="container">
              <div className="row">
                {!ListProduct ? (
                  <ProductSkeleton />
                ) : (
                  <div className="container">
                    <div className="row">
                      {ListProduct.map((item, index) => {
                        let price = (
                          <p className="bodyMedium  text-dark my-1">
                            Price: ${item.price}
                          </p>
                        );

                        if (item.discount === true) {
                          price = (
                            <p className="bodyMedium  text-dark my-1">
                              Price: <strike> ${item.price}</strike> $
                              {item.discountPrice}
                            </p>
                          );
                        }

                        return (
                          <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                            <Link
                              to={"/details"}
                              className="card shadow-sm h-100 rounded-3 bg-white"
                            >
                              <img
                                className="w-100 rounded-top-2"
                                src={item.image}
                              />
                              <div className="card-body">
                                <p className="bodySmal text-secondary my-1">
                                  {item.title}
                                </p>
                                {price}
                                <StarRatings
                                  rating={parseFloat(item.star)}
                                  starRatedColor="red"
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
