import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson: "Lifecycle Methods - Rarely Used Methods Demo",
      loggedIn: false
    };

    console.log("1. Constructor - МОНТЕРОВАНИЕ");
    console.log("==============================");
  }

  /* ======================== MOUNTING = МОНТЕРОВАНИЕ======================= */
  static getDerivedStateFromProps(props, state) {
    console.log("2. Get derived state from props - МОНТЕРОВАНИЕ/ОБНОВЛЕНИЕ");
    console.log("==============================");

    // return {
    //     lesson: ":)",
    //     loggedIn: true
    // }

    // Update nothing
    return null;
  }

  componentDidMount() {
    console.log("4. Component did mount - МОНТЕРОВАНИЕ");
    console.log("==============================");
  }

  /* ======================== UPDATING = ОБНОВЛЕНИЕ======================= */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. Should component update - ОБНОВЛЕНИЕ");
    console.log("==============================");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("5. Should component update - ОБНОВЛЕНИЕ");
    console.log("==============================");

    const snapshot = "Some snapshot data";

    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update - ОБНОВЛЕНИЕ");
    console.log("snapshot: ", snapshot);
    console.log("==============================");
  }

  /* ======================== UNMOUNTING = РАЗМОНТЕРОВАНИЕ======================= */
  componentWillUnmount() {
    console.log("Component will unmount - РАЗМОНТЕРОВАНИЕ");
    console.log("==============================");
  }

  handleClick = () => {
    // Send API request with axios or fetch to authenticate user
    // then update the state
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  render() {
    console.log("3. Render - МОНТЕРОВАНИЕ/ОБНОВЛЕНИЕ");
    console.log("==============================");

    return (
      <div>
        <h1>Topic: {this.state.lesson}</h1>
        <p>You are {this.state.loggedIn ? "" : "not"} logged in</p>
        <button onClick={this.handleClick}>
          {this.state.loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
