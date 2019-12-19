import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-1111-2222'
      },
      {
        id: 1,
        name: '김동수',
        phone: '010-2222-3333'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  render(){
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information} />
      </div>
    )
  }
}

export default App;