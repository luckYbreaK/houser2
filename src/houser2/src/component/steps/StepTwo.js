import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateImageUrl } from '../../ducks/reducer'

class StepTwo extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         imageUrl: ""
    //     }
    // }

    // handleInput(val) {
    //     this.setState({ imageUrl: val });
    // }

    render() {
        const {imageUrl ,updateImageUrl} = this.props;
        return (
            <div>
                <div className="mid_wizard">
                    <div>
                        <h3>Image URL</h3>
                        <input 
                        type="text" 
                        onChange={(e) => updateImageUrl(e.target.value)} 
                        value={imageUrl} 
                        />
                    </div>
                </div>
                <div className="wizard_bottom">
                    <Link to="/wizard/step1">
                        <button>Previous Step</button>
                    </Link>
                    <Link to="/wizard/step3">
                        <button>Next Step</button>
                    </Link>
                </div>
            </div>

        );
    }
}

function mapStoreToProps(state) {
    return {
        imageUrl: state.imageUrl
    }
}

export default connect(mapStoreToProps, {updateImageUrl})(StepTwo);