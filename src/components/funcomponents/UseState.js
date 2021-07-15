import React,{useState} from 'react'

export const UseState = () => {
    const[name,setName] = useState('Useefft')
    const[data,setData] = useState(0)
    
    return (
        <div>
            <h4>update number by click button{data}</h4>
            <button onClick={()=>setData(data+1)}>update State</button><br/> <br/>

            <h3>this is useEffect{name}</h3>
            <button onClick={()=>setName('function useEffects')}>update State</button>
        </div>
    )
}
