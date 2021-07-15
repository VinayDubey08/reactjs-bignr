
import React, { useState } from 'react'


export function FormHandl() {
    const[name,setName] = useState('');
    const[tnc,setTnc] = useState(false); //becoz kisi n abhi isko selet nhi kiya h
    const[interset,setInterst] = useState('')
    function getFormData(e)
    {
        console.log(name,tnc,interset);
        e.preventDefault()
    }
    return (
        <div>
            <h3>this is form handle and data get in form</h3>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)}/><br /> <br />
                <select onChange={(e)=>setInterst(e.target.value)}>
                    <option>select options</option>
                    <option>delhi</option>
                    <option>mumbai</option>
                    <option>chenai</option>
                    <option>noida</option>
                </select><br /> <br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept TC</span><br /> <br />
                <button>Submit</button>
                <button>clear</button>
            </form>
        </div>
    )
}
