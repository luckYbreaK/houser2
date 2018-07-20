import React from 'react';

export default function House(props) {
    console.log("props",props.house);
    
    const {name, address, city, state, zip} = props.house;
    return (
        <div className="house_wrapper">
            <button>X</button>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zip}</p>
        </div>
    );
}