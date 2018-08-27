import { combineReducers } from 'redux'
import CryptoReducer from './modules/CryptoReducer'

export default combineReducers({
  crypto: CryptoReducer
})
