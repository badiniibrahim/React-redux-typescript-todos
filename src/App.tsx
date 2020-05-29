import React, { ChangeEvent } from 'react';
import './index.css';
import _ from 'lodash'
import { connect } from 'react-redux';
import { RootState } from './store/types'
import { addTodo, deleteTodo } from './_actions/todo.actions'

import CustomInput from './components/CustomInput'
import CustomButtom from './components/CustomButtom'
import TodoItems from './components/TodoItems/TodoItems'
import uuid from 'uuid-random';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

const mapStateToProps = (state: RootState) => ({
  todos: state.manageTodo.todos
});

const dispatchProps = {
  addTodo: addTodo,
  deleteTodo: deleteTodo
};

type Props = {} & ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {
    todoName: string
}

class App extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
        todoName: ""
    }
  }

  handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = _.get(e,'target.value', '')
      this.setState({todoName: value})
  }

  handleOnclick = () => {
    if(!_.isEmpty(this.state.todoName)){
          this.props.addTodo({
            content: this.state.todoName,
            id:  uuid()
        })
          this.setState({todoName: ""})
    }
  }

  render(){
    return(
      <div className="app">
        <div className="app__content">
          <div className="app__content__app">
            <CustomInput
                oninputChange={this.handleOnInputChange}
                value={this.state.todoName}
                placeholder={'Veuillez saisir votre texte'}/>

             <CustomButtom
                title={'Ajouter'}
                onClick={this.handleOnclick}
              />
          </div>

            <TodoItems todos={this.props.todos} deleteTodo={this.props.deleteTodo}/>
          
        </div>
      </div>
    )
  }



}

export default connect(mapStateToProps, dispatchProps)(App);
