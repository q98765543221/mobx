import React from 'react';
import { inject, observer, Provider} from 'mobx-react';


@inject('todoStore')
@observer
export class TodoEntry extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {todoStore, testStore} = this.props;
        return (
            <div>
                <input></input>
            </div>
        )
    }
}