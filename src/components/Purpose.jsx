import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purpose } from "../actions/User";
import { Navigate, useNavigate } from "react-router-dom";

const Purpose = () => {
  const [checked, setChecked] = useState({
    formCheck: false,
    formCheck2: false,
    formCheck3: false,
  });

  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCheckboxChange = (id) => {
    setChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSubmitPurpose = async (e) => {
    e.preventDefault();
    const selectedValues = Object.keys(checked)
      .filter((key) => checked[key])
      .map((key) => key.replace("formCheck", "").trim())
      .join(", "); // Concatenate selected values with a delimiter
    dispatch(purpose(selectedValues));
    await navigate("/verify");
  };

  if (!isAuthenticated) {
    return <Navigate to={"/new"} />;
  }

  return (
    <div className="container-fluid my-5">
      <div className="d-flex mb-2 align-items-center">
        <h6 className="text-danger mb-0 px-5">Dribbble</h6>
        <button className="btn btn-outline-danger btn-sm">
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-lg-8">
          <h3 className="fw-bold text-center">What brings you to Dribbble?</h3>
          <small className="text-center d-block text-secondary">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </small>
          <form onSubmit={handleSubmitPurpose}>
            <div className="row mt-5 pt-5">
              <div className="col-lg-4">
                <label htmlFor="formCheck" className="form-label">
                  <div
                    className={
                      checked.formCheck
                        ? "card border border-danger border-2"
                        : "card border border-2"
                    }
                  >
                    <div className="p-3">
                      <img
                        src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-3.png"
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-center">
                        I'm a designer looking to share my work
                      </h5>
                      {checked.formCheck ? (
                        <small className="text-center d-block text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus tempora asperiores animi ut
                          ratione velit itaque sed, quidem alias consequuntur.
                        </small>
                      ) : null}
                      <div className="form-check d-flex justify-content-center">
                        <input
                          type="checkbox"
                          id="formCheck"
                          className="form-check-input border-secondary-subtle rounded-5"
                          onChange={() =>
                            handleCheckboxChange(
                              "I'm a designer looking to share my work"
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-lg-4">
                <label htmlFor="formCheck2" className="form-label">
                  <div
                    className={
                      checked.formCheck2
                        ? "card border border-danger border-2"
                        : "card border border-2"
                    }
                  >
                    <div className="p-3">
                      <img
                        src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-2.png"
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-center">
                        I'm a looking to hire a designer
                      </h5>
                      {checked.formCheck2 ? (
                        <small className="text-center d-block text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sapiente harum blanditiis eum quaerat asperiores
                          in consequatur iste consectetur fuga. Placeat?
                        </small>
                      ) : null}
                      <div className="form-check d-flex justify-content-center">
                        <input
                          type="checkbox"
                          id="formCheck2"
                          className="form-check-input border-secondary-subtle rounded-5"
                          onChange={() =>
                            handleCheckboxChange(
                              "I'm a looking to hire a designer"
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-lg-4">
                <label htmlFor="formCheck3" className="form-label">
                  <div
                    className={
                      checked.formCheck3
                        ? "card border border-danger border-2"
                        : "card border border-2"
                    }
                  >
                    <div className="p-3">
                      <img
                        src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/values-1.png"
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-semibold text-center">
                        I'm a looking for design inspiration
                      </h5>
                      {checked.formCheck3 ? (
                        <small className="text-center d-block text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sapiente harum blanditiis eum quaerat asperiores
                          in consequatur iste consectetur fuga. Placeat?
                        </small>
                      ) : null}
                      <div className="form-check d-flex justify-content-center">
                        <input
                          type="checkbox"
                          id="formCheck3"
                          className="form-check-input border-secondary-subtle rounded-5"
                          onChange={() =>
                            handleCheckboxChange(
                              "I'm a looking for design inspiration"
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="row mt-5 d-flex justify-content-center py-3">
                <small className="text-center fs-6 fw-semibold">
                  Anything else? You can select multiple
                </small>
                <div className="col-3 my-3">
                  <div className="d-grid">
                    <button className="btn btn-danger">Finish</button>
                    <small className="text-center my-2 text-secondary">
                      Or Press RETURN
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
