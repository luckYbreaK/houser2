import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                break;
            case "address":
                this.setState({ address: val });
                break;
            case "city":
                this.setState({ city: val });
                break;
            case "state":
                break;
            case "zip":
                this.setState({ zip: Number(val) });
                break;
            default:
                break;
        }
    }

    handleClick() {
        const { name, address, city, state, zip } = this.state
        axios.post("/api/house", { name, address, city, state, zip }).then(res => {
            this.setState({
                name: "",
                address: "",
                city: "",
                state: "",
                zip: 0
            });
        });
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
                        <input type="text" onChange={(e) => this.handleInput("name", e.target.value)} />
                    </div>
                    <div>
                        <h3>Address</h3>
                        <input type="text" onChange={(e) => this.handleInput("address", e.target.value)} />
                    </div>
                    <div className="city_wrapper">
                        <div>
                            <h3>City</h3>
                            <input type="text" onChange={(e) => this.handleInput("city", e.target.value)} />
                        </div>
                        <div>
                            <h3>State</h3>
                            <input type="text" onChange={(e) => this.handleInput("state", e.target.value)} />
                        </div>
                        <div>
                            <h3>Zip</h3>
                            <input type="text" onChange={(e) => this.handleInput("zip", e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="wizard_bottom">
                    <Link to="/">
                        <button className="btn_green" onClick={() => this.handleClick()}>Complete</button>
                    </Link>
                </div>
            </div>
        );
    }
}