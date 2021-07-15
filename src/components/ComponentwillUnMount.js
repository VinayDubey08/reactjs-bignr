
import React,{Component} from 'react'

export class ComponentwillUnMount extends Component{
    constructor(){
        super();
    }
    componentWillUnmount()
    {
       console.warn("call will unmounts");
    }
    render()
    {
        return(
            <div>
                <h4>componentWillUnmount</h4>
            </div>
        )
    }
}
