import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import image from "../assets/images/image.json";

const ProductSkeleton = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
            <div className="card shadow-sm h-100 rounded-3 bg-white">
              <Lottie className="w-100" animationData={image} loop={true} />
              <div className="card-body">
                <Skeleton count={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
