import React,{Component} from 'react';

export class RanderClassComp extends Component{
    render()
    {
        //how to check props recive by parents compo
        console.log(this.props);
        return(
            <div>
                <h3>this is rander methods..{this.props.name}</h3>
            </div>
        )
    }
}
//rander methods 3 baar update hota ha 1.jab projects run hota ha 2. jab props update hota hai 3. jab state update hota ha tab..