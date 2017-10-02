import {combineReducers} from 'redux';
import data from './reducer-data';
import whoConnected from './reducer-login';

const allReducers = combineReducers({
  data: data,
  whoConnected: whoConnected
});

export default allReducers;
