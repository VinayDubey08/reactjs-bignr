import React,{useState} from 'react'

export function GetInptVal() {
    const[data,setName] = useState()
    const[print,setPrint] =useState(false)
    function getData(val)
    {
        setName(val.target.value)
        console.log(data);
        setPrint(false)
    }
    return (
        <div>
            {
                print?
                <h3>hi :{data}</h3>
                :null
            }
            {/* <h3>hi :{data}</h3> */}
            <input type="text" placeholder="enter your name" onChange={getData}></input>
            <button onClick={()=>setPrint(true)}> data print after click</button>
        </div>
    )
}
//value get karkee data ko api m save karnaa..