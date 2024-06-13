import React from "react";

const LoadingBar = ({ isLoading }) => {
  return (
    <div className="d-flex justify-content-center loading-container">
      <div className={`loading-indicator${isLoading ? " active" : ""}`}></div>
    </div>
  );
};

export default React.memo(LoadingBar);
