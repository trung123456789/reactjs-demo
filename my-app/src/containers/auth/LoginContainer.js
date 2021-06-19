import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loginId: '',
        password: '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.onChangeLoginId = this.onChangeLoginId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeLoginId(event) {
      this.setState ({
        loginId: event.target.value
      });
  }

  onChangePassword(event) {
    this.setState ({
        password: event.target.value
      });
  }

  onLogin() {
    const { loginId, password } = this.state;
    const { dispatch } = this.props;
    const loginInfo = {
      login_id: loginId,
      password,
    };
    dispatch(login(loginInfo));
  }

  render() {
    const { logined, message } = this.props;

    if (logined) {
      return <Redirect to="/top" />;
    }

    return (
      <div >
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.onLogin();
          }}
        >
          <Row className="justify-content-md-center header-login">
            <Form.Label>LOGIN</Form.Label>
          </Row>
          <Form.Group controlId="formBasicUserId">
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <Form.Label>User</Form.Label>
                <Form.Control value={this.state.loginId} onChange={this.onChangeLoginId} type="text" placeholder="User id" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <Form.Label>Password</Form.Label>
                <Form.Control value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Password" />
              </Col>
            </Row>
          </Form.Group>
          <Row className="justify-content-md-center msg-error">
            <Form.Label>{message}</Form.Label>
          </Row>
          <Row className="justify-content-md-center">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const { logined, message } = state.auth;
    return {
      logined,
      message
    };
  };

export default connect(mapStateToProps)(LoginContainer);
