import { combineReducers, configureStore } from "@reduxjs/toolkit"
import serchProfileReducer from "../reducers/searchMyProfileReducer"
import myProfileModalReducer from "../reducers/myProfileModalReducer"

const rootReducer = combineReducers({
  profile: serchProfileReducer,
  profileModal: myProfileModalReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
