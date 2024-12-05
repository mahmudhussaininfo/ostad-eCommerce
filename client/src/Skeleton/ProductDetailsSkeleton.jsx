import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import image from "../assets/images/image.json";

const ProductDetailsSkeleton = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-7 align-content-center p-1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Skeleton count={1} />
                </div>
                <div className="col-3">
                  <Lottie className="w-100" animationData={image} loop={true} />
                </div>
                <div className="col-3">
                  <Lottie className="w-100" animationData={image} loop={true} />
                </div>
                <div className="col-3">
                  <Lottie className="w-100" animationData={image} loop={true} />
                </div>
                <div className="col-3">
                  <Lottie className="w-100" animationData={image} loop={true} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-1">
            <Skeleton count={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSkeleton;
