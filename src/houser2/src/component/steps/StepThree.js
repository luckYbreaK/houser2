import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgage, updateRent } from '../../ducks/reducer'

class StepThree extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         mortgage: 0,
    //         rent: 0
    //     }
    // }

    // handleInput(type, val) {
    //     switch (type) {
    //         case "mortgage":
    //             this.setState({ mortgage: val });
    //             break;
    //         case "rent":
    //             this.setState({ rent: val });
    //             break;
    //         default:
    //             break;
    //     }
    // }

    handleClick() {
        const { name, address, city, state, zip } = this.state
        axios.post("/api/house", { name, address, city, state, zip }).then(res => {
            this.clearInputs();
        });
    }

    clearInputs() {
        this.setState({
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        });
    }

    render() {
        const {mortgage, rent, updateMortgage, updateRent} = this.props;
        return (
            <div>
                <div className="mid_wizard">
                    <div>
                        <h3>Monthly Mortgage Amount</h3>
                        <input 
                        type="text" 
                        onChange={(e) => updateMortgage(e.target.value)} 
                        value={mortgage} 
                        />
                    </div>
                    <div>
                        <h3>Desired Monthly Rent</h3>
                        <input 
                        type="text" 
                        onChange={(e) => updateRent(e.target.value)} 
                        value={rent} 
                        />
                    </div>
                </div>
                <div className="wizard_bottom">
                    <Link to="/wizard/step2">
                        <button>Previous Step</button>
                    </Link>
                    <Link to="/">
                        <button className="btn_green" onClick={() => this.handleClick()}>Complete</button>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStoreToProps(state) {
    return {
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStoreToProps, {updateMortgage, updateRent})(StepThree);