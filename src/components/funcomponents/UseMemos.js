//iska use mostly perfomance ko inhence k liye karte hai functional components m..

import React,{useState,useMemo} from 'react'

export  const UseMemos = () => {
    const[data1,setData]= useState(0)
    const[data2,setData2]= useState(10)
    //useMemo ek call back function leta hh
    const useFunMemo = useMemo(function checkMul()
    {
         console.log("check mul");
         return data1*2
     },[data1])

    //es problam ko rokne k liye hum usemomo ka use karte hai
    //kyo ki ye function baar baar call ho raha ha kisi bhi action pe
    // function checkMul()
    // {
    //     console.log("check mul");
    //     return data1*2
    // }

    return (
        <div>
            <h3>{useFunMemo}</h3>
            <h3>{data1}</h3>
            <h3>{data2}</h3>
            <h3>useMemo hooks in react js</h3>
            <button onClick={()=>setData(data1+1)}>update Data1</button>
            <button onClick={()=>setData2(data2*5)}>update Data1</button>
        </div>
    )
}
