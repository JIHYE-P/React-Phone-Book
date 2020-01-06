import React, { Component } from 'react'

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state)
    this.setState({
      name: '',
      phone: ''
    })
  }
  render(){
    return <React.Fragment>
      <form onSubmit={this.handleSubmit} className='phoneForm'>
        <input 
          type='text'
          name='name'
          placeholder='이름'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          name='phone'
          placeholder='휴대폰 번호'
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button type='submit'>등록</button>
      </form>
    </React.Fragment>
  }
}

export default PhoneForm