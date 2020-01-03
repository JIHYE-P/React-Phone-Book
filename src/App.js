import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo';

class App extends Component{
  id= 1
  state = {
    info: []
  }
  handleCreate = (data) => {
    const {info} = this.state;
    this.setState({
      info: info.concat({id: this.id++, ...data})
    })
  }
  render(){
    const {info} = this.state
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfo />
      </div>
    )
  }
}

export default App;