import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }

    handleInput(type, val) {
        switch (type) {
            case "name":
                this.setState({ name: val });
            case "address":
                this.setState({ address: val });
            case "city":
                this.setState({ city: val });
            case "state":
                this.setState({ state: val });
            case "zip":
                this.setState({ zip: Number(val) });
        }
    }

    render() {
        
        return (
            <div className="wizard_wrapper">
                <div className="top">
                    <h1>Add New Listing</h1>
                    <div className="top_btn">
                        <Link to="/"><button className="btn_pink">Cancel</button></Link>
                    </div>
                </div>
                <div className="mid_wizard">
                    <div>
                        <h3>Property Name</h3>
                        <input type="text" onChange={ (e) => this.handleInput("name", e.target.value)}/>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <input type="text" onChange={ (e) => this.handleInput("address", e.target.value)}/>
                    </div>
                    <div className="city_wrapper">
                        <h3>City</h3>
                        <input type="text" onChange={ (e) => this.handleInput("city", e.target.value)}/>
                        <h3>State</h3>
                        <input type="text" onChange={ (e) => this.handleInput("state", e.target.value)}/>
                        <h3>Zip</h3>
                        <input type="text" onChange={ (e) => this.handleInput("zip", e.target.value)}/>
                    </div>
                </div>
            </div>
        );
    }
}