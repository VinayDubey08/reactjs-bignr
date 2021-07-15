import React,{useState} from 'react'


export function HideShowData()
{
    const[data,setData] = useState(true)
    return(
        <div>
            {
                data?
                <h1>hi</h1>
                :null
            }
            
            {/* <button onClick={(()=>setData(false))}>HideData</button>
            <button onClick={(()=>setData(true))}>ShowData</button> */}
            {/* we are using toggels in react using hooks */}
            <button onClick={()=>setData(!data)}>toggele</button>
        </div>
    )
}
