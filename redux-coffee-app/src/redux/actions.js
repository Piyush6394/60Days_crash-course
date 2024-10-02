import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_ERROR } from './types'

export const fetchCoffee = (sortOrder) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://doczele.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=${sortOrder}`
      )
      const data = await response.json()
      dispatch({ type: FETCH_COFFEE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_COFFEE_ERROR, payload: error })
    }
  }
}
