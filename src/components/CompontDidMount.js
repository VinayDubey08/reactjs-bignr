import React, { Component } from 'react'

export class CompontDidMount extends Component{
    constructor(props){
        super();
        console.log("constructor");
        //console.log(this.props.name);
    }
    componentDidMount()
    {
        console.log("didmounts");
        //console.log(this.props.name);
    }
    render()
    {
        console.log("render");
        
        return(
            <div>
                <h5>this is components Did Mount</h5>
            </div>
        )
    }
}
//mostly use iska api call karne m hota mtlb ye jab chalega jab documents bilkul ready ho jaye..