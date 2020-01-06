import React, { Component } from 'react'

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: '이름',
      phone: '010-0000-0000'
    }
  }
  state = {
    editing: false,
    name: '',
    phone: ''
  }
  handleRemove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id)
  }
  handleToggleEdit = () => {
    const {id, name, phone} = this.props.info
    const {onUpdate} = this.props
    const {editing} = this.state

    if(!editing){
      this.setState({
        editing: true,
        name: name,
        phone: phone
      })
    }else{
      onUpdate(id, {
        name: this.state.name,
        phone: this.state.phone
      })
      this.setState({
        editing: !editing
      })
    }
  }
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }
  // componentDidUpdate(prevProps, prevState) {
  //   const {info, onUpdate} = this.props
  //   if(!prevState.editing && this.state.editing ){
  //     this.setState({
  //       name: info.name,
  //       phone: info.phone
  //     })
  //   }
  //   if(prevState.editing && !this.state.editing) {
  //     onUpdate(info.id, {
  //       name: this.state.name,
  //       phone: this.state.phone
  //     })
  //   }
  // }
  render(){
    const style = {
      border: '1px solid #888',
      padding: '10px',
      marginBottom: '10px'
    }
    const {editing} = this.state;
    if(editing) {
      return <div style={style} className='phoneInfo'>
        <div>
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
        </div>
        <button onClick={this.handleToggleEdit}>적용</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    }else{
      const {name, phone} = this.props.info;
      return <div style={style} className='phoneInfo'>
        <div>{name} / {phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    }
  }
}

export default PhoneInfo