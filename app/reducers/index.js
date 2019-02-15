import { combineReducers } from 'redux'
import appReducer from './appReducer'
import restaurantsReducer from './restaurantsReducer'

export default combineReducers({
    appReducer,
    restaurantsReducer
})