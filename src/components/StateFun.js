import React,{ useState } from 'react';



export const StateFun = () => {
    //let data ="raw data"
    const [data,setData] = useState('vinay') //destrucing using array
    function updateData(){
           setData("dubey")
           //same ase value ko update karne ko {data+1}
    }
    return (
        <div>
            <h2>this is state example:{data}</h2>
            <button onClick={updateData}>update data using state</button>
        </div>
    )
}
//re rendring ka mtlb compontes dubra se chla hh update hone k baad using state..