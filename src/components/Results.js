import React, { Component } from 'react';
import axios from 'axios';



class Results extends Component {
    constructor() {
        super();

        this.state = {
            results: []
        }
    }

    // this should be done server-side with a axios.post()??
    // addChore(props){
    //     this.setState({
    //         results: props.inputResults
    //     })
    //   }

      sendInput = () => {
        
        axios.get('./api/tasks').then(response => {
            console.log(response)
            this.setState({
                results: response.name
            })
        })
      }
    


    render() {

        let resultsList = this.state.results.map((item, ind) => {
            return (
                <div key={ind}>
                    <h3>{item}</h3>
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