import React, {Component} from 'react';

class Counter extends Component{
  state = {
    number: 0
  }
  handlePlus = () => {
    this.setState(
      ({number}) => ({
        number: number+1
      })
    )
    this.props.onCreate('plus~~~~')
  }
  handleMinus = () => {
    this.setState(
      ({number}) => ({
        number: (number > 0) ? number-1 : number
      })
    )
    this.props.onCreate('minus~~~~')
  }
  render(){
    return(
      <div>
        <h1>Value : {this.state.number}</h1>
        <button onClick={this.handlePlus}>plus</button>
        <button onClick={this.handleMinus}>minus</button>
      </div>
    )
  }
}

export default Counter;