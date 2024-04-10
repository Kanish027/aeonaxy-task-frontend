import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../actions/User";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const { isAuthenticated, error, isLoading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(name, username, email, password);
    await dispatch(createUser(name, username, email, password));
    navigate("/update");
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 vh-auto bg-warning-subtle">
          <div className="container p-5">
            <h6 className="text-danger mb-3">Dribbble</h6>
            <p className="fw-bold fs-5 text-danger">
              Discover the world's top Designers & Creatives.
            </p>
            <div className="my-5 py-5">
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features-2.png"
                alt=""
                className="card-img"
              />
            </div>
            <small className="text-danger">
              Art by{" "}
              <span className="text-decoration-underline">Kanish Mohariya</span>
            </small>
          </div>
        </div>
        <div className="col-lg-8">
          <small className="d-flex justify-content-end p-3">
            Already a member? <span className="mx-1 text-primary">Sign In</span>
          </small>
          <div className="container px-5 py-4">
            <form onSubmit={handleSignUp}>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h4 className="fw-bold">Sign Up to Dribbble</h4>
                  <div className="mb-2" style={{ minHeight: "20px" }}>
                    {error ? (
                      <small className="text-danger">{error}</small>
                    ) : null}
                  </div>
                  <div className="my-4 d-flex justify-content-between gap-3 w-full">
                    <div className="w-100">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-secondary-subtle"
                        placeholder="Enter your full name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control bg-secondary-subtle"
                        placeholder="Enter username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control bg-secondary-subtle"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control bg-secondary-subtle"
                      id="password"
                      placeholder="6+ characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input border border-secondary-subtle rounded-0"
                      id="t&c"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />

                    <label htmlFor="t&c" className="form-label">
                      Creating an account means you are okay with our{" "}
                      <span className="text-primary">
                        Terms and Services , Privacy Policy,
                      </span>{" "}
                      and our default{" "}
                      <span className="text-primary">
                        Notification Settings
                      </span>
                      .
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="d-grid">
                        <button
                          className="btn btn-danger"
                          disabled={
                            !name ||
                            !username ||
                            !email ||
                            !password ||
                            !termsAccepted ||
                            isLoading
                          }
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <small>
                      <span className="text-secondary">
                        This site is protected by reCAPTCHA and the Google
                      </span>
                      <br />
                      <span className="text-primary">
                        Privacy Policy
                      </span> and{" "}
                      <span className="text-primary">Terms of Services</span>{" "}
                      apply.
                    </small>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
