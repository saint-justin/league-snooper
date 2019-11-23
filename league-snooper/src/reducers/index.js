import { combineReducers } from 'redux';
import RGAPI_Calls from './RGAPI_Caller';

const combinedReducer = combineReducers({
  RGAPI_Calls: RGAPI_Calls
})

export default combinedReducer;