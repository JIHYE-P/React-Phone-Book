import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList '

class App extends Component {
  id = 1
  state = {
    information : [
      {
        id: 0,
        name: 'name',
        phone: 'phone'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        item => item.id === id
        ? {...item, ...data}
        : item
      )
    })
  }
  render(){
    const {information} = this.state
    return <React.Fragment>
      <PhoneForm onCreate={this.handleCreate} />
      <PhoneInfoList
        data={information}
        onRemove={this.handleRemove} 
        onUpdate={this.handleUpdate}
      />
    </React.Fragment>
  }
}

export default App