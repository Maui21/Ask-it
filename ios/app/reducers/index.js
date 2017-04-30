import { combineReducers } from 'redux'
import pollReducer from './poll'

const rootReducer = combineReducers({
  //auth: require('./auth').default,
  // polls: require('./poll').default
  polls: pollReducer
})
export default rootReducer
