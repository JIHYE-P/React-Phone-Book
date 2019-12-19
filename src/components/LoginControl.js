import React, {Component} from 'react';
import ReactDom from 'react-dom';

function UserGreeting(props){
  return <h1>Hello! Welcome ~</h1>
}
function GusetGreeting(props){
  return <h1>Please~ Sign Up!</h1>
}
function Greeting(props){
  const isLogged = props.isLogged
  if(isLogged){
    return <UserGreeting />
  }else{
    return <GusetGreeting />
  }
}
function ButtonControl(props){
  const isLogged = props.isLogged
  if(isLogged){
    return <button onClick={props.click}>Login</button>
  }else{
    return <button onClick={props.click}>Logout</button>
  }
}


class LoginControl extends Component {
  state = {
    isLogged: true
  }
  handleLogin = () => {
    this.setState({
      isLogged: true
    })
  }
  handleLogOut = () => {
    this.setState({
      isLogged: false
    })
  }
  render(){
    const isLogged = this.state.isLogged
    return(
      <div>
        <Greeting isLogged={false} />
        
      </div>
    )
  }
}

export default LoginControl