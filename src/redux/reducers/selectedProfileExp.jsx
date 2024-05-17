import { SET_USER_EXPERIENCES } from "../actions"

const initialState = {
  content: [],
}

const selectedProfileExp = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state
  }
}

export default selectedProfileExp
