import * as actions from '../actions/index';

export default function visibilityFilterReducer(state = 'SHOW_ALL', action){
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
