import axios from "axios";
import {
  logoutUserFailure,
  logoutUserRequest,
  logoutUserSuccess,
  purposeFailure,
  purposeRequest,
  purposeSuccess,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
  userProfileFailure,
  userProfileRequest,
  userProfileSuccess,
} from "../features/user/userSlice";
import {
  updateProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
} from "../features/updateProfile/updateSlice";

const createUser = (name, username, email, password) => async (dispatch) => {
  try {
    dispatch(registerUserRequest());

    const { data } = await axios.post(
      "/api/api/v1/user/new",
      {
        name: name,
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(data.response);
    dispatch(registerUserSuccess(data.response));
  } catch (error) {
    console.log(error);
    dispatch(registerUserFailure(error.response.data.message));
    console.log(error.response.data.message);
  }
};

const userProfile = () => async (dispatch) => {
  try {
    dispatch(userProfileRequest());

    const { data } = await axios.get("/api/api/v1/user/user", {
      withCredentials: true,
    });

    dispatch(userProfileSuccess(data.user));
  } catch (error) {
    dispatch(userProfileFailure(error.response.data.message));
  }
};

const logoutUser = () => async (dispatch) => {
  try {
    dispatch(logoutUserRequest());

    const { data } = await axios.get("/api/api/v1/user/logout");

    console.log(data);

    dispatch(logoutUserSuccess(data.message));
  } catch (error) {
    dispatch(logoutUserFailure());
  }
};

const updateProfile = (avatar, location) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());

    const { data } = await axios.put(
      "/api/api/v1/user/update",
      {
        avatar: avatar,
        location: location,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(data);

    dispatch(updateProfileSuccess());
  } catch (error) {
    dispatch(updateProfileFailure(error.response.data.message));
  }
};

const purpose = (selectedValues) => async (dispatch) => {
  try {
    dispatch(purposeRequest());

    const { data } = await axios.post(
      "/api/api/v1/user/purpose",
      {
        purpose: selectedValues,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(data);

    dispatch(purposeSuccess());
  } catch (error) {
    dispatch(purposeFailure(error.response.data.message));
  }
};

export { createUser, userProfile, logoutUser, updateProfile, purpose };
