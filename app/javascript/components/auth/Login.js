import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      registrationErrors: 'Wrong credentials.'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        'http://localhost:2999/sessions',
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true } //gives permission, no error no function without
      )
      .then(response => {
        console.log('res from login', response);
        if (response.data.logged_in) {
          //COMMENT UPDATE: logged_in is from the Rails side sessions_controller- not in intellisense
          //this is where React talks to Rails for the session cookie
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log('login error', error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
