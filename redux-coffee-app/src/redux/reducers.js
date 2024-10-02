import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_ERROR } from './types'

const initialState = {
  coffeeList: [],
  error: null,
}

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        coffeeList: action.payload,
        error: null,
      }
    case FETCH_COFFEE_ERROR:
      return {
        ...state,
        coffeeList: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default coffeeReducer
