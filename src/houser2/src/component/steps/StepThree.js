import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, resetState } from '../../ducks/reducer'

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
        const { name, address, city, state, zip, img, mortgage, rent } = this.props
        axios.post("/api/house", { name, address, city, state, zip, img, mortgage, rent }).then(res => {
            this.props.resetState();
        });
    }

    render() {
        const { mortgage, rent, updateMortgage, updateRent } = this.props;
        return (
            <div>
                <div className="mid_wizard">
                    <div>
                        <h3>Recommended Rent: {mortgage * 1.25}</h3>
                    </div>
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
                        <button className="btn_step">Previous Step</button>
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
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStoreToProps, { updateMortgage, updateRent, resetState })(StepThree);