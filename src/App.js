import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Button from './components/Button';
import Results from './components/Results';



class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      resultList: []
    }
  }

  updateInput =(val) => {
    return this.setState({ input: val })
  }


  newTaskUpdate=()=>{
    console.log(55555, this)
    axios.post('/api/tasks', {name: this.state.input }).then(response => {
      console.log(99999, response)
      return this.setState({
      resultList: response.data
    })
    }) 
  }


  render() {
    return (
      <div className="App">
        <h1>Task List</h1>
        <input type="text"
          newtask={this.state.input}
          onChange={(event) => this.updateInput(event.target.value)}
          value={this.state.input}
          placeholder="Create a new task" />
        <Button click={this.newTaskUpdate} name='Add' type='create' />
        <Results inputResults={this.state.resultList} />
      </div>
    );
  }
}

export default App;
