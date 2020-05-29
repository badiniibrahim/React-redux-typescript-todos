import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    FETCH_ALL_TODO
} from './actionTypes'

import {  ActionType, createAction} from 'typesafe-actions';
import { TODO } from 'Models'

const addTodo = createAction(ADD_TODO)<TODO>()
const deleteTodo = createAction(DELETE_TODO)<TODO>()

/*const fetchAllTodo = createAction(FETCH_ALL_TODO)<TODO[]>()
const editTodo = createAction(EDIT_TODO)<string>()
const deleteTodo = createAction(DELETE_TODO)<string>()*/

export type manageTodo = 
    | ActionType<typeof addTodo>
    | ActionType<typeof deleteTodo>;

    /*| ActionType<typeof fetchAllTodo>
    | ActionType<typeof editTodo>
    | ActionType<typeof deleteTodo>*/;

export { addTodo, deleteTodo }


