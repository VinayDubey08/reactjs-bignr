import React from 'react'

export const ArrayList = () => {
    const DataStudent = ['vinay', 'lata', 'priya', 'parul']
    //using map function retrive data
    // DataStudent.map((item) => {
    //     console.warn(item);
    // })
    const Objects = [
        {name:"vinay",email:"abc@gmail.com"},{name:"lata",email:"lata@gmail.com"},{name:"parul",email:"parul@gmail.com"}
    ]
    return (
        <div>
            <h4>how to array manage and display list </h4>
            {
                DataStudent.map((data) => 
                    <h5>My name is : {data}</h5>
                )
            }
            {
                Objects.map((info)=>
                <h3>All data :{info.name},{info.email}</h3>)
            }

        </div>
    )
}
