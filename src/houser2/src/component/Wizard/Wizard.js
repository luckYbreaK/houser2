import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import StepThree from '../steps/StepThree';
import { connect } from 'react-redux';
import { resetState } from '../../ducks/reducer';

class Wizard extends Component {

    render() {
        const { resetState } = this.props;

        return (
            <div className="wizard_wrapper">
                <div className="top">
                    <h1>Add New Listing</h1>
                    <div className="top_btn">
                        <Link to="/">
                            <button className="btn_pink" onClick={resetState}>Cancel</button>
                        </Link>
                    </div>
                </div>
                <Route path="/wizard/step1" component={StepOne} />
                <Route path="/wizard/step2" component={StepTwo} />
                <Route path="/wizard/step3" component={StepThree} />
            </div>
        );
    }
}

export default connect(null, { resetState })(Wizard);