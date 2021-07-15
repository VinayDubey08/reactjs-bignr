import React from 'react'

export const PropsFun = (p) => {
    return (
        <div>
            <h2>this is props {p.name}</h2>
            <h2>this is props {p.other.address}</h2>
            <h2>this is props {p.other.mobile}</h2>
        </div>
    )
}
