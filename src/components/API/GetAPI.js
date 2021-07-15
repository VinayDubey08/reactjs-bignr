//api get in help of react js

import React, { useEffect, useState } from 'react'

export const GetAPI = () => {
    const [data, setDat] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((results) => {
            results.json().then((resp) => {
                console.log(resp);
                setDat(resp)
            })
        })
    }, [])
    console.log(data);
    return (
        <div>
            <h4>Get API Mthods..</h4>
            <table border="2">
                <tbody>
                <tr>
                    <td>userid</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>email</td>
                </tr>
                </tbody>
                
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            
                        </tr>)
                }
            </table>
        </div>
    )
}
