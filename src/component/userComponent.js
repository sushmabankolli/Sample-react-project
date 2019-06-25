import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginAction from '../action';


class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <div>

            </div>

        );
    }
}

function mapStateToProps(state, props) {
    return {
        signUpSuccess: state.login.signupSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        LoginAction: bindActionCreators(LoginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

//export default LoginComponent;