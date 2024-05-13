import { combineReducers, configureStore } from "@reduxjs/toolkit"
import serchProfileReducer from "../reducers/searchProfileReducer"

const rootReducer = combineReducers({
  profile: serchProfileReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
