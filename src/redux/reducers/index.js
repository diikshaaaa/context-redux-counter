import { combineReducers } from 'redux';
// combineReducers function lets us split the reducer up to smaller reducers and combine them so we can use them in Redux.
import counterReducer from './counterReducer';

export default combineReducers({
    counterReducer,
})