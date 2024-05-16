import { GET_ALL_JOBS, SET_JOBS_ERROR_ON, SET_JOBS_LOADING_ON } from "../actions";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_JOBS_LOADING_ON:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_JOBS_ERROR_ON:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default jobsReducers;
