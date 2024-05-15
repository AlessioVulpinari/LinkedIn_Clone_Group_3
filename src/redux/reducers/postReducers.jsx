import { GET_ALL_POSTS, SET_POSTS_ERROR_ON, SET_POSTS_LOADING_ON } from "../actions";
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_POSTS_LOADING_ON:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_POSTS_ERROR_ON:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postReducers;
