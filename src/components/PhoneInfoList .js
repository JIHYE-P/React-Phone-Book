import React, {Component} from 'react'
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends React.Component {
  static defaultProps = {
    data: []
  }
  render(){
    const {data} = this.props;
    const list = data.map(info => (<PhoneInfo key={info.id} info={info} />))
    return(
      {list}
    ) 
  }
}

export default PhoneInfoList
