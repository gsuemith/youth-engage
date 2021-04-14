import { LOG_IN, LOG_OUT } from '../actions'

const initialState = {
  isLoggedIn: false,
  user: null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case LOG_IN: return {
    ...state, isLoggedIn: true, user: payload
  }

  case LOG_OUT: return {
    ...state, isLoggedIn: false, user: null
  }

  default:
    return state
  }
}

export default reducer;