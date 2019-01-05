import React from 'react';
import { Provider } from 'mobx-react';
import { TodoApp } from './components/todoApp';
import { TodoStore } from './stores/todoStore';

export class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.todoStore = new TodoStore();
    }

    render(){
        return (
            <Provider todoStore={this.todoStore}>
                <TodoApp></TodoApp>
            </Provider>
        )
    }
}