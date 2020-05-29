import { combineReducers } from 'redux'
import manageTodo from '../_reducers/todo.reducer'

const rootReducer = combineReducers({
    manageTodo
})

export default rootReducer