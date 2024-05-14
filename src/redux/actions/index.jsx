// MY_PROFILE
export const MY_PROFILE_END_POINT = "https://striveschool-api.herokuapp.com/api/profile/me"
export const SET_MY_PROFILE_ERROR_ON = "SET_MY_PROFILE_ERROR_ON"
export const SET_MY_PROFILE_ERROR_OFF = "SET_MY_PROFILE_ERROR_OFF"
export const SET_MY_PROFILE_LOADING_ON = "SET_MY_PROFILE_LOADING_ON"
export const SET_MY_PROFILE_LOADING_OFF = "SET_MY_PROFILE_LOADING_OFF"
export const GET_MY_PROFILE = "GET_MY_PROFILE"
export const ID_PROFILE_END_POINT = "https://striveschool-api.herokuapp.com/api/profile/"

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
