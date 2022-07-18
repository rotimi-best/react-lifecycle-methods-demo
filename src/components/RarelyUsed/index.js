import React from "react";
import Demo from "./Demo";
import lifeCycleMethodImage from "../../assets/lcm.jpeg";

export default class RarelyUsed extends React.Component {
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
          <div style={{ borderTop: '1px solid black', marginTop: 20}}>
            <img alt="lifeCycleMethodImage" className="life-cycle-method-image" src={lifeCycleMethodImage}></img>
          </div>
        </div>
      );
    }

    return <button onClick={this.handleClick}>Mount Component</button>;
  }
}
