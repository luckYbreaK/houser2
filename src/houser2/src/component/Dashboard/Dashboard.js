import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }

        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }

    getHouses() {
        axios.get("/api/houses").then(res => {
            this.setState({
                houses: res.data
            });
        });
    }

    deleteHouse(id) {
        axios.delete(`/api/house/${id}`).then( res => {
            this.getHouses();
        })
    }

    render() {
        
        let mappedHouses = this.state.houses.map((house, i) => {
            return (
                <div key={i}>
                    <House house={house} deleteFn={this.deleteHouse}/>
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
                {mappedHouses}
            </div>
        );
    }
}