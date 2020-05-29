import { Reducer } from 'redux'
import { getType } from 'typesafe-actions';
import * as actions  from '../_actions/todo.actions'
import { TODO } from 'Models'

interface TodoState {
    todos: TODO[]
}

const initialState = {
    todos: []
}

type Actions = actions.manageTodo

const manageTodo: Reducer<TodoState, Actions> = (
    state = initialState,
    action: Actions
) => {
    switch(action.type){
        case getType(actions.addTodo): {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }

        case getType(actions.deleteTodo): {
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.payload.id)
            }
        }

        /*case getType(actions.editTodo): {
            return {}
        }

        case getType(actions.fetchAllTodo): {
            return {}
        }*/

        default:
            return { ...state }
    }
}


export default manageTodo;