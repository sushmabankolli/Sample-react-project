import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Message } from 'semantic-ui-react'
import LoginAction from '../action';


class DashboardComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
			test:'hi'
        }
    }

    componentWillMount() {
        //this.props.createAction.getEvent();
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
    };




    render() {
        return (
            <center>
                <br></br>
                <br></br>
                <br></br>
                <div className="col-md-8">
                    <Message
                        icon='inbox'
                        header='U logged in as User'
                    />
                    <Message
                        icon='inbox'
                        header='User'
                        content='Site in construction.'
                    />
                </div>
            </center>

        );
    }
}

// function mapStateToProps(state, props) {
//   return {
//     signUpSuccess: state.login.signupSuccess
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     LoginAction: bindActionCreators(LoginAction, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default DashboardComponent;