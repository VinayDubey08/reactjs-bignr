import React,{Component} from 'react'
export class ReactLyf extends Component{
    constructor(props){
        super();
        //this is important topic becoz every state declare in constr becoz sabse phle constr call hota ha then documents html.
        console.log(props.name,props.email);
        this.state={
            data: 'vinay'
        }
    }
    render(){
        return(
            <div>class componentes: {this.state.data}</div>
        )
    }
}