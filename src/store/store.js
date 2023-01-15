// import React from "react";

// import counterReducer from "../features/counter/counterSlice";

import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer1";

export default configureStore({
  reducer: reducer,
});
