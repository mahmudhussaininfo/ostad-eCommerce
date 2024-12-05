import React from "react";
import FeatureStore from "../../Store/FeatureStore";
import LegalSkeleton from "../../Skeleton/LegalSkeleton";
import parse from "html-react-parser";

const Legal = () => {
  const { LegalDetails } = FeatureStore();
  if (!LegalDetails) {
    return <LegalSkeleton />;
  } else {
    return (
      <>
        <div className="container section">
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      {parse(LegalDetails[0].description)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Legal;
