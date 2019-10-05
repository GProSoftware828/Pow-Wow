import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Registration from './auth/Registration';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    };
  }

  render() {
    return (
      <div className="app">
        <h2>It's rendering!</h2>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={'/'}
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route
              exact
              path={'/dashboard'}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
