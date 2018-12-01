import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push('/feature');
        });
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <h3>Welcome</h3>
                <div className="row">
                    <form onSubmit={handleSubmit(this.onSubmit)} className="col s4">
                        <fieldset>
                            <Field
                                placeholder="Email"
                                name="email"
                                type="text"
                                component="input"
                                autoComplete="none"
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                placeholder="Password"
                                name="password"
                                type="password"
                                component="input"
                                autoComplete="none"
                            />
                        </fieldset>
                        <div>{this.props.errorMessage}</div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.errorMessage};
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signin'})
)(Signin);
