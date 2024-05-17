// MY_PROFILE
export const MY_PROFILE_END_POINT = "https://striveschool-api.herokuapp.com/api/profile/me"
export const SET_MY_PROFILE_ERROR_ON = "SET_MY_PROFILE_ERROR_ON"
export const SET_MY_PROFILE_ERROR_OFF = "SET_MY_PROFILE_ERROR_OFF"
export const SET_MY_PROFILE_LOADING_ON = "SET_MY_PROFILE_LOADING_ON"
export const SET_MY_PROFILE_LOADING_OFF = "SET_MY_PROFILE_LOADING_OFF"
export const GET_MY_PROFILE = "GET_MY_PROFILE"
export const ID_PROFILE_END_POINT = "https://striveschool-api.herokuapp.com/api/profile/"

//POSTS
export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const ADD_POST = "ADD_POST"
export const SET_POSTS_ERROR_ON = "SET_POSTS_ERROR_ON"
export const SET_POSTS_ERROR_OFF = "SET_POSTS_ERROR_OFF"
export const SET_POSTS_LOADING_ON = "SET_POSTS_LOADING_ON"
export const SET_POSTS_LOADING_OFF = "SET_POSTS_LOADING_OFF"

// POST MODAL
export const SET_POST_MODAL_ON = "SET_POST_MODAL_ON"
export const SET_POST_MODAL_OFF = "SET_POST_MODAL_OFF"
export const SET_MODAL_TEXT = "SET_MODAL_TEXT"

// FORM
export const SET_PROFILE_MODAL_OFF = "SET_PROFILE_MODAL_OFF"
export const SET_PROFILE_MODAL_ON = "SET_PROFILE_MODAL_ON"
export const SET_FORM_PROFILE_MODAL = "SET_FORM_PROFILE_MODAL"
export const SET_FORM_NAME = "SET_FORM_NAME"
export const SET_FORM_SURNAME = "SET_FORM_SURNAME"
export const SET_FORM_EMAIL = "SET_FORM_EMAIL"
export const SET_FORM_USERNAME = "SET_FORM_USERNAME"
export const SET_FORM_BIO = "SET_FORM_BIO"
export const SET_FORM_TITLE = "SET_FORM_TITLE"
export const SET_FORM_AREA = "SET_FORM_AREA"

// EXPERIENCE ARRAY
export const SET_EXPERIENCES = "SET_EXPERIENCES"
export const ADD_EXPERIENCE = "ADD_EXPERIENCE"
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE"

// SINGLE EXPERIENCE
export const SET_EXPERIENCE_MODAL_ON = "SET_EXPERIENCE_MODAL_ON"
export const SET_EXPERIENCE_MODAL_OFF = "SET_EXPERIENCE_MODAL_OFF"
export const SET_EXPERIENCE_ROLE = "SET_EXPERIENCE_ROLE"
export const SET_EXPERIENCE_COMPANY = "SET_EXPERIENCE_COMPANY"
export const SET_EXPERIENCE_START_DATE = "SET_EXPERIENCE_START_DATE"
export const SET_EXPERIENCE_END_DATE = "SET_EXPERIENCE_END_DATE"
export const SET_EXPERIENCE_DESCRIPTION = "SET_EXPERIENCE_DESCRIPTION"
export const SET_EXPERIENCE_AREA = "SET_EXPERIENCE_AREA"
export const SET_EXPERIENCE_IMAGE = "SET_EXPERIENCE_IMAGE"
export const SET_FORM_EXPERIENCE_MODAL = "SET_FORM_EXPERIENCE_MODAL"
export const RESET_FORM_EXPERIENCE_MODAL = "RESET_FORM_EXPERIENCE_MODAL"
export const SET_EXPERIENCE_ID = "SET_EXPERIENCE_ID"

//JOBS
export const GET_ALL_JOBS = "GET_ALL_JOBS"
export const SET_JOBS_ERROR_ON = "SET_JOBS_ERROR_ON"
export const SET_JOBS_ERROR_OFF = "SET_JOBS_ERROR_OFF"
export const SET_JOBS_LOADING_ON = "SET_JOBS_LOADING_ON"
export const SET_JOBS_LOADING_OFF = "SET_JOBS_LOADING_OFF"
export const SEARCH_JOBS = "SEARCH_JOBS"

