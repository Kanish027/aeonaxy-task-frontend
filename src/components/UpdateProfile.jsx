import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { updateProfile, userProfile } from "../actions/User";

const UpdateProfile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.update);

  const [location, setLocation] = useState(
    user && user.location ? user.location : ""
  );
  const [avatar, setAvatar] = useState(
    user && user.avatar && user.avatar.avatar_url !== ""
      ? user.avatar.avatar_url
      : null
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(avatar, location));
    await dispatch(userProfile());
    navigate("/purpose");
  };

  if (!isAuthenticated) {
    return <Navigate to={"/new"} />;
  }

  return (
    <div className="container-fluid my-5">
      <h6 className="text-danger px-5 mb-3">Dribbble</h6>
      <form onSubmit={handleUpdateProfile}>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <h3 className="fw-bold">Welcome! Let's create your profile</h3>
            <small className="text-secondary">
              Let others get ti know better! You can do this later
            </small>
            <div className="my-4 py-2">
              <h6 className="fw-bold">Add an avatar</h6>
              <div className="d-flex py-3 align-items-start gap-5">
                {avatar && avatar !== null ? (
                  <div>
                    <Avatar sx={{ width: 120, height: 120 }} src={avatar} />
                  </div>
                ) : (
                  <div className="p-5 border border-secondary-subtle border-1 rounded rounded-circle">
                    <i className="fa-solid fa-camera text-secondary px-1"></i>
                  </div>
                )}

                <div className="my-3">
                  <div>
                    <label
                      htmlFor="file-upload"
                      className="custom-file-upload"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="btn btn-sm border">Change Photo</div>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </div>
                  <small className="d-block my-2 text-secondary">
                    <i className="fa-solid fa-angle-right"></i> Or choose one of
                    our defaults
                  </small>
                </div>
              </div>
            </div>
            <div className="py-1">
              <h6 className="fw-bold mb-4">Add your location</h6>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control border-0 border-bottom rounded-0 border-secondary-subtle"
                  placeholder="Enter a location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <div className="row">
                  <div className="col-4">
                    <div className="d-grid">
                      <button className="btn btn-danger" disabled={isLoading}>
                        Next
                      </button>
                      <small className="text-center py-1 text-secondary">
                        or Press RETURN
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
