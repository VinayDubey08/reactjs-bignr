import React from 'react'
import './App.css';
//import {PropsClass} from './components/PropsClass'
import {PureCompCls} from './components/PureCompCls'
export default class App2 extends React.Component{
    constructor(){
        super();
        this.state={
            //show: true
            count :1
        }
    }
    render(){
        return(
            <div>
            <PureCompCls count={this.state.count}/>
               
            </div>
        )
    }
}