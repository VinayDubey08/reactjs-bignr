import React,{useState} from 'react'

export function PropsFunction(p){
    return(
        //ye with arrow function bnke bhi call ho jayegaa
        <div>
            <h3>props help to send parents..</h3>
            <button onClick={p.data}>click me</button>
        </div>
    )
}