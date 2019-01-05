import {observable, action} from 'mobx';

export default class TodoModel{
    @observable.shallow todos = [];
    @observable todo;

    @action
    add(item){
        this.todos.push(item);
    }

    @action
    setCurrent(item){
        this.todo = item;
    }

    @action
    query(){
        this.todos = [
            {id: 1, title: 'work', completed: true},
            {id: 2, title: 'rest', completed: false},
            {id: 3, title: 'rest2', completed: true},
            {id: 4, title: 'rest3', completed: true},
            {id: 5, title: 'rest4', completed: false},
        ];
    }

}