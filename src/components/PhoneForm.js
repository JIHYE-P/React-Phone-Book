import React, {Component} from 'react'

class PhoneForm extends React.Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // [e.target.name] Computed property names 
    })
  }
  handelSubmit = (e) => {
    // 페이지 로딩 방지
    e.preventDefault();
    // 상태값을 onCreate를 통해 부모에게 전달
    this.props.onCreate(this.state)
    // 상태값 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render(){
    return (
      <form onSubmit={this.handelSubmit}>
        <input 
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="이름" 
        />
        <input 
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="휴대폰 번호"
        />
        <button type="submit">등록</button>
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    )
  }
}

export default PhoneForm;