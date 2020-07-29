import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import Login from './components/Login';
import fire from './config/fire';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<BrowserRouter><Main /></BrowserRouter>) : <Login />}
      </div>
    );
  }
}

export default App;
