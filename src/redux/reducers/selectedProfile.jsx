import { SET_SELECTED_PROFILE } from "../actions"

const initialState = {
  content: null,
}

const selectedProfile = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PROFILE:
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state
  }
}

export default selectedProfile
