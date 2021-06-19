import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MainContainers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { logined } = this.props;
        if (!logined) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <h1>Hello main</h1>
            </div>
        )
    };
}


const mapStateToProps = (state, ownProps) => {
    const { logined, message } = state.auth;
      return {
        logined,
        message
      };
    };

export default connect(mapStateToProps)(MainContainers);