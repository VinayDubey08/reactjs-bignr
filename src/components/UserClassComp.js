import React, { Component } from 'react'



//second way to declare components


export  class UserSeconds extends React.Component{

    render()
    {
        return(
            <div>
                <h3>this is class components</h3>
            </div>
        )
    }
}

/*
both are same componets..
every class componets k andr render function likhna ha..
*/

export class UserClassComp extends Component{

    render()
    {
        return(
            <div>
                <h3>this is class another components</h3>
            </div>
        )
    }
}