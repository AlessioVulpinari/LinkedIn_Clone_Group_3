import {
  RESET_FORM_EXPERIENCE_MODAL,
  SET_EXPERIENCE_AREA,
  SET_EXPERIENCE_COMPANY,
  SET_EXPERIENCE_DESCRIPTION,
  SET_EXPERIENCE_END_DATE,
  SET_EXPERIENCE_ID,
  SET_EXPERIENCE_IMAGE,
  SET_EXPERIENCE_MODAL_OFF,
  SET_EXPERIENCE_MODAL_ON,
  SET_EXPERIENCE_ROLE,
  SET_EXPERIENCE_START_DATE,
  SET_FORM_EXPERIENCE_MODAL,
} from "../actions"

const initialState = {
  role: "",
  company: "",
  startDate: "",
  endDate: "",
  description: "",
  area: "",
  image: "",
  expId: "",
}

const singleExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCE_MODAL_ON:
      return {
        ...state,
        active: true,
      }

    case SET_EXPERIENCE_MODAL_OFF:
      return {
        ...state,
        active: false,
      }

    case SET_EXPERIENCE_ID:
      return {
        ...state,
        expId: action.payload,
      }

    case SET_EXPERIENCE_ROLE:
      return {
        ...state,
        role: action.payload,
      }

    case SET_EXPERIENCE_COMPANY:
      return {
        ...state,
        company: action.payload,
      }

    case SET_EXPERIENCE_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      }

    case SET_EXPERIENCE_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      }

    case SET_EXPERIENCE_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      }

    case SET_EXPERIENCE_AREA:
      return {
        ...state,
        area: action.payload,
      }

    case SET_EXPERIENCE_IMAGE:
      return {
        ...state,
        image: action.payload,
      }

    case RESET_FORM_EXPERIENCE_MODAL:
      return {
        ...state,
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
        expId: "",
      }

    case SET_FORM_EXPERIENCE_MODAL:
      return {
        ...state,
        role: action.payload.role,
        company: action.payload.company,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        description: action.payload.description,
        area: action.payload.area,
        image: action.payload.image,
      }

    default:
      return state
  }
}

export default singleExperienceReducer
