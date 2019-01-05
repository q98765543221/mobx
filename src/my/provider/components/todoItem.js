import React from 'react';

export class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {todo} = this.props;
        return (
            <div>
                <div>
                    <span style={{display: 'inline-block', width: '100px'}}>{todo.title}</span>
                    <span>{todo.completed ? '完成' : '未完成'}</span>
                </div>
            </div>
        )
    }
}