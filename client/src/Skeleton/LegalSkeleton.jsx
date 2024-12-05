import Skeleton from "react-loading-skeleton";

const LegalSkeleton = () => {
  return (
    <>
      {" "}
      <div className="container section">
        <div className="row">
          {Array.from({ length: 1 }).map((item, idx) => {
            return (
              <div key={idx} className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <Skeleton count={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LegalSkeleton;
