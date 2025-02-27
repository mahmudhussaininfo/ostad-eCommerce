import React, { useState } from "react";
import { ProductStore } from "../../Store/ProductStore";
import ProductDetailsSkeleton from "../../Skeleton/ProductDetailsSkeleton";
import parse from "html-react-parser";
import ProductImages from "./ProductImages";
import Review from "./Review";
const Details = () => {
  const { DetailsList } = ProductStore();

  const [qty, setQty] = useState(1);
  const increment = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    if (qty >= 1) {
      return setQty(qty - 1);
    }
  };

  if (!DetailsList) {
    return <ProductDetailsSkeleton />;
  } else {
    return (
      <div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-7 p-3">
              <ProductImages />
            </div>
            <div className="col-md-5 p-3">
              <h4>{DetailsList[0].title}</h4>

              <p className="text-muted bodySmal my-1">
                Category: {DetailsList[0].category.categoryName}
              </p>
              <p className="text-muted bodySmal my-1">
                Brand: {DetailsList[0].brand.brandName}
              </p>
              <p className="bodySmal mb-2 mt-1">{DetailsList[0].shortDes}</p>
              {DetailsList[0].discount ? (
                <span>
                  Price:
                  <strike class="text-secondary">{DetailsList[0].price}</strike>
                  &nbsp;
                  {DetailsList[0].discountPrice}
                </span>
              ) : (
                <span>Price: {DetailsList[0].price}</span>
              )}

              <div className="row">
                <div className="col-4 p-2">
                  <label className="bodySmal">Size</label>
                  <select className="form-control my-2 form-select">
                    <option value="">Size</option>
                    {DetailsList[0].details.size
                      .split(",")
                      .map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmal">Color</label>
                  <select className="form-control my-2 form-select">
                    <option value="">Color</option>
                    {DetailsList[0].details.color
                      .split(",")
                      .map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmal">Quantity</label>
                  <div className="input-group my-2">
                    <button
                      onClick={decrement}
                      className="btn btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      value={qty}
                      type="text"
                      className="form-control bg-light text-center"
                      readOnly
                    />
                    <button
                      onClick={increment}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-4 p-2">
                  <button className="btn w-100 btn-success">Add to Cart</button>
                </div>
                <div className="col-4 p-2">
                  <button className="btn w-100 btn-success">Add to Wish</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Speci-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Speci-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Speci-tab-pane"
                  aria-selected="true"
                >
                  Specifications
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Review-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Review-tab-pane"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Speci-tab-pane"
                role="tabpanel"
                aria-labelledby="Speci-tab"
                tabIndex="0"
              >
                {parse(DetailsList[0]["details"]["des"])}
              </div>
              <div
                className="tab-pane fade"
                id="Review-tab-pane"
                role="tabpanel"
                aria-labelledby="Review-tab"
                tabIndex="0"
              >
                <Review />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
