import { combineReducers, configureStore } from "@reduxjs/toolkit"
import serchProfileReducer from "../reducers/searchMyProfileReducer"
import postReducers from "../reducers/postReducers"
import myProfileModalReducer from "../reducers/myProfileModalReducer"
import singleExperienceReducer from "../reducers/singleExperienceReducer"
import experiencesReducer from "../reducers/experiencesReducer"

const rootReducer = combineReducers({
  profile: serchProfileReducer,
  profileModal: myProfileModalReducer,
  posts: postReducers,
  reducerModal: singleExperienceReducer,
  experinces: experiencesReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
