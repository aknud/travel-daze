import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Results from './components/Results';
//import axios from 'axios';



class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }
  // componentDidMount() {
  //   axios.get('./api/tasks').then(response => {
  //     console.log(1111111, response)
  //     this.setState({
  //       results: response.name
  //     })
  //   })
  // }

  updateInput(val) {
    this.setState({ input: val })
  }

  // sendInput = () => {
  //   this.state.input
  //   axios.get('./api/tasks').then()
  // }


  // newTaskUpdate(){
  //   this.setState({
  //     task: this.state.input
  //   }) 
  // }


  render() {
    return (
      <div className="App">
        <h1>Task List</h1>
        <input type="text"
          newtask={this.state.input}
          onChange={(event) => this.updateInput(event.target.value)}
          value={this.state.input}
          placeholder="Create a new task" />
        <Button /*click={newTaskUpdate}*/ name='Add' type='create' />
        <Results inputResults={this.state.input} />
      </div>
    );
  }
}

export default App;
