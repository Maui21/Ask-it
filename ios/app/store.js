import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import pollReducer from './reducers/poll'

const store = createStore(
  pollReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

export default store
