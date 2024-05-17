import { RESET_MODAL_TEXT, SET_MODAL_TEXT, SET_POST_MODAL_OFF, SET_POST_MODAL_ON } from "../actions"

const initialState = {
  active: false,
  text: "",
}

const addPostModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_MODAL_ON:
      return {
        ...state,
        active: true,
      }
    case SET_POST_MODAL_OFF:
      return {
        ...state,
        active: false,
      }

    case SET_MODAL_TEXT:
      return {
        ...state,
        text: action.payload,
      }

    case RESET_MODAL_TEXT:
      return {
        ...state,
        text: "",
      }

    default:
      return state
  }
}
export default addPostModalReducer
