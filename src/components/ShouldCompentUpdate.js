//it's most important part's of react js..
/*

ye mostly confrm karta ha ki porps ko update karna ha ya nahi same as state 
k liye aur render() methods also 


*/
import React,{Component} from 'react'

export class ShouldCompentUpdate extends Component{
    constructor()
    {
        super();
        this.state={
            data:1
        }
    }
    shouldComponentUpdate()
    {
        //ye by defalut rendering ko block kar deta hai..agar return true kiya to state update hogi
        //ye shouldComponents Update jo ha vo rendring ko block karta hai.
        console.warn(this.state.data);
       // return true;
        //condition ki help se
        if (this.state.data>5 && this.state.data<10) {
            return true;
            //application ki speed increese k liye use karte hai
        }
    }
    render()
    {
        return(
            <div>
                <h3>THis is ShouldCompentUpdate{this.state.data}</h3>
                {/* <button onClick={()=>{this.setState({data:this.state.data+1})}}>update</button> */}
                <button onClick={()=>{this.setState({data:this.state.data+1})}}>update</button>
            </div>
        )
    }
}