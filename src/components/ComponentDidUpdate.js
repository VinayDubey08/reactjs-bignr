import React,{Component} from 'react'

export class ComponentDidUpdate extends Component{
    constructor(){
        super();
        
        console.warn("constrt");
        this.state={
           // name: "vinay"
           counter :0
        }
    }
    componentDidUpdate(preProps,preState,snapshot)
    {
        
        //console.warn("this is upate did mounts",preState);//iska mostly use hota condition k liye ki previous k sath match karna hai..
        //condiotn
        console.warn("component did mounts",preState.counter,this.state.counter);
        //same as porps ko bhi kar ksate ha
        //updateDidMount m state ko update bhi kar sakte ha
        // if (preState.counter===this.state.counter) {
        //     alert("data is same")
        // }


        //isko condtional ki help se use kar sakte hai
        // if (this.state.counter<=10) {
        //     this.setState({counter:this.state.counter+1})
        // }

        //api call krwa sakte ha but condtional
    }
    render(){
        console.warn("this is render");
        return(
            <div>
                <h5>this is update did MOunt previous state{this.state.counter}</h5>
                {/* <button onClick={()=>this.setState({counter:this.state.counter+1})}>update</button> */}
                <button onClick={()=>this.setState({counter:1})}>update</button>

            </div>
        )
    }
}