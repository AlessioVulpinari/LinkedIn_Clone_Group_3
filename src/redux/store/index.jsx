import { combineReducers, configureStore } from "@reduxjs/toolkit";
import serchProfileReducer from "../reducers/searchMyProfileReducer";
import postReducers from "../reducers/postReducers";

const rootReducer = combineReducers({
  profile: serchProfileReducer,
  posts: postReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
