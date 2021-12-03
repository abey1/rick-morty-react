import React from "react";

const Status = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <button className="btn btn-primary">Alive</button>
          <button className="btn btn-primary mx-5">Dead</button>
          <button className="btn btn-primary mx-5">Unknown</button>
        </div>
      </div>
    </div>
  );
};

export default Status;
