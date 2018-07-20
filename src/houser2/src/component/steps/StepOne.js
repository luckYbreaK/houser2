import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer'

class StepOne extends Component {
    

    render() {
        const {name, address, city, state, zip, updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
        return (
            <div>
                <div className="mid_wizard">
                    <div>
                        <h3>Property Name</h3>
                        <input 
                        type="text" 
                        onChange={(e) => updateName(e.target.value)} 
                        value={name} 
                        />
                    </div>
                    <div>
                        <h3>Address</h3>
                        <input 
                        type="text" 
                        onChange={(e) => updateAddress(e.target.value)} 
                        value={address} 
                        />
                    </div>
                    <div className="city_wrapper">
                        <div>
                            <h3>City</h3>
                            <input 
                            type="text" 
                            onChange={(e) => updateCity(e.target.value)} 
                            value={city}
                            />
                        </div>
                        <div>
                            <h3>State</h3>
                            <input 
                            type="text" 
                            onChange={(e) => updateState(e.target.value)} 
                            value={state} 
                            />
                        </div>
                        <div>
                            <h3>Zip</h3>
                            <input 
                            type="text" 
                            onChange={(e) => updateZip(e.target.value)} 
                            value={zip} 
                            />
                        </div>
                    </div>
                </div>
                <div className="wizard_bottom">
                    <Link to="/wizard/step2">
                        <button className="btn_step">Next Step</button>
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
        zip: state.zip
    }
}

export default connect(mapStoreToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(StepOne);
// export default StepOne;