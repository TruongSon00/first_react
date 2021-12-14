import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 },
        ]
    }

    handleDelete = propId => {
        const newCounter = this.state.counters.filter(c => c.id !== propId)
        this.setState({ counters: newCounter })
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        value={counter.value}
                        id={counter.id}
                        onDelete={this.handleDelete} >
                        <span> Truong Son</span>   {counter.id}
                    </Counter>)
                }
            </div>
        );
    }
}

export default Counters;
