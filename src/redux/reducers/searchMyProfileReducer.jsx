import {
  GET_MY_PROFILE,
  SET_MY_PROFILE_ERROR_OFF,
  SET_MY_PROFILE_ERROR_ON,
  SET_MY_PROFILE_LOADING_OFF,
  SET_MY_PROFILE_LOADING_ON,
} from "../actions"

const initialState = {
  content: null,
  isLoading: false,
  hasError: false,
  errorMsg: "",
}

const serchMyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      }

    case SET_MY_PROFILE_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      }

    case SET_MY_PROFILE_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      }

    case SET_MY_PROFILE_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMsg: action.payload,
      }

    case SET_MY_PROFILE_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMsg: "",
      }

    default:
      return state
  }
}

export default serchMyProfileReducer
