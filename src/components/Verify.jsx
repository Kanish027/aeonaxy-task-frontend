import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Verify = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to={"/new"} />;
  }

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7">
            <div className="fs-2 fw-semibold text-center">
              Please verify your email...
            </div>
            <div className="d-flex justify-content-center my-4">
              <i
                className="fa-solid fa-envelope-circle-check text-danger"
                style={{ fontSize: "90px" }}
              ></i>
            </div>
            <div className="text-center text-secondary mb-3">
              Please verify your email address. We've sent a confirmation email
              to:
            </div>
            <div className="text-center mb-3 fw-bold">{user && user.email}</div>
            <div className="text-center text-secondary mb-3">
              Click the confirmation link in the email to begin using Dribbble.
            </div>
            <div className="mb-3 text-center text-secondary">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it, you can{" "}
              <span className="text-danger">
                resend the confirmation email.
              </span>
            </div>
            <div className="text-center text-secondary">
              Wrong email address?{" "}
              <span className="text-danger">Change it.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Verify;
