import React from 'react'

export const EventClickWithFun = () => {
    var data = 'vinay dubey'
    function Msg()
    {
        data="change name"
        alert(data)
        
    }
    return (
        <div>
            <h6>{data}</h6>
            <button onClick={Msg}>Click Me</button>
            <button onClick={()=>Msg()}>Click Me Arrow fun</button>
            <button onClick= {()=> alert('this is alert using arrow fun')}>Using Arrow fun</button>
        </div>
    )
}

//export default EventClickWithFun
