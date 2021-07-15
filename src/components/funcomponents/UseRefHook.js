


import React,{useRef} from 'react'

//import React from 'react'

export const UseRefHook = () => {
    let inputPro = useRef(null)

    function handleData()
    {
        inputPro.current.value=(500)
        inputPro.current.style.color="blue"
        inputPro.current.style.display="none"
        //inputPro.current.style.display="show"
    }
    return (
        <div>
            <h3>UseREf in function components</h3>
            <input type="text" ref={inputPro}/>
            <button onClick={()=>handleData()}>handletask</button>
        </div>
    )
}
