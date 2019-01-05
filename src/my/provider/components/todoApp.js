import React from 'react';
import { inject, observer, Provider} from 'mobx-react';
import { TodoEntry } from './todoEntry';
import { TodoList } from './todoList';
import { TodoFooter } from './todoFooter';
import DevTool from 'mobx-react-devtools';

@inject('todoStore')
@observer
export class TodoApp extends React.Component{
    constructor(props){
        super(props);
    }

    queryTodo = () => {
        let {todoStore} = this.props;
        todoStore.todoModel.query();
    }

    render(){
        return (
                <div>
                    <DevTool />
                    <button onClick={this.queryTodo}>查询</button>
                    <TodoEntry></TodoEntry>
                    <TodoList></TodoList>
                    <TodoFooter></TodoFooter>
                </div>
        )
    }
}