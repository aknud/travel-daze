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

  componentDidMount = () => {
    axios.get('/api/tasks').then(response => {
      this.setState({
        resultList: response.data
      })
    })
  }

  updateInput = (val) => {
    this.setState({ input: val })
  }

  newTaskUpdate = () => {
    axios.post('/api/tasks', { name: this.state.input })
    .then(response => {
      return this.setState({
        resultList: response.data,
        input: ''
      })
    })
  }

  deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`).then(response => {
      this.setState({ resultList: response.data });
    });
  }

  editThing = (id, updatedName) => {
    axios.put(`/api/tasks/${id}`, {name: updatedName}).then(response => {
      this.setState({ resultList: response.data });
    });
  }

  render() {
    console.log('State on app.js', this.state)
    return (
      <div className="App">
        <h1>Task List</h1>
        <input type="text"
          newtask={this.state.input}
          onChange={(event) => this.updateInput(event.target.value)}
          value={this.state.input}
          placeholder="Create a new task" />
        <Button click={this.newTaskUpdate} name='Add' type='create' />
        <div className='task_items'>
          <Results inputResults={this.state.resultList} deleteIt={this.deleteTask} updateIt={this.editThing}/>
          
        </div>
      </div>
    );
  }
}

export default App;
