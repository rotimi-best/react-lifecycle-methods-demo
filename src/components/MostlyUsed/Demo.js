import React, { Component } from "react";
import log from '../../helpers/log';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson: "Lifecycle Methods - Mostly Used Methods Demo",
      loggedIn: false
    };

    log('constructor');
  }

  /* ======================== MOUNTING = МОНТЕРОВАНИЕ======================= */
  componentDidMount() {
    log('componentDidMount');
  }

  /* ======================== UPDATING = ОБНОВЛЕНИЕ======================= */
  componentDidUpdate(prevProps, prevState, snapshot) {
    log('componentDidUpdate');
  }

  /* ======================== UNMOUNTING = РАЗМОНТЕРОВАНИЕ======================= */
  componentWillUnmount() {
    log('componentWillUnmount');
  }

  handleClick = () => {
    // Send API request with axios or fetch to authenticate user
    // then update the state
    log('handleClick');
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  render() {
    log('render');
    // console.log("Current state", this.state);

    return (
      <div>
        <h1>Topic: {this.state.lesson}</h1>
        <p>You are {this.state.loggedIn ? "" : "not"} logged in</p>
        <button onClick={this.handleClick}>
          {this.state.loggedIn ? "Logout 🔒" : "Login 🔓"}
        </button>
      </div>
    );
  }
}
