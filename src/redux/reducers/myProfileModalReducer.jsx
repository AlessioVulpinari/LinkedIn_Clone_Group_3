import {
  SET_FORM_AREA,
  SET_FORM_BIO,
  SET_FORM_EMAIL,
  SET_FORM_NAME,
  SET_FORM_PROFILE_MODAL,
  SET_FORM_SURNAME,
  SET_FORM_TITLE,
  SET_FORM_USERNAME,
  SET_PROFILE_MODAL_OFF,
  SET_PROFILE_MODAL_ON,
} from "../actions"

const initialState = {
  active: false,
  name: "",
  surname: "",
  email: "",
  username: "",
  title: "",
  bio: "",
  area: "",
}

const myProfileModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_MODAL_ON:
      return {
        ...state,
        active: true,
      }

    case SET_PROFILE_MODAL_OFF:
      return {
        ...state,
        active: false,
      }

    case SET_FORM_NAME:
      return {
        ...state,
        name: action.payload,
      }

    case SET_FORM_SURNAME:
      return {
        ...state,
        surname: action.payload,
      }

    case SET_FORM_EMAIL:
      return {
        ...state,
        email: action.payload,
      }

    case SET_FORM_USERNAME:
      return {
        ...state,
        username: action.payload,
      }

    case SET_FORM_BIO:
      return {
        ...state,
        bio: action.payload,
      }

    case SET_FORM_TITLE:
      return {
        ...state,
        title: action.payload,
      }

    case SET_FORM_AREA:
      return {
        ...state,
        area: action.payload,
      }

    case SET_FORM_PROFILE_MODAL:
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        username: action.payload.surname,
        bio: action.payload.bio,
        title: action.payload.title,
        area: action.payload.area,
      }

    default:
      return state
  }
}

export default myProfileModalReducer
