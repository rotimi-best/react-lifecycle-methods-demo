import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 10,
      counter: 1
    }
    console.log('Constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    setInterval(() => {
      console.log('\n\ninterval')
      this.setState({
        age: this.state.age + 1
      });
    }, 1000)
  }

  updateCounter = () => {
    console.log('update time')
    this.setState({
      counter: this.state.counter + 1
    });
  }

  updateAge = () => {
    console.log('updateAge')
    setTimeout(() => {
      console.log('setting state')
      this.setState({
        age: this.state.age + 1
      });
    }, 1000)
  }


  render() {
    console.log('render\n\n')
    const { age, counter } = this.state;

    // VERY BAD
    // this.updateAge();
    return (
      <div>
        <p>Age: {age}</p>
        <p>Counter: {counter}</p>
        <button onClick={this.updateCounter}>Update counter</button>
      </div>
    )
  }
}