// UTILITY

export const formatDate = (date) => {
  const year = date.slice(0, 4)
  const month = date.slice(5, 7)
  const day = date.slice(8, 10)
  const hour = date.slice(date.indexOf("T") + 1, date.indexOf("T") + 6)
  return `${day}/${month}/${year} alle ${hour}`
}

export const getProfileExperiences = (id = "6641c494167e530015fa697f") => {
  return async (dispatch) => {
    try {
      const response = await fetch(ID_PROFILE_END_POINT + id + "/experiences", {
        // body: JSON.stringify(obj),
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })

      if (response.ok) {
        const experiences = await response.json()

        dispatch({ type: SET_EXPERIENCES, payload: experiences })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const postProfileExperience = (id = "6641c494167e530015fa697f", obj) => {
  return async (dispatch) => {
    try {
      const response = await fetch(ID_PROFILE_END_POINT + id + "/experiences", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })

      if (response.ok) {
        const experiences = await response.json()

        dispatch({ type: ADD_EXPERIENCE, payload: experiences })
        dispatch({ type: RESET_FORM_EXPERIENCE_MODAL })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({ type: SET_EXPERIENCE_MODAL_OFF })
    }
  }
}

export const modifyProfileExperience = (id = "6641c494167e530015fa697f", obj) => {
  console.log(obj.expId)
  return async (dispatch) => {
    try {
      const response = await fetch(ID_PROFILE_END_POINT + id + "/experiences/" + obj.expId, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })

      if (response.ok) {
        // const experiences = await response.json()

        // dispatch({ type: ADD_EXPERIENCE, payload: experiences })
        dispatch({ type: RESET_FORM_EXPERIENCE_MODAL })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({ type: SET_EXPERIENCE_MODAL_OFF })
      dispatch(getProfileExperiences())
    }
  }
}

export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_MY_PROFILE_LOADING_ON })

      const response = await fetch(MY_PROFILE_END_POINT, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })

      if (response.ok) {
        const profile = await response.json()
        dispatch({ type: GET_MY_PROFILE, payload: profile })
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
        })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      dispatch({ type: SET_MY_PROFILE_ERROR_ON, payload: error.message })
    } finally {
      dispatch({ type: SET_MY_PROFILE_LOADING_OFF })
    }
  }
}

export const getAllPostsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_POSTS_LOADING_ON })
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })
      if (response.ok) {
        const posts = await response.json()
        dispatch({ type: GET_ALL_POSTS, payload: posts })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      dispatch({ type: SET_POSTS_ERROR_ON, payload: error.message })
    } finally {
      dispatch({ type: SET_POSTS_LOADING_ON })
    }
  }
}

export const newPost = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_POSTS_LOADING_ON })
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })
      if (response.ok) {
        const post = await response.json()
        dispatch({ type: ADD_POST, payload: post })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      dispatch({ type: SET_POSTS_ERROR_ON, payload: error.message })
    } finally {
      dispatch({ type: SET_POSTS_LOADING_ON })
      dispatch({ type: SET_POST_MODAL_OFF })
      dispatch(getAllPostsAction())
    }
  }
}

export const changeMyProfile = (obj) => {
  console.log(obj)
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
      })

      if (response.ok) {
        console.log("PUT")
        dispatch(getMyProfile())
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({ type: SET_PROFILE_MODAL_OFF })
    }
  }
}

export const getAllJobsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_JOBS_LOADING_ON })
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzQ5NDE2N2U1MzAwMTVmYTY5N2YiLCJpYXQiOjE3MTU1ODYxOTYsImV4cCI6MTcxNjc5NTc5Nn0.E4rFzec_PCvcUXZGUjj_lOZjXWSmTMzgHKFcZMkg-wg",
        },
      })
      if (response.ok) {
        const jobs = await response.json()
        dispatch({ type: GET_ALL_JOBS, payload: jobs })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      dispatch({ type: SET_JOBS_ERROR_ON, payload: error.message })
    } finally {
      dispatch({ type: SET_JOBS_LOADING_ON })
    }
  }
}
