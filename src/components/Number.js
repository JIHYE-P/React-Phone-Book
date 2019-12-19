import React from "react";
import ReactDOM from "react-dom";

function ListItems(props){
return <li>{props.value}</li>
}

function NumberList(props){
  const numbers = props.numbers
  const listItems = numbers.map((number) => 
    <ListItems key={number.toString()} value={number} />
  )
  return <ul>{listItems}</ul>
}

class Numbers extends React.Component {
  render(){
    const numbers = [1,2,3,4,5]
    return(
      <NumberList numbers={numbers} />
    )
  }
}

export default Numbers
