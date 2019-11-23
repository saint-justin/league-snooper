import { combineReducers } from 'redux';
import RGAPI_Calls from './RGAPI_Caller';
import Region from './Region';

const combinedReducer = combineReducers({
  RGAPI_Calls,
  Region
})

export default combinedReducer;