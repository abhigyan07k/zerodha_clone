import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  return (
    <div className="container mt-5 p-4">
      {/* Heading Section */}
      <div className="text-center mb-5" style={{ lineHeight: 2 }}>
        <h1 className="fs-1">Open a free demat & trading account online</h1>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>

      {/* Content Section */}
      <div className="row p-3 mb-5 align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/landing.svg"
            width="60%"
            alt="Landing"
            className="img-fluid"
          />
        </div>

        {/* Signup Form Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1>Signup now</h1>
          <p>Or track your existing application</p>

          <div
            className="d-flex border rounded p-2 align-items-center mx-auto mx-md-0"
            style={{ maxWidth: "310px" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India"
              width="25"
              height="18"
              className="me-2"
            />
            <span className="me-2">+91</span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Enter your mobile number"
              style={{ boxShadow: "none", outline: "none" }}
            />
          </div>

          <button className="btn btn-primary fs-5 mt-4 w-75 w-md-50">
            Get OTP
          </button>

          <p className="text-muted mt-3">
            By proceeding, you agree to the Zerodha terms & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
