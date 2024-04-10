import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUserRequest: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    registerUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    registerUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    userProfileRequest: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    userProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    userProfileFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutUserRequest: (state) => {
      state.isLoading = true;
      state.isAuthenticated = true;
    },
    logoutUserSuccess: (state, action) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.message = action.payload;
    },
    logoutUserFailure: (state, action) => {
      state.isLoading = true;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    purposeRequest: (state) => {
      state.isLoading = true;
    },
    purposeSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    purposeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  userProfileRequest,
  userProfileSuccess,
  userProfileFailure,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserFailure,
  purposeRequest,
  purposeSuccess,
  purposeFailure,
} = userSlice.actions;

export default userSlice.reducer;
