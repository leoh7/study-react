import input from './input';
import todos from './toodos';
import { combineReducers } from 'redux';

export default combineReducers({
  input,
  todos
});