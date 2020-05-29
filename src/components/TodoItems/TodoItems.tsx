import React from 'react'
import { TODO } from 'Models'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type Props = {
    todos: TODO[],
    deleteTodo: (todo: TODO) => void;

}
const TodoItems: React.FC<Props> =({
    todos,
    deleteTodo
})=> {
    const listItems = todos.map(item => {
        return(
            <div className="todo-items" key={item.id}>
                <p>
                    {item.content}
                    <span>
                        <FontAwesomeIcon className="faicons" icon={'trash'}
                            onClick={() => deleteTodo(item)}
                        
                        />
                    </span>
                </p>
            </div>
        )
    })
    return(
         <div>{listItems}</div>
    )
}

export default TodoItems;