import { combineReducers } from 'redux'
import appReducer from './appReducer'
import appServiceReducer from './appServiceReducer'

export default combineReducers({
    appReducer,
    appServiceReducer
})