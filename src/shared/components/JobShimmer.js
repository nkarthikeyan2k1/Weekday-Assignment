import React from "react";

const JobShimmer = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {new Array(3).fill(1).map((_, i) => {
        return (
          <div
            key={i}
            className="shimmer-card col-xl-4 col-lg-4 col-md-6 col-sm-12"
          ></div>
        );
      })}
    </div>
  );
};

export default JobShimmer;
