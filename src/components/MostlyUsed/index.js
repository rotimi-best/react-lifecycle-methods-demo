import React from "react";
import Demo from "./Demo";

export default class MostlUsed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent: true
    };

    console.log("Constructor in parent component");
  }

  handleClick = () => {
    this.setState({
      showComponent: !this.state.showComponent
    });
  };

  render() {
    console.log("Render in parent component");
    if (this.state.showComponent) {
      return (
        <div>
          <Demo />
          <button onClick={this.handleClick}>
            Remove Demo Component From Page
          </button>
        </div>
      );
    }

    return <button onClick={this.handleClick}>Mount Component</button>;
  }
}
