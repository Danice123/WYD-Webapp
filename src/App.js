import React from 'react';

import Auth from './AuthHandler';
import Login from './Login';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gettingSession: true,
      session: null,
      err: null
    };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ gettingSession: false, session: user }))
      .catch(err => this.setState({ gettingSession: false, error: err }));
  }

  render() {
    if (this.state.gettingSession) {
      return (<div /> );
    }
    
    if (this.state.error) {
      return (
        <div className="container">
          <div className="row" style={{ backgroundColor: "grey" }}>
            <div>
              <i className="fa fa-bars" style={{ fontSize: "30px", marginLeft: "15px", marginTop: "12px", marginRight: "15px", marginBottom: "12px" }}></i>
            </div>
            <div className="col"></div>
          </div>
          <div className="row col">
            <Login />
          </div>
        </div>
      );
    }
    
    console.log(this.state.session);
    return (
      <div className="container">
          <div className="row" style={{ backgroundColor: "grey" }}>
            <div>
              <i className="fa fa-bars" style={{ fontSize: "30px", marginLeft: "15px", marginTop: "12px", marginRight: "15px", marginBottom: "12px" }}></i>
            </div>
            <div className="col"></div>
          </div>
          <div className="row col">

          </div>
        </div>
    );
  }
}

export default App;
