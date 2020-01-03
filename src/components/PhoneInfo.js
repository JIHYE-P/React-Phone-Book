import React, {Component} from 'react';

class PhoneInfo extends React.Component {
  static defaultProps = {
    id: 0,
    name: '이름',
    phone: '010-0000-0000'
  }
  render(){
    const style = {
      border: '1px solid #888',
      padding: '8px',
      margin: '8px'
    }
    const {id, name, phone} = this.props.info
    return <div key={key} style={style}>
      <div><b>{name}</b></div>
      <div>{phone}</div>
    </div>
  }
}

export default PhoneInfo;