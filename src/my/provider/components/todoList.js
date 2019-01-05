import React from 'react';
import { observer, inject} from 'mobx-react';
import { TodoItem} from './todoItem';

@inject('todoStore')
@observer
export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let { todoStore } = this.props;
        let {getVisiableTodos} = todoStore;
        
        return (
            <div>
                {
                    getVisiableTodos.map((x, i) => (
                        <TodoItem key={x.id} todo={x}></TodoItem>
                    ))
                }
            </div>
        )
    }
}