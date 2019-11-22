import { combineReducers } from 'redux';
import placeholderReducer from './placeholderReducer';

const combinedReducer = combineReducers({
  placeholder: placeholderReducer
})

export default combinedReducer;