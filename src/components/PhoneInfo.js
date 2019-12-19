import React, {Component} from 'react'

class PhoneInfo extends React.Component {
  static defaultProps = {
    info: {
      id: 0,
      name: '이름',
      Phone: '010-0000-0000'
    }
  }
  render(){
    const style = {
      border: '1px solid #333',
      padding: '8px',
      margin: '8px'
    }
    const {name, phone, id} = this.props.info
    return(
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
    )
  }
}

export default PhoneInfo