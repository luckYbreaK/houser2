import React from 'react';

export default function House(props) {
    
    const {id, name, address, city, state, zip} = props.house;
    return (
        <div className="house_wrapper">
            <button onClick={() => props.deleteFn(id)}>X</button>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zip}</p>
        </div>
    );
}