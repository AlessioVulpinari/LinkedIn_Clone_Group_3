import { combineReducers, configureStore } from "@reduxjs/toolkit";
import serchProfileReducer from "../reducers/searchMyProfileReducer";
import postReducers from "../reducers/postReducers";
import myProfileModalReducer from "../reducers/myProfileModalReducer";
import jobsReducers from "../reducers/jobsReducers";

const rootReducer = combineReducers({
  profile: serchProfileReducer,
  profileModal: myProfileModalReducer,
  posts: postReducers,
  jobs: jobsReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
