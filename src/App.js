import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Results from './components/Results';



class App extends Component {
  constructor(){
    super();

    this.state = {
      input: '',
      task: []
    }
  }

  // updateInput(event){
  //   console.log(event.target.value)
  //   this.setState({
  //     newTask: this.state.value
  //   })
    
  // }
  updateInput(val) {
    //setState takes an object as an argument
    // setState is the ONLY way that you can update state to new values
    // the object should have at least one key value pair
    // the key should be the property on state that you want to update
    // value should be the value that you want it to be updated to

    this.setState({ input: val })
  }

  newTaskUpdate(){
    this.setState({
      task: this.state.input
    }) 
  }


  render() {
    return (
      <div className="App">
      <h1>Does this work?!</h1>
        <input type="text"
        newtask={this.state.input}
        onChange={(event)=> this.updateInput(event.target.value)}
        value={this.state.input}
        placeholder="Create a new task"/>
        <Button /*onClick={()=> newTaskUpdate()}*/ name='Add' type='create'/>
        <Results />
      </div>
    );
  }
}

export default App;
