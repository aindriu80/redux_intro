import {Map } from 'immutable';
import { tassign } from "tassign";
import { INCREMENT } from "./actions";
export interface IAppState {
  counter: number;
  // messaging?: {
  //   newMessages: number;
  // };
}

export const INITIAL_STATE: IAppState = {
  counter: 0
  // messaging: {
  //   newMessages: 5
  // }
  // };
};

class TodoActions{
  constructor(private state, private action){

  }
  addTodo(){

  }
}
function addTodo(state, action){
  var newTodo = {id: state.todos.length +1, title:action}
  return tassign(state, {
    todos: state.todos.concat(newTodo),
    lastUpdate:new Date()
  });
}

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
  var actions = new TodoActions(state, action);

  switch (action.type) {
    case ADD_TODO: return actions.addTodo();
  
    case INCREMENT:
    
      // return { counter: state.counter + 1 };
      // return Object.assign({}, state, {counter: state.counter + 1});
      // return tassign(state, { counter: state.counter + 1 });
      return state.set('counter', state.get('counter')+);
  }
  return state;
}
