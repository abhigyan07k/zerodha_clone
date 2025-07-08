import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-5 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-5">
          <h1 className="fs-1 mb-4">Trust with confidence</h1>

          <h2 className="fs-4 mt-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4 mt-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 p-5 text-center">
          <img
            src="media/ecosystem.png"
            alt="ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />

          {/* Links Section */}
          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center">
            <a href="#" className="text-decoration-none mx-md-4 mb-2 mb-md-0">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
