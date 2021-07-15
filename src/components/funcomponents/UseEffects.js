import React,{useEffect,useState} from 'react'


//state and props using this for condintion
export const UseEffects = (props) => {
    const[data,setData] = useState(0)
    console.warn(props.name);
    const[results,setResults] = useState('hey')
        useEffect((props)=>{
            console.warn("useEffects here! :)");
            
        },[data]) //yha pe condition ka use kar sakte ha perticular hooks ko chlne k liye
        useEffect(()=>{
            console.warn(props.name);
        },[props.name])
    return (
        <div>
            <h1>useEffects results: {data}</h1>
            <button onClick={()=>setData(data+1)}>update</button><br/> <br/>
            <h2>useEffect results data: {results}</h2>
            <button onClick={()=>setResults('success useEffects')}>update Results</button>
        </div>
    )
}
