import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House'

export default class Dashboard extends Component {
    render() {
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