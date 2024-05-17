import { combineReducers, configureStore } from "@reduxjs/toolkit"
import serchProfileReducer from "../reducers/searchMyProfileReducer"
import postReducers from "../reducers/postReducers"
import myProfileModalReducer from "../reducers/myProfileModalReducer"
import singleExperienceReducer from "../reducers/singleExperienceReducer"
import experiencesReducer from "../reducers/experiencesReducer"
import jobsReducers from "../reducers/jobsReducers"
import addPostModalReducer from "../reducers/addPostModalReducer"
import selectedProfile from "../reducers/selectedProfile"
import selectedProfileExp from "../reducers/selectedProfileExp"

const rootReducer = combineReducers({
  profile: serchProfileReducer,
  user: selectedProfile,
  profileModal: myProfileModalReducer,
  posts: postReducers,
  postModal: addPostModalReducer,
  reducerModal: singleExperienceReducer,
  experinces: experiencesReducer,
  userExperinces: selectedProfileExp,
  jobs: jobsReducers,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store
