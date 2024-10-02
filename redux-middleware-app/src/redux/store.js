import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { actionTypeLogger, payloadLogger } from './middlewares'

const store = createStore(
  rootReducer,
  applyMiddleware(actionTypeLogger, payloadLogger)
)

export default store
