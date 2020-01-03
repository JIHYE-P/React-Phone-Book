import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'

class App extends Component {
  id = 1
  state = {
    info: [
      {
        id: 0,
        name: 'name',
        phone: '010-0000-0000'
      }
    ]
  }
  handelCreate = (data) => {
    const {info} = this.state;
    this.setState({
      info: info.concat({id: this.id++, ...data})
    })
  }
  render(){
    const {info} = this.state
    return <>
      <PhoneForm onCreate={this.handelCreate} />
      {JSON.stringify(info)}
    </>
  }
}

export default App;