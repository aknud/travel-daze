import React, { Component } from 'react';
//import axios from 'Axios';



class Results extends Component {
    constructor() {
        super();

        this.state = {
            results: []
        }
    }

    //this should be done server-side with a axios.post()??
    // addChore(){
    //     this.setState({
    //         results: props.newTask
    //     })
    //   }


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