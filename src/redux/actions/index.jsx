// MY_PROFILE
export const MY_PROFILE_END_POINT = "https://striveschool-api.herokuapp.com/api/profile/me";
export const SET_MY_PROFILE_ERROR_ON = "SET_MY_PROFILE_ERROR_ON";
export const SET_MY_PROFILE_ERROR_OFF = "SET_MY_PROFILE_ERROR_OFF";
export const SET_MY_PROFILE_LOADING_ON = "SET_MY_PROFILE_LOADING_ON";
export const SET_MY_PROFILE_LOADING_OFF = "SET_MY_PROFILE_LOADING_OFF";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const ID_PROFILE_END_POINT = "https://striveschool-api.herokuapp.com/api/profile/";

//POSTS
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const SET_POSTS_ERROR_ON = "SET_POSTS_ERROR_ON";
export const SET_POSTS_ERROR_OFF = "SET_POSTS_ERROR_OFF";
export const SET_POSTS_LOADING_ON = "SET_POSTS_LOADING_ON";
export const SET_POSTS_LOADING_OFF = "SET_POSTS_LOADING_OFF";

// FORM
export const SET_PROFILE_MODAL_OFF = "SET_PROFILE_MODAL_OFF";
export const SET_PROFILE_MODAL_ON = "SET_PROFILE_MODAL_ON";
export const SET_FORM_PROFILE_MODAL = "SET_FORM_PROFILE_MODAL";
export const SET_FORM_NAME = "SET_FORM_NAME";
export const SET_FORM_SURNAME = "SET_FORM_SURNAME";
export const SET_FORM_EMAIL = "SET_FORM_EMAIL";
export const SET_FORM_USERNAME = "SET_FORM_USERNAME";
export const SET_FORM_BIO = "SET_FORM_BIO";
export const SET_FORM_TITLE = "SET_FORM_TITLE";
export const SET_FORM_AREA = "SET_FORM_AREA";

export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_MY_PROFILE_LOADING_ON });

      const response = await fetch(MY_PROFILE_END_POINT, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      });

      if (response.ok) {
        const profile = await response.json();
        dispatch({ type: GET_MY_PROFILE, payload: profile });
        dispatch({
          type: SET_FORM_PROFILE_MODAL,
          payload: {
            name: profile.name,
            surname: profile.surname,
            email: profile.email,
            username: profile.username,
            title: profile.title,
            bio: profile.bio,
            area: profile.area,
          },
        });
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request");
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized");
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required");
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden");
        }
        if (response.status === 404) {
          throw new Error("404: Not Found");
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed");
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable");
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required");
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout");
        }
        if (response.status === 500) {
          throw new Error("500: Server Error");
        }
        throw new Error("Generic Fetch Error");
      }
    } catch (error) {
      dispatch({ type: SET_MY_PROFILE_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: SET_MY_PROFILE_LOADING_OFF });
    }
  };
};

export const getAllPostsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_POSTS_LOADING_ON });
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      });
      if (response.ok) {
        const posts = await response.json();
        dispatch({ type: GET_ALL_POSTS, payload: posts });
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request");
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized");
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required");
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden");
        }
        if (response.status === 404) {
          throw new Error("404: Not Found");
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed");
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable");
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required");
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout");
        }
        if (response.status === 500) {
          throw new Error("500: Server Error");
        }
        throw new Error("Generic Fetch Error");
      }
    } catch (error) {
      dispatch({ type: SET_POSTS_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: SET_POSTS_LOADING_ON });
    }
  };
};

export const changeMyProfile = (obj) => {
  console.log(obj);
  return async (dispatch) => {
    try {
      const response = await fetch(ID_PROFILE_END_POINT, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      });

      if (response.ok) {
        console.log("PUT");
        dispatch(getMyProfile());
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request");
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized");
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required");
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden");
        }
        if (response.status === 404) {
          throw new Error("404: Not Found");
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed");
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable");
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required");
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout");
        }
        if (response.status === 500) {
          throw new Error("500: Server Error");
        }
        throw new Error("Generic Fetch Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: SET_PROFILE_MODAL_OFF });
    }
  };
};
