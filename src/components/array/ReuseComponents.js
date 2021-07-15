import React,{ReactDOM} from 'react'
import {ReuseComp1} from './ReuseComp1'

export const ReuseComponents = () => {
    const user = [
        {name:'vinay',address:'mumbai',mobile:23659},
        {name:'lata',address:'noida',mobile:25636},
        {name:'parul',address:'delhi',mobile:213654 },
        {name:'pooja',address:'ghaziabd',mobile:52145  },
        {name:'dolly',address:'gurugaon',mobile:965847}
    ]
    return (
        <div>
            <h3>ReuseComponents </h3>
            {/* <ReuseComp1 />
            {
                user.map((data,i)=>
                <h3>{data.name}</h3>
                )
            } */}
            {
                user.map((data,i)=>
                <ReuseComp1 item ={data}/> //send data another componets using props
                )
            }
        </div>
    )
}


















