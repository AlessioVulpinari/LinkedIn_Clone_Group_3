import { ADD_EXPERIENCE, SET_EXPERIENCES } from "../actions"

const initialState = {
  content: [],
}

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      }

    case ADD_EXPERIENCE:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    // case REMOVE_EXPERIENCE:
    //   return {
    //     ...state,
    //     content: state.content.filter((experienceId) => experienceId !== action.payload),
    //   }

    default:
      return state
  }
}

export default experiencesReducer
