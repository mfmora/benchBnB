import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
    this.state = {username: "", password: ""};
  }

  redirect() {
    this.props.router.push('/')
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    let name = (this.props.formType === "/login" ? "Log in" : "Sign Up");
    let link_name = (this.props.formType === "/login" ? "Signup" : "Login");
    let link = (this.props.formType === "/login" ? "/signup" : "/login");
    return (
      <div onSubmit={this.handleSubmit}>
        <h2>{ name }</h2>
        <form>
          <label>
            Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
          <label>
            Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to={link}>{link_name}</Link>
      </div>
    );
  }
}

export default SessionForm;
