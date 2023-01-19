//configure redux store
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer1";

export default configureStore({
  reducer: reducer,
});
