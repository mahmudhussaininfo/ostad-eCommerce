import React from "react";
import { ProductStore } from "../../Store/ProductStore";
import StarRatings from "react-star-ratings";

const Review = () => {
  const { ReviewList } = ProductStore();
  console.log(ReviewList);

  return (
    <>
      <ul className="list-group list-group-flush">
        {ReviewList !== null
          ? ReviewList.map((item, idx) => {
              return (
                <li key={idx} className="list-group-item">
                  <h4>{item.profile.cus_name}</h4>
                  <h6>{item.des}</h6>
                  <StarRatings
                    rating={parseFloat(item.rating)}
                    starRatedColor="red"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default Review;
