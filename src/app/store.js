import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import updateReducer from "../features/updateProfile/updateSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    update: updateReducer,
  },
});

export default store;
