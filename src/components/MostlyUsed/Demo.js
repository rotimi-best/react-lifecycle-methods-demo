import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson: "Lifecycle Methods - Mostly Used Methods Demo",
      loggedIn: false
    };

    console.log("1. Constructor - МОНТЕРОВАНИЕ");
    console.log("==============================");
  }

  /* ======================== MOUNTING = МОНТЕРОВАНИЕ======================= */
  componentDidMount() {
    console.log("3. Component did mount - МОНТЕРОВАНИЕ");
    console.log("==============================");
  }

  /* ======================== UPDATING = ОБНОВЛЕНИЕ======================= */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("4. Component did update - ОБНОВЛЕНИЕ");
    console.log("==============================");
  }

  /* ======================== UNMOUNTING = РАЗМОНТЕРОВАНИЕ======================= */
  componentWillUnmount() {
    console.log("5. Component will unmount - РАЗМОНТЕРОВАНИЕ");
    console.log("==============================");
  }

  handleClick = () => {
    // Send API request with axios or fetch to authenticate user
    // then update the state
    console.log("Updating state..........");
    console.log("==============================");
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  render() {
    console.log("2. Render - МОНТЕРОВАНИЕ/ОБНОВЛЕНИЕ");
    // console.log("Current state", this.state);
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
