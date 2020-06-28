import React, { Component } from "react";
import log from '../../helpers/log';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson: "Lifecycle Methods - Rarely Used Methods Demo",
      loggedIn: false
    };

    log('constructor');
  }

  /* ======================== MOUNTING = МОНТЕРОВАНИЕ======================= */
  static getDerivedStateFromProps(props, state) {
    log('getDerivedStateFromProps');

    // return {
    //     lesson: ":)",
    //     loggedIn: true
    // }

    // Update nothing
    return null;
  }

  componentDidMount() {
    log('componentDidMount-r');
  }

  /* ======================== UPDATING = ОБНОВЛЕНИЕ======================= */
  shouldComponentUpdate(nextProps, nextState) {
    log('shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    log('getSnapshotBeforeUpdate');

    const snapshot = "Some snapshot data";

    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log('componentDidUpdate-r');
  }

  /* ======================== UNMOUNTING = РАЗМОНТЕРОВАНИЕ======================= */
  componentWillUnmount() {
    log('componentWillUnmount-r');
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

    return (
      <div>
        <h1>Topic: {this.state.lesson}</h1>
        <p>You are {this.state.loggedIn ? " in 🔓" : "out 🔒 "}</p>
        <button onClick={this.handleClick}>
          {this.state.loggedIn ? "🔒 Logout" : "🔓 Login"}
        </button>
      </div>
    );
  }
}
