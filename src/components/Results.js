import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button'



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
    componentDidMount() {
        axios.get('./api/tasks').then(response => {
            console.log('Get response data: ', response.data)
            this.setState({
                results: response.data
            })
        })
    }
    // sendInput = () => {
    //     axios.get('./api/tasks').then(response => {
    //         console.log(response)
    //         this.setState({
    //             results: response.name
    //         })
    //     })
    // }




    render() {
        console.log(55555555, this.state.results)
        let resultsList = this.state.results.map((item, ind) => {
            return (
                <div key={ind}>
                    <h3>{item.name}</h3>
                </div>
            )
        })
        console.log(77777, resultsList)

        return (
            <div>
                <Button /*onClick={() => this.sendInput}*/ name='render list' type='get' />
                {resultsList}
            </div>
        );
    }
}

export default Results;