import { combineReducers, configureStore } from "@reduxjs/toolkit";
import serchProfileReducer from "../reducers/searchMyProfileReducer";
import postReducers from "../reducers/postReducers";
import myProfileModalReducer from "../reducers/myProfileModalReducer";
import singleExperienceReducer from "../reducers/singleExperienceReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import jobsReducers from "../reducers/jobsReducers";

const rootReducer = combineReducers({
  profile: serchProfileReducer,
  profileModal: myProfileModalReducer,
  posts: postReducers,
  reducerModal: singleExperienceReducer,
  experinces: experiencesReducer,
  jobs: jobsReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
