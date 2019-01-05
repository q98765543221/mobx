import TodoModel from '../models/todoModel';
import {observable, computed, action } from 'mobx';

export class TodoStore {
    todoModel = new TodoModel();
    @observable filter = 'all'; // active completed

    @action
    setFilter(filter) {
        this.filter = filter;
    }

    @computed
    get getVisiableTodos() {
        return this.todoModel.todos.filter(x => {
            switch (this.filter) {
                case 'active':
                    return !x.completed;
                case 'completed':
                    return x.completed;
                default:
                    return true
            }
        })
    }

    @computed
    get getVisiableTodosLen() {
        return this.getVisiableTodos.length;
    }
}