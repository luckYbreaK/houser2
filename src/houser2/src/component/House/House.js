import React from 'react';

export default function House(props) {
    
    const {id, name, address, city, state, zip, img, mortgage, rent} = props.house;

    console.log(props.house);
    
    return (
        <div className="house_wrapper">
            <img src={img === "" ? "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg" : img} />
            <button onClick={() => props.deleteFn(id)}>X</button>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zip}</p>
            <p>Monthly Mortgage: {mortgage}</p>
            <p>Desired Rent: {rent}</p>
        </div>
    );
}