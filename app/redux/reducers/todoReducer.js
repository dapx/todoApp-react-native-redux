import * as actions from '../actions/index';

/*
Apenas dividimos a responsabilidade
Nessa função vai trabalhar com um todo de cada vez
O argumento state em ADD_TODO virá undefined pois não será
trabalhado com o estado da store.
Em TOGGLE_TODO temos uma comparação em que
o id do state é diferente do id do todo para toggle.
Isso porque é passado um único todo no state através de um
map. Isso porque é comparado todo por todo até que o id corresponda
ao id do todo.
*/
function todo(state = {}, action){
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case actions.TOGGLE_TODO:
      if (state.id !== action.id){
        return state;
      }
      /*
      Concatena o state junto do complete.
      Igual a isso:
      */
      return {
        ...state,
        completed: !state.completed
      }

      /*
      return Object.assign({}, state, {
        completed: !state.completed
      });
      */
    default:
      return state;
  }
}

export default function todosReducer(state = [], action){
  switch (action.type){
    case actions.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case actions.TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
}
