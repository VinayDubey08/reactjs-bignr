
//ye mostly class componets m use hota ha rendring ko rokne k liye aur
//agar purecomponets ko function m use karna hai to uske liye hooks hai useMemo

import React from 'react'

export class PureCompCls extends React.PureComponent{
    constructor()
    {
        super();
        // this.state={
        //     count:1
        // }

    }
    render()
    {
        console.log("rendring checking");
        return(
            <div>
                <h4>this is purecomponets in clas base..{this.state.count}</h4>
                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>update state</button> */}
            </div>
        )
    }
}