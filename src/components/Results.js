import React, { Component } from 'react';
// import axios from 'axios';
import DeleteButton from './DeleteButton'


class Results extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }
    update = (item) => {
        this.props.updateIt(item.id, this.state.input)
        this.setState({ input: ''})
    }

    render() {
        let resultsList = this.props.inputResults.map((item) => {
            return (
                <div key={item.id}>
                    <h3>
                        {item.name}
                        <DeleteButton click={this.props.deleteIt} id={item.id}
                            name='Mark Done' type='delete' />
                        <button onClick={()=> this.update(item)}>edit</button>
                        <input onChange={event => this.setState({input: event.target.value})}/>
                    </h3>
                </div>
            )
        })
        return (
            <div>
                {resultsList}
            </div>
        )
    }
}


export default Results;