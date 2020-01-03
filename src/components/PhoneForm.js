import React, {Component} from 'react'

class PhoneForm extends React.Component {
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

    if(this.state.name == ''){
      alert('이름을 입력하세요')
    }else if(this.state.phone == '') {
      alert('휴대폰 번호를 입력하세요')
    }else{
      this.props.onCreate(this.state);
      this.setState({
        name: '',
        phone: ''
      })
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='이름'
        />
        <input 
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="휴대폰 번호"
        />
        <div>{this.state.name} {this.state.phone}</div>
        <button type="submit">등록</button>
      </form>
    )
  }
}

export default PhoneForm