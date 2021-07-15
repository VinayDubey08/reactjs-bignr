import React from 'react'

export const ChildToParent = (p) => {
    //const info ="data send by child"
    const info = {name: 'vino',email: 'abc@gmail.com'}
    return (
        <div>
            <h4>this is data send child to parents </h4>
            <button onClick={()=>p.data(info)}>Click me</button>
        </div>
    )
}
