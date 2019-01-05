import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('todoStore')
@observer
export class TodoFooter extends React.Component{
    constructor(props){
        super(props);
    }

    setFilter(filter){
        let {todoStore} = this.props;
        todoStore.setFilter(filter);
    }

    render(){
        let {todoStore} = this.props;
        return (
            <div>
                {todoStore.getVisiableTodosLen}
                <button onClick={this.setFilter.bind(this, 'active')}>未完成</button>
                <button onClick={this.setFilter.bind(this, 'completed')}>完成</button>
                <button onClick={this.setFilter.bind(this, 'all')}>所有</button>
            </div>
        )
    }
}