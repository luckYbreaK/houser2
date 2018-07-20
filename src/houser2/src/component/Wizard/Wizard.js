import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    render() {
        return (
            <div className="wizard_wrapper">
                <div className="top">
                    <h1>Add New Listing</h1>
                    <div className="top_btn">
                        <Link to="/"><button className="btn_pink">Cancel</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}