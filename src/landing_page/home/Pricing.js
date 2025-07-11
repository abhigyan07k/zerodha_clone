import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        {/* Left Section */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Section - Pricing Boxes */}
        <div className="col-12 col-md-6 col-lg-6">
          <div className="row text-center">
            <div className="col-6 p-3 border">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign fs-3"></i>0
              </h1>
              <p>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col-6 p-3 border">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign fs-3"></i>20
              </h1>
              <p>
                Intraday and <br /> F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
