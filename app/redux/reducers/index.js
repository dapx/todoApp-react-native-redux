import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
import visibilityFilterReducer from './visibilityFilter'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});
