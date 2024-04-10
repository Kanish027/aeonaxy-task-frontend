import React from "react";

const Footer = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2 col-6 col-md-6">
          <h4 className="text-danger">Dribbble</h4>
          <small>
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </small>
          <div className="mt-4 d-flex gap-3 fs-6">
            <div>
              <i className="fa-brands fa-dribbble"></i>
            </div>
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i className="fa-brands fa-square-facebook"></i>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-6 col-md-6">
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 text-dark fw-semibold">For designers</p>
            <li className="list-style-none my-1">
              <small>Go Pro!</small>
            </li>
            <li className="list-style-none my-1">
              <small>Explore design work</small>
            </li>
            <li className="list-style-none my-1">
              <small>Design blog</small>
            </li>
            <li className="list-style-none my-1">
              <small>Ovetime podcast</small>
            </li>
            <li className="list-style-none my-1">
              <small>Playoffs</small>
            </li>
            <li className="list-style-none my-1">
              <small>Weekly Warm-Up</small>
            </li>
            <li className="list-style-none my-1">
              <small>Refer a Friend</small>
            </li>
            <li className="list-style-none my-1">
              <small>Code of conduct</small>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-md-6">
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 text-dark fw-semibold">Hire designers</p>
            <li className="list-style-none my-1">
              <small>Post a job opening</small>
            </li>
            <li className="list-style-none my-1">
              <small>Post a freelance project</small>
            </li>
            <li className="list-style-none my-1">
              <small>Search for designers</small>
            </li>
          </ul>
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 text-dark fw-semibold">Brands</p>
            <li className="list-style-none my-1">
              <small>Advertise with us</small>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-md-6">
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 text-dark fw-semibold">Company</p>
            <li className="list-style-none my-1">
              <small>About</small>
            </li>
            <li className="list-style-none my-1">
              <small>Careers</small>
            </li>
            <li className="list-style-none my-1">
              <small>Support</small>
            </li>
            <li className="list-style-none my-1">
              <small>Media kit</small>
            </li>
            <li className="list-style-none my-1">
              <small>Testimonials</small>
            </li>
            <li className="list-style-none my-1">
              <small>API</small>
            </li>
            <li className="list-style-none my-1">
              <small>Terms of service</small>
            </li>
            <li className="list-style-none my-1">
              <small>Privacy policy</small>
            </li>
            <li className="list-style-none my-1">
              <small>Cookie policy</small>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-md-6">
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 fw-semibold text-dark">Directories</p>
            <li className="list-style-none my-1">
              <small>Design jobs</small>
            </li>
            <li className="list-style-none my-1">
              <small>Designers for hire</small>
            </li>
            <li className="list-style-none my-1">
              <small>Freelance designers for hire</small>
            </li>
            <li className="list-style-none my-1">
              <small>Tags</small> my-1
            </li>
            <li className="list-style-none my-1">
              <small>Places</small>
            </li>
          </ul>
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 text-dark fw-semibold">Design assets</p>
            <li className="list-style-none my-1">
              <small>Dribbble Marketplace</small>
            </li>
            <li className="list-style-none my-1">
              <small>Creative Market</small>
            </li>
            <li className="list-style-none my-1">
              <small>Fontspring</small>
            </li>
            <li className="list-style-none my-1">
              <small>Font Squirrel</small>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-md-6">
          <ul className="list-unstyled text-secondary">
            <p className="mb-0 fw-semibold text-dark">Design Resources</p>
            <li className="list-style-none my-1">
              <small>Freelancing</small>
            </li>
            <li className="list-style-none my-1">
              <small>Design Hiring</small>
            </li>
            <li className="list-style-none my-1">
              <small>Design Portfolio</small>
            </li>
            <li className="list-style-none my-1">
              <small>Design Education</small>
            </li>
            <li className="list-style-none my-1">
              <small>Creative Process</small>
            </li>
            <li className="list-style-none my-1">
              <small>Design Industry Trends</small>
            </li>
            <li className="list-style-none my-1">
              <small>Refer a Friend</small>
            </li>
            <li className="list-style-none my-1">
              <small>Code of conduct</small>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-secondary">
          <small>
            <i className="fa-regular fa-copyright"></i> 2023 Dribbble. All
            rights reserved.
          </small>
        </div>
        <div>
          <span className="fw-bold">20,501,853</span>{" "}
          <small className="text-secondary">shots dribbbled</small>{" "}
          <i className="fa-brands fa-dribbble text-danger fs-5"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
