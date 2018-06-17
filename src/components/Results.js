import React, { Component } from 'react';
import axios from 'axios';
// import Button from './Button'



class Results extends Component {
    constructor(props) {
        super(props);
        console.log(111, props)
        console.log(333333, this.props);

        this.state = {
            results: this.props.inputResults,
            resultsDisplay: []
        }
        
        // this.state.results = this.state.results.bind(this)
        console.log(222, this.state)
    }

    componentDidMount = () => {
        axios.get('./api/tasks').then(response => {
            // console.log(99999, response)
            this.setState({
               resultsDisplay: response.data
            })
        })
    }


    render() {
        console.log('Check results from state', this.state.resultsDisplay)
        let resultsList = this.state.resultsDisplay.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                </div>
            )
        })
        

        return (
            <div>
                {resultsList}
            </div>
        );
    }
}

export default Results;