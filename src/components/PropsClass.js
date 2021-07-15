import React,{Component} from 'react'

export class PropsClass extends Component{
    render()
    {
        return(
            <div>
                <h4>class prpos name : {this.props.name}</h4>
            </div>
        )
    }
}
