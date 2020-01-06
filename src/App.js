import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList '
// import PhoneInfo from './components/PhoneInfo'

class App extends Component {
  id = 1
  state = {
    information : [
      {
        id: 0,
        name: '이름',
        phone: '010-0000-0000'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
    console.log(this.state)
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(item => item.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state
    this.setState({
      information: information.map(
        item => id === item.id
        ? {...item, ...data} // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
        : item // 기존의 값을 그대로 유지
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