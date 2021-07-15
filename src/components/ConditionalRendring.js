import React,{useState} from 'react'


export function ConditionalRendring(){
    const[login, setLogin] = useState(false) //true
    return(
        <div>
            {login?<h3>welcome to vinay</h3>:<h3>welcome to guest</h3>}
            <h1>this is ConditionalRendring func</h1>
        </div>
    )
}