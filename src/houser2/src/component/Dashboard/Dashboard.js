import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House'

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }
    }

    render() {
        let mappedHouses = this.state.houses.map( (house, i) => {
            return(
                <div key={i}>
                    <p>Property Name: {house.name}</p>
                    <p>Address: {house.address}</p>
                    <p>City: {house.city}</p>
                    <p>State: {house.state}</p>
                    <p>Zip: {house.zip}</p>
                </div>
            );
        });
        return (
            <div className="dashboard_wrapper">
                <div className="top">
                    <h1>Dashboard</h1>
                    <div className="top_btn">
                        <Link to="/wizard"><button className="btn_green">Add New Property</button></Link>
                    </div>
                </div>
                <House />
            </div>
        );
    }
}