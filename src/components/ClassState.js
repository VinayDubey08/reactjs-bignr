import React,{Component} from 'react'

export class ClassState extends Component{
    //state using constr
    constructor(){
        super();
        this.state={
            //data:'vinay'
            data:0
        }
    }
    updateData()
    {
        //this.setState({data:'react'})
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <div>
                <h3>this is class base state/{this.state.data}</h3>
                <button onClick={()=>this.updateData()}>update data</button>
            </div>
        )
    }
}
//export default ClassState;